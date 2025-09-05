import typing
from dataclasses import dataclass
from datetime import date


@dataclass
class PorcentajesParcial:
    conocimiento: float
    desempeno: float
    producto: float
    proyecto_integrador: float


@dataclass
class Parcial:
    numero_parcial: int
    porcentajes: PorcentajesParcial
    fecha_examen: date


class InicioPAM:
    def __init__(
            self,
            reglamento_poo: list[str],
            parciales: list[Parcial]
    ):
        self.reglamento_poo = reglamento_poo
        self.parciales = parciales

    def format_reglamento(self) -> str:
        enumerado = [
            f"{index}.- {regla}"
            for index, regla in enumerate(self.reglamento_poo, start=1)
        ]
        return "\n".join(enumerado)

    def get_parcial(self, numero_parcial: int) -> typing.Optional[Parcial]:
        for parcial in self.parciales:
            if parcial.numero_parcial == numero_parcial:
                return parcial
        return None

    def format_fecha_parcial(self, numero_parcial) -> str:
        parcial = self.get_parcial(numero_parcial)
        return parcial.fecha_examen.strftime('%')

    def format_porcentajes_parcial(self, numero_parcial):
        parcial = self.get_parcial(numero_parcial)
        porcentajes = [
            ('Conocimiento', parcial.porcentajes.conocimiento),
            ('Desempeño', parcial.porcentajes.conocimiento),
            ('Producto', parcial.porcentajes.conocimiento),
            ('Proyecto Integrador', parcial.porcentajes.conocimiento)
        ]

        return '\n'.join([f"Porcentaje {p[0]}: {p[1]}" for p in porcentajes])
