import {Platform} from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }

    async initialize() {
        if (Platform.OS === 'web') {
            console.log('Usando LocalStorage para web');
        } else {
            console.log('Usando SQLite para movil');
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);
        }
    }

    async getAll() {
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
        }
    }

    async add(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();

            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fechaCreacion: new Date().toISOString(),
            };

            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios))
            return nuevoUsuario;
        } else {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios(nombre) VALUES(?)',
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fecha_creacion: new Date().toISOString()
            }
        }
    }

    async delete(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();

            const filtered = usuarios.filter(usuario => usuario.nombre !== nombre);

            localStorage.setItem(this.storageKey, JSON.stringify(filtered));
        } else {
            await this.db.runAsync(
                `DELETE
                 FROM usuarios
                 WHERE
                     nombre = ?`,
                nombre
            );
        }
    }

    async update(viejoNombre, nuevoNombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();

            const usuario = usuarios.find(u => u.nombre === viejoNombre);
            if (!usuario) throw new Error('No se encontró el usuario.');

            usuario.nombre = nuevoNombre;

            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return usuario;
        } else {
            const {changes, affectedId} = await this.db.runAsync(
                `UPDATE usuarios
                 SET
                     nombre = ?
                 WHERE
                     nombre = ?`,
                [nuevoNombre, viejoNombre]
            );
            if (!changes) throw new Error('No se encontró el usuario.');

            const usuarios = await this.getAll();

            return usuarios.filter(usuario => usuario.id === affectedId);
        }
    }
}

export default new DatabaseService();