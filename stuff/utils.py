from inicio_pam import Parcial, PorcentajesParcial
from datetime import date

reglamento = [
'Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.'
'Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de inicio:7:00a.m y 14:00 p.m).',
'Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a), justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al tutor para ser validados y de forma posterior emitidos).',
'Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)'
'Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.',
'Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.',
'El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.',
'Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final',
'En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.',
'Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.',
'Prohibido el uso de audífonos durante la clase.',
'Prohibido comer y/o tomar líquidos en el salón.',
'Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.',
'Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)',
'Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.',
'El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación',
'Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el 50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.'
]

parciales = [
    Parcial(
        numero_parcial=1,
        fecha_examen=date(year=2025, month=10, day=1),
        porcentajes=PorcentajesParcial(
            conocimiento=0.40,
            desempeno=0.20,
            producto=0.30,
            proyecto_integrador=0.10
        )
    ),
    Parcial(
        numero_parcial=2,
        fecha_examen=date(year=2025, month=10, day=5),
        porcentajes=PorcentajesParcial(
            conocimiento=0.40,
            desempeno=0.20,
            producto=0.20,
            proyecto_integrador=0.20
        )
    ),
    Parcial(
        numero_parcial=3,
        fecha_examen=date(year=2025, month=12, day=3),
        porcentajes=PorcentajesParcial(
            conocimiento=0.20,
            desempeno=0.10,
            producto=0.40,
            proyecto_integrador=0.30
        )
    )
]