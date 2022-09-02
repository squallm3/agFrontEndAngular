import { Position, WorkPlaces } from "./workplaces.model";

export const workPlacesArr = [
    new WorkPlaces("assets/logo_import_pro.png",
      'Import Pro',
       new Position('Developer','Junio 2021 - Actualidad', ['Desarrollo de herramientas para el acompañamiento de los procesos internos.']),
       new Position('Project Manager','Junio 2021 - Actualidad',['Gestión de diversos proyectos de optimización de recursos.']),
       new Position('Análisis e Implementación de Procesos Internos', 'Junio 2021 - Actualidad', ['Relevamiento  e implementación de procesos en diversas herramientas informáticas.'])
    ),
    // new WorkPlaces("assets/logo_acumar.png",
    //   'Acumar',
    // ['Team Leader de Centro de Atención a Usuarios', 'Julio 2012 - Junio 2021', 'Coordinación de equipos: soporte telefónico, visitas on-site e inventario.',
    // 'Supervisión de tickets.', 'Soporte técnico nivel 3.', 'Gestión de compras.', 'Despliegue y gestión de servicios: WSUS, WDS, SCCM, Software Repository, OTRS, Invgate, Telefonía Fija y Celular.',
    // 'Migración de Sistemas Operativos Windows 10.'],
]
