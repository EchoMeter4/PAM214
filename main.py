from tkinter import *
from tkinter import ttk

from inicio_pam import InicioPAM
from utils import parciales, reglamento


def main():
    root = Tk()
    root.title("Información Clase")

    frame = ttk.Frame(root, padding=10)
    frame.grid()
    inicio_pam = InicioPAM(reglamento, parciales)

    texto_dropdown = StringVar(root, 'Choose...')

    mb = Menubutton(root, textvariable=texto_dropdown)
    ttk.Label(root, text='Reglamento').grid(row=0, column=0)
    ttk.Label(root, text=inicio_pam.format_reglamento(), wraplength=700).grid(
        row=1, column=0,
        columnspan=20
    )
    ttk.Label(root, text='Selecciona un parcial:').grid(row=2, column=0)
    mb.grid(row=2, column=1)
    menu = Menu(mb)
    mb["menu"] = menu

    fecha_examen_texto = StringVar()
    ttk.Label(root, textvariable=fecha_examen_texto).grid(row=3, column=0)

    texto_lineamientos = StringVar()
    ttk.Label(root, textvariable=texto_lineamientos).grid(row=4, column=0)

    def elegir(lbl):
        texto_dropdown.set(lbl)
        parcial = int(texto_dropdown.get().split(' ')[-1])
        fecha_examen_texto.set(
            "Fecha examen: " + inicio_pam.format_fecha_parcial(parcial)
        )
        texto_lineamientos.set(
            inicio_pam.format_porcentajes_parcial(parcial)
        )

    for label in inicio_pam.format_labels_parciales():
        menu.add_command(label=label, command=lambda l=label: elegir(l))

    root.mainloop()


if __name__ == '__main__':
    main()
