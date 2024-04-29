--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.1

-- Started on 2024-04-24 00:44:01

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16386)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying NOT NULL,
    code character varying NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16385)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.roles_id_seq OWNER TO postgres;

--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 215
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 222 (class 1259 OID 16411)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    name character varying NOT NULL,
    telephone character varying NOT NULL,
    password character varying NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16410)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 218 (class 1259 OID 16395)
-- Name: xtoken_transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.xtoken_transactions (
    id bigint NOT NULL,
    xtoken_id integer,
    from_user integer NOT NULL,
    to_user integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.xtoken_transactions OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16394)
-- Name: xtoken_transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.xtoken_transactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.xtoken_transactions_id_seq OWNER TO postgres;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 217
-- Name: xtoken_transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.xtoken_transactions_id_seq OWNED BY public.xtoken_transactions.id;


--
-- TOC entry 220 (class 1259 OID 16403)
-- Name: xtokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.xtokens (
    id integer NOT NULL,
    item_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    modified_at timestamp without time zone,
    belongs_to integer NOT NULL,
    issued_by_company integer NOT NULL
);


ALTER TABLE public.xtokens OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16402)
-- Name: xtokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.xtokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.xtokens_id_seq OWNER TO postgres;

--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 219
-- Name: xtokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.xtokens_id_seq OWNED BY public.xtokens.id;


--
-- TOC entry 3218 (class 2604 OID 16389)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3223 (class 2604 OID 16414)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3219 (class 2604 OID 16398)
-- Name: xtoken_transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.xtoken_transactions ALTER COLUMN id SET DEFAULT nextval('public.xtoken_transactions_id_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 16406)
-- Name: xtokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.xtokens ALTER COLUMN id SET DEFAULT nextval('public.xtokens_id_seq'::regclass);


--
-- TOC entry 3381 (class 0 OID 16386)
-- Dependencies: 216
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3387 (class 0 OID 16411)
-- Dependencies: 222
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3383 (class 0 OID 16395)
-- Dependencies: 218
-- Data for Name: xtoken_transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3385 (class 0 OID 16403)
-- Dependencies: 220
-- Data for Name: xtokens; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 215
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 217
-- Name: xtoken_transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.xtoken_transactions_id_seq', 1, false);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 219
-- Name: xtokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.xtokens_id_seq', 1, false);


--
-- TOC entry 3229 (class 2606 OID 16409)
-- Name: xtokens PK_0c4fd35b048a6f39c7a1a0ca573; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.xtokens
    ADD CONSTRAINT "PK_0c4fd35b048a6f39c7a1a0ca573" PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 16401)
-- Name: xtoken_transactions PK_511f250da561a2ab7d79b206023; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.xtoken_transactions
    ADD CONSTRAINT "PK_511f250da561a2ab7d79b206023" PRIMARY KEY (id);


--
-- TOC entry 3231 (class 2606 OID 16418)
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 16393)
-- Name: roles PK_c1433d71a4838793a49dcad46ab; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY (id);


--
-- TOC entry 3233 (class 2606 OID 16420)
-- Name: users REL_a2cecd1a3531c0b041e29ba46e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "REL_a2cecd1a3531c0b041e29ba46e" UNIQUE (role_id);


--
-- TOC entry 3235 (class 2606 OID 16426)
-- Name: xtokens FK_0d7a2de45b7b9577fddce24b384; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.xtokens
    ADD CONSTRAINT "FK_0d7a2de45b7b9577fddce24b384" FOREIGN KEY (belongs_to) REFERENCES public.users(id);


--
-- TOC entry 3234 (class 2606 OID 16421)
-- Name: xtoken_transactions FK_625922358a26609eed7a5a434fe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.xtoken_transactions
    ADD CONSTRAINT "FK_625922358a26609eed7a5a434fe" FOREIGN KEY (xtoken_id) REFERENCES public.xtokens(id);


--
-- TOC entry 3236 (class 2606 OID 16431)
-- Name: users FK_a2cecd1a3531c0b041e29ba46e1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY (role_id) REFERENCES public.roles(id);


-- Completed on 2024-04-24 00:44:01

--
-- PostgreSQL database dump complete
--