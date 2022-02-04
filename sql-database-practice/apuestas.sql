CREATE TABLE IF NOT EXISTS public.equipo
(
    id_equipo integer NOT NULL,
    nombre character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT equipo_pkey PRIMARY KEY (id_equipo)
);

CREATE TABLE IF NOT EXISTS public.apostador
(
    id_apostador integer NOT NULL,
    apellidos character varying(80) COLLATE pg_catalog."default",
    nombres character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT apostador_pkey PRIMARY KEY (id_apostador)
);

CREATE TABLE IF NOT EXISTS public.marcador
(
    id_marcador integer NOT NULL,
    cant_goles_equipo_1 integer,
    cant_goles_equipo_2 integer,
    CONSTRAINT marcador_pkey PRIMARY KEY (id_marcador)
);

CREATE TABLE IF NOT EXISTS public.partido
(
    id_partido integer NOT NULL,
    fecha timestamp without time zone,
    id_equipo1 integer NOT NULL,
    id_equipo2 integer NOT NULL,
    id_equipo_ganador integer NOT NULL,
    id_marcador_definitivo integer NOT NULL,
    CONSTRAINT partido_pkey PRIMARY KEY (id_partido),
    CONSTRAINT fk3fer7hk0v64clwda7eb6xraya FOREIGN KEY (id_marcador_definitivo)
        REFERENCES public.marcador (id_marcador) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkb6jgrwpe05ao6tkku6v9wesv9 FOREIGN KEY (id_equipo1)
        REFERENCES public.equipo (id_equipo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkhjc6k59twaurghnr00w9h8ojy FOREIGN KEY (id_equipo_ganador)
        REFERENCES public.equipo (id_equipo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkxnopqi1v7bo2ahrasmrg9htk FOREIGN KEY (id_equipo2)
        REFERENCES public.equipo (id_equipo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.apuesta
(
    id_apuesta integer NOT NULL,
    fecha timestamp without time zone,
    id_apostador integer NOT NULL,
    id_marcador_apostado integer NOT NULL,
    id_partido integer NOT NULL,
    CONSTRAINT apuesta_pkey PRIMARY KEY (id_apuesta),
    CONSTRAINT fkf9713g3svo59q0atpkuxq07yn FOREIGN KEY (id_marcador_apostado)
        REFERENCES public.marcador (id_marcador) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkjlxqaohcnrw6y9mmq7jbbf4r1 FOREIGN KEY (id_apostador)
        REFERENCES public.apostador (id_apostador) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkknservimr3qv0m57ki2dxo1n4 FOREIGN KEY (id_partido)
        REFERENCES public.partido (id_partido) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

INSERT INTO public.equipo(id_equipo, nombre) VALUES (1, 'Alianza Lima');
INSERT INTO public.equipo(id_equipo, nombre) VALUES (2, 'Universitario de Deportes');
INSERT INTO public.equipo(id_equipo, nombre) VALUES (3, 'Sporting Cristal');
INSERT INTO public.equipo(id_equipo, nombre) VALUES (4, 'Sport Boys');

INSERT INTO public.apostador(id_apostador, apellidos, nombres) VALUES (1, 'Ruiz Cerna', 'Jimena Alexandra');
INSERT INTO public.apostador(id_apostador, apellidos, nombres) VALUES (2, 'Torres García', 'Andrea Fiorella');
INSERT INTO public.apostador(id_apostador, apellidos, nombres) VALUES (3, 'Hernández Jiménez', 'Juan Enrique');
INSERT INTO public.apostador(id_apostador, apellidos, nombres) VALUES (4, 'Sánchez Paredes', 'Luis Antonio');

INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (1, 0, 3);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (2, 1, 3);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (3, 2, 2);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (4, 3, 3);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (5, 0, 0);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (6, 0, 2);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (7, 1, 2);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (8, 0, 4);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (9, 1, 1);
INSERT INTO public.marcador(id_marcador, cant_goles_equipo_1, cant_goles_equipo_2) VALUES (10, 3, 2);

INSERT INTO public.partido(id_partido, fecha, id_equipo1, id_equipo2, id_equipo_ganador, id_marcador_definitivo) VALUES (1, '2022-02-01', 1, 4, 1, 1);
INSERT INTO public.partido(id_partido, fecha, id_equipo1, id_equipo2, id_equipo_ganador, id_marcador_definitivo) VALUES (2, '2022-02-02', 2, 3, 2, 2);
INSERT INTO public.partido(id_partido, fecha, id_equipo1, id_equipo2, id_equipo_ganador, id_marcador_definitivo) VALUES (3, '2022-02-03', 3, 4, 4, 3);
INSERT INTO public.partido(id_partido, fecha, id_equipo1, id_equipo2, id_equipo_ganador, id_marcador_definitivo) VALUES (4, '2022-02-04', 4, 3, 3, 4);

INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (1, '2022-02-04', 1, 1, 1);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (2, '2022-02-04', 2, 8, 1);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (3, '2022-02-04', 3, 6, 1);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (4, '2022-02-04', 4, 4, 1);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (5, '2022-02-04', 1, 1, 2);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (6, '2022-02-04', 2, 8, 2);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (7, '2022-02-04', 3, 4, 2);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (8, '2022-02-04', 4, 4, 2);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (9, '2022-02-04', 1, 3, 3);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (10, '2022-02-04', 2, 3, 3);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (11, '2022-02-04', 3, 2, 3);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (12, '2022-02-04', 4, 4, 3);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (13, '2022-02-04', 1, 4, 4);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (14, '2022-02-04', 2, 8, 4);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (15, '2022-02-04', 3, 1, 4);
INSERT INTO public.apuesta(id_apuesta, fecha, id_apostador, id_marcador_apostado, id_partido) VALUES (16, '2022-02-04', 4, 6, 4);

-- CONSULTA QUE MUESTRA QUÉ EQUIPOS HAN GANADO MÁS PARTIDOSdemo
SELECT EQUIPO.nombre, COUNT(EQUIPO.id_equipo)
FROM PARTIDO
INNER JOIN EQUIPO ON EQUIPO.id_equipo = PARTIDO.id_equipo_ganador
GROUP BY EQUIPO.id_equipo
ORDER BY COUNT(EQUIPO.id_equipo) DESC;

-- CONSULTA QUE MUESTRA EL MARCADOR QUE MÁS APUESTAS TIENE
SELECT MARCADOR.cant_goles_equipo_1, MARCADOR.cant_goles_equipo_2, COUNT(MARCADOR.id_marcador)
FROM MARCADOR
INNER JOIN APUESTA ON APUESTA.id_marcador_apostado = MARCADOR.id_marcador
GROUP BY MARCADOR.id_marcador
ORDER BY COUNT(MARCADOR.id_marcador) DESC;

-- RETO: CONSULTA QUE MUESTRA LOS APOSTADORES CON MÁS APUESTAS
SELECT APOSTADOR.nombres, APOSTADOR.apellidos, COUNT(apostador.id_apostador)
FROM APUESTA
INNER JOIN PARTIDO ON APUESTA.id_marcador_apostado = PARTIDO.id_marcador_definitivo
INNER JOIN APOSTADOR ON APUESTA.id_apostador = apostador.id_apostador
GROUP BY APOSTADOR.id_apostador
ORDER BY COUNT(apostador.id_apostador) DESC;