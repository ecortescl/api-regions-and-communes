const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;// Puedes cambiar el puerto si es necesario

const regionsAndCommunes = [
    {
        "N°": "1",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PEÑAFLOR"
    },
    {
        "N°": "2",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PADRE HURTADO"
    },
    {
        "N°": "3",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "ISLA DE MAIPO"
    },
    {
        "N°": "4",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "EL MONTE"
    },
    {
        "N°": "5",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "TALAGANTE"
    },
    {
        "N°": "6",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SAN PEDRO"
    },
    {
        "N°": "7",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "MARIA PINTO"
    },
    {
        "N°": "8",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "CURACAVI"
    },
    {
        "N°": "9",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "ALHUE"
    },
    {
        "N°": "10",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "MELIPILLA"
    },
    {
        "N°": "11",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PAINE"
    },
    {
        "N°": "12",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "CALERA DE TANGO"
    },
    {
        "N°": "13",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "BUIN"
    },
    {
        "N°": "14",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SAN BERNARDO"
    },
    {
        "N°": "15",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "TIL TIL"
    },
    {
        "N°": "16",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LAMPA"
    },
    {
        "N°": "17",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "COLINA"
    },
    {
        "N°": "18",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SAN JOSE DE MAIPO"
    },
    {
        "N°": "19",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PIRQUE"
    },
    {
        "N°": "20",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PUENTE ALTO"
    },
    {
        "N°": "21",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "VITACURA"
    },
    {
        "N°": "22",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SAN RAMON"
    },
    {
        "N°": "23",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SAN MIGUEL"
    },
    {
        "N°": "24",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SAN JOAQUIN"
    },
    {
        "N°": "25",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "RENCA"
    },
    {
        "N°": "26",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "RECOLETA"
    },
    {
        "N°": "27",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "QUINTA NORMAL"
    },
    {
        "N°": "28",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "QUILICURA"
    },
    {
        "N°": "29",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PUDAHUEL"
    },
    {
        "N°": "30",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PROVIDENCIA"
    },
    {
        "N°": "31",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PEÑALOLEN"
    },
    {
        "N°": "32",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "PEDRO AGUIRRE CERDA"
    },
    {
        "N°": "33",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "ÑUÑOA"
    },
    {
        "N°": "34",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "MAIPU"
    },
    {
        "N°": "35",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "MACUL"
    },
    {
        "N°": "36",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LO PRADO"
    },
    {
        "N°": "37",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LO ESPEJO"
    },
    {
        "N°": "38",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LO BARNECHEA"
    },
    {
        "N°": "39",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LAS CONDES"
    },
    {
        "N°": "40",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LA REINA"
    },
    {
        "N°": "41",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LA PINTANA"
    },
    {
        "N°": "42",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LA GRANJA"
    },
    {
        "N°": "43",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LA FLORIDA"
    },
    {
        "N°": "44",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "LA CISTERNA"
    },
    {
        "N°": "45",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "INDEPENDENCIA"
    },
    {
        "N°": "46",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "HUECHURABA"
    },
    {
        "N°": "47",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "ESTACION CENTRAL"
    },
    {
        "N°": "48",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "EL BOSQUE"
    },
    {
        "N°": "49",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "CONCHALI"
    },
    {
        "N°": "50",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "CERRO NAVIA"
    },
    {
        "N°": "51",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "CERRILLOS"
    },
    {
        "N°": "52",
        "Region": "METROPOLITANA DE SANTIAGO",
        "Comuna": "SANTIAGO"
    },
    {
        "N°": "53",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "TORRES DEL PAINE"
    },
    {
        "N°": "54",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "NATALES"
    },
    {
        "N°": "55",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "TIMAUKEL"
    },
    {
        "N°": "56",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "PRIMAVERA"
    },
    {
        "N°": "57",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "PORVENIR"
    },
    {
        "N°": "58",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "ANTÁRTICA"
    },
    {
        "N°": "59",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "CABO DE HORNOS"
    },
    {
        "N°": "60",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "SAN GREGORIO"
    },
    {
        "N°": "61",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "RIO VERDE"
    },
    {
        "N°": "62",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "LAGUNA BLANCA"
    },
    {
        "N°": "63",
        "Region": "MAGALLANES Y DE LA ANTÁRTICA CHILENA",
        "Comuna": "PUNTA ARENAS"
    },
    {
        "N°": "64",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "RIO IBAÑEZ"
    },
    {
        "N°": "65",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "CHILE CHICO"
    },
    {
        "N°": "66",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "TORTEL"
    },
    {
        "N°": "67",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "O'HIGGINS"
    },
    {
        "N°": "68",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "COYHAIQUE / COIHAIQUE"
    },
    {
        "N°": "69",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "COCHRANE"
    },
    {
        "N°": "70",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "GUAITECAS"
    },
    {
        "N°": "71",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "CISNES"
    },
    {
        "N°": "72",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "AYSEN / AISEN"
    },
    {
        "N°": "73",
        "Region": "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO",
        "Comuna": "LAGO VERDE"
    },
    {
        "N°": "74",
        "Region": "LOS LAGOS",
        "Comuna": "PALENA"
    },
    {
        "N°": "75",
        "Region": "LOS LAGOS",
        "Comuna": "HUALAIHUE"
    },
    {
        "N°": "76",
        "Region": "LOS LAGOS",
        "Comuna": "FUTALEUFU"
    },
    {
        "N°": "77",
        "Region": "LOS LAGOS",
        "Comuna": "CHAITEN"
    },
    {
        "N°": "78",
        "Region": "LOS LAGOS",
        "Comuna": "SAN PABLO"
    },
    {
        "N°": "79",
        "Region": "LOS LAGOS",
        "Comuna": "SAN JUAN DE LA COSTA"
    },
    {
        "N°": "80",
        "Region": "LOS LAGOS",
        "Comuna": "RIO NEGRO"
    },
    {
        "N°": "81",
        "Region": "LOS LAGOS",
        "Comuna": "PUYEHUE"
    },
    {
        "N°": "82",
        "Region": "LOS LAGOS",
        "Comuna": "PURRANQUE"
    },
    {
        "N°": "83",
        "Region": "LOS LAGOS",
        "Comuna": "PUERTO OCTAY"
    },
    {
        "N°": "84",
        "Region": "LOS LAGOS",
        "Comuna": "OSORNO"
    },
    {
        "N°": "85",
        "Region": "LOS LAGOS",
        "Comuna": "QUINCHAO"
    },
    {
        "N°": "86",
        "Region": "LOS LAGOS",
        "Comuna": "QUEMCHI"
    },
    {
        "N°": "87",
        "Region": "LOS LAGOS",
        "Comuna": "QUELLON"
    },
    {
        "N°": "88",
        "Region": "LOS LAGOS",
        "Comuna": "QUEILEN"
    },
    {
        "N°": "89",
        "Region": "LOS LAGOS",
        "Comuna": "PUQUELDON"
    },
    {
        "N°": "90",
        "Region": "LOS LAGOS",
        "Comuna": "DALCAHUE"
    },
    {
        "N°": "91",
        "Region": "LOS LAGOS",
        "Comuna": "CURACO DE VELEZ"
    },
    {
        "N°": "92",
        "Region": "LOS LAGOS",
        "Comuna": "CHONCHI"
    },
    {
        "N°": "93",
        "Region": "LOS LAGOS",
        "Comuna": "ANCUD"
    },
    {
        "N°": "94",
        "Region": "LOS LAGOS",
        "Comuna": "CASTRO"
    },
    {
        "N°": "95",
        "Region": "LOS LAGOS",
        "Comuna": "PUERTO VARAS"
    },
    {
        "N°": "96",
        "Region": "LOS LAGOS",
        "Comuna": "MAULLIN"
    },
    {
        "N°": "97",
        "Region": "LOS LAGOS",
        "Comuna": "LLANQUIHUE"
    },
    {
        "N°": "98",
        "Region": "LOS LAGOS",
        "Comuna": "LOS MUERMOS"
    },
    {
        "N°": "99",
        "Region": "LOS LAGOS",
        "Comuna": "FRUTILLAR"
    },
    {
        "N°": "100",
        "Region": "LOS LAGOS",
        "Comuna": "FRESIA"
    },
    {
        "N°": "101",
        "Region": "LOS LAGOS",
        "Comuna": "COCHAMO"
    },
    {
        "N°": "102",
        "Region": "LOS LAGOS",
        "Comuna": "CALBUCO"
    },
    {
        "N°": "103",
        "Region": "LOS LAGOS",
        "Comuna": "PUERTO MONTT"
    },
    {
        "N°": "104",
        "Region": "LOS RÍOS",
        "Comuna": "RIO BUENO"
    },
    {
        "N°": "105",
        "Region": "LOS RÍOS",
        "Comuna": "LAGO RANCO"
    },
    {
        "N°": "106",
        "Region": "LOS RÍOS",
        "Comuna": "FUTRONO"
    },
    {
        "N°": "107",
        "Region": "LOS RÍOS",
        "Comuna": "LA UNION"
    },
    {
        "N°": "108",
        "Region": "LOS RÍOS",
        "Comuna": "PANGUIPULLI"
    },
    {
        "N°": "109",
        "Region": "LOS RÍOS",
        "Comuna": "PAILLACO"
    },
    {
        "N°": "110",
        "Region": "LOS RÍOS",
        "Comuna": "MARIQUINA"
    },
    {
        "N°": "111",
        "Region": "LOS RÍOS",
        "Comuna": "MAFIL"
    },
    {
        "N°": "112",
        "Region": "LOS RÍOS",
        "Comuna": "LOS LAGOS"
    },
    {
        "N°": "113",
        "Region": "LOS RÍOS",
        "Comuna": "LANCO"
    },
    {
        "N°": "114",
        "Region": "LOS RÍOS",
        "Comuna": "CORRAL"
    },
    {
        "N°": "115",
        "Region": "LOS RÍOS",
        "Comuna": "VALDIVIA"
    },
    {
        "N°": "116",
        "Region": "LA ARAUCANÍA",
        "Comuna": "VICTORIA"
    },
    {
        "N°": "117",
        "Region": "LA ARAUCANÍA",
        "Comuna": "TRAIGUEN"
    },
    {
        "N°": "118",
        "Region": "LA ARAUCANÍA",
        "Comuna": "RENAICO"
    },
    {
        "N°": "119",
        "Region": "LA ARAUCANÍA",
        "Comuna": "PUREN"
    },
    {
        "N°": "120",
        "Region": "LA ARAUCANÍA",
        "Comuna": "LUMACO"
    },
    {
        "N°": "121",
        "Region": "LA ARAUCANÍA",
        "Comuna": "LOS SAUCES"
    },
    {
        "N°": "122",
        "Region": "LA ARAUCANÍA",
        "Comuna": "LONQUIMAY"
    },
    {
        "N°": "123",
        "Region": "LA ARAUCANÍA",
        "Comuna": "CURACAUTIN"
    },
    {
        "N°": "124",
        "Region": "LA ARAUCANÍA",
        "Comuna": "COLLIPULLI"
    },
    {
        "N°": "125",
        "Region": "LA ARAUCANÍA",
        "Comuna": "ERCILLA"
    },
    {
        "N°": "126",
        "Region": "LA ARAUCANÍA",
        "Comuna": "ANGOL"
    },
    {
        "N°": "127",
        "Region": "LA ARAUCANÍA",
        "Comuna": "CHOLCHOL"
    },
    {
        "N°": "128",
        "Region": "LA ARAUCANÍA",
        "Comuna": "VILLARRICA"
    },
    {
        "N°": "129",
        "Region": "LA ARAUCANÍA",
        "Comuna": "VILCUN"
    },
    {
        "N°": "130",
        "Region": "LA ARAUCANÍA",
        "Comuna": "TOLTEN"
    },
    {
        "N°": "131",
        "Region": "LA ARAUCANÍA",
        "Comuna": "TEODORO SCHMIDT"
    },
    {
        "N°": "132",
        "Region": "LA ARAUCANÍA",
        "Comuna": "SAAVEDRA"
    },
    {
        "N°": "133",
        "Region": "LA ARAUCANÍA",
        "Comuna": "PUCON"
    },
    {
        "N°": "134",
        "Region": "LA ARAUCANÍA",
        "Comuna": "PITRUFQUEN"
    },
    {
        "N°": "135",
        "Region": "LA ARAUCANÍA",
        "Comuna": "PERQUENCO"
    },
    {
        "N°": "136",
        "Region": "LA ARAUCANÍA",
        "Comuna": "PADRE LAS CASAS"
    },
    {
        "N°": "137",
        "Region": "LA ARAUCANÍA",
        "Comuna": "NUEVA IMPERIAL"
    },
    {
        "N°": "138",
        "Region": "LA ARAUCANÍA",
        "Comuna": "MELIPEUCO"
    },
    {
        "N°": "139",
        "Region": "LA ARAUCANÍA",
        "Comuna": "LONCOCHE"
    },
    {
        "N°": "140",
        "Region": "LA ARAUCANÍA",
        "Comuna": "LAUTARO"
    },
    {
        "N°": "141",
        "Region": "LA ARAUCANÍA",
        "Comuna": "GORBEA"
    },
    {
        "N°": "142",
        "Region": "LA ARAUCANÍA",
        "Comuna": "GALVARINO"
    },
    {
        "N°": "143",
        "Region": "LA ARAUCANÍA",
        "Comuna": "FREIRE"
    },
    {
        "N°": "144",
        "Region": "LA ARAUCANÍA",
        "Comuna": "CURARREHUE"
    },
    {
        "N°": "145",
        "Region": "LA ARAUCANÍA",
        "Comuna": "CUNCO"
    },
    {
        "N°": "146",
        "Region": "LA ARAUCANÍA",
        "Comuna": "CARAHUE"
    },
    {
        "N°": "147",
        "Region": "LA ARAUCANÍA",
        "Comuna": "TEMUCO"
    },
    {
        "N°": "148",
        "Region": "DEL BIO BIO",
        "Comuna": "ALTO BIO BIO"
    },
    {
        "N°": "149",
        "Region": "DEL BIOBÍO",
        "Comuna": "YUMBEL"
    },
    {
        "N°": "150",
        "Region": "DEL BIOBÍO",
        "Comuna": "TUCAPEL"
    },
    {
        "N°": "151",
        "Region": "DEL BIOBÍO",
        "Comuna": "SANTA BARBARA"
    },
    {
        "N°": "152",
        "Region": "DEL BIOBÍO",
        "Comuna": "SAN ROSENDO"
    },
    {
        "N°": "153",
        "Region": "DEL BIOBÍO",
        "Comuna": "QUILLECO"
    },
    {
        "N°": "154",
        "Region": "DEL BIOBÍO",
        "Comuna": "QUILACO"
    },
    {
        "N°": "155",
        "Region": "DEL BIOBÍO",
        "Comuna": "NEGRETE"
    },
    {
        "N°": "156",
        "Region": "DEL BIOBÍO",
        "Comuna": "NACIMIENTO"
    },
    {
        "N°": "157",
        "Region": "DEL BIOBÍO",
        "Comuna": "MULCHEN"
    },
    {
        "N°": "158",
        "Region": "DEL BIOBÍO",
        "Comuna": "LAJA"
    },
    {
        "N°": "159",
        "Region": "DEL BIOBÍO",
        "Comuna": "CABRERO"
    },
    {
        "N°": "160",
        "Region": "DEL BIOBÍO",
        "Comuna": "ANTUCO"
    },
    {
        "N°": "161",
        "Region": "DEL BIOBÍO",
        "Comuna": "LOS ANGELES"
    },
    {
        "N°": "162",
        "Region": "DEL BIOBÍO",
        "Comuna": "TIRUA"
    },
    {
        "N°": "163",
        "Region": "DEL BIOBÍO",
        "Comuna": "LOS ALAMOS"
    },
    {
        "N°": "164",
        "Region": "DEL BIOBÍO",
        "Comuna": "CURANILAHUE"
    },
    {
        "N°": "165",
        "Region": "DEL BIOBÍO",
        "Comuna": "CONTULMO"
    },
    {
        "N°": "166",
        "Region": "DEL BIOBÍO",
        "Comuna": "CAÑETE"
    },
    {
        "N°": "167",
        "Region": "DEL BIOBÍO",
        "Comuna": "ARAUCO"
    },
    {
        "N°": "168",
        "Region": "DEL BIOBÍO",
        "Comuna": "LEBU"
    },
    {
        "N°": "169",
        "Region": "DEL BIOBÍO",
        "Comuna": "HUALPEN"
    },
    {
        "N°": "170",
        "Region": "DEL BIOBÍO",
        "Comuna": "TOME"
    },
    {
        "N°": "171",
        "Region": "DEL BIOBÍO",
        "Comuna": "TALCAHUANO"
    },
    {
        "N°": "172",
        "Region": "DEL BIOBÍO",
        "Comuna": "SANTA JUANA"
    },
    {
        "N°": "173",
        "Region": "DEL BIOBÍO",
        "Comuna": "SAN PEDRO DE LA PAZ"
    },
    {
        "N°": "174",
        "Region": "DEL BIOBÍO",
        "Comuna": "PENCO"
    },
    {
        "N°": "175",
        "Region": "DEL BIOBÍO",
        "Comuna": "LOTA"
    },
    {
        "N°": "176",
        "Region": "DEL BIOBÍO",
        "Comuna": "HUALQUI"
    },
    {
        "N°": "177",
        "Region": "DEL BIOBÍO",
        "Comuna": "FLORIDA"
    },
    {
        "N°": "178",
        "Region": "DEL BIOBÍO",
        "Comuna": "CHIGUAYANTE"
    },
    {
        "N°": "179",
        "Region": "DEL BIOBÍO",
        "Comuna": "CORONEL"
    },
    {
        "N°": "180",
        "Region": "DEL BIOBÍO",
        "Comuna": "CONCEPCION"
    },
    {
        "N°": "181",
        "Region": "ÑUBLE",
        "Comuna": "YUNGAY"
    },
    {
        "N°": "182",
        "Region": "ÑUBLE",
        "Comuna": "TREGUACO / TREHUACO"
    },
    {
        "N°": "183",
        "Region": "ÑUBLE",
        "Comuna": "SAN NICOLAS"
    },
    {
        "N°": "184",
        "Region": "ÑUBLE",
        "Comuna": "SAN IGNACIO"
    },
    {
        "N°": "185",
        "Region": "ÑUBLE",
        "Comuna": "SAN FABIAN"
    },
    {
        "N°": "186",
        "Region": "ÑUBLE",
        "Comuna": "SAN CARLOS"
    },
    {
        "N°": "187",
        "Region": "ÑUBLE",
        "Comuna": "RANQUIL"
    },
    {
        "N°": "188",
        "Region": "ÑUBLE",
        "Comuna": "QUIRIHUE"
    },
    {
        "N°": "189",
        "Region": "ÑUBLE",
        "Comuna": "QUILLON"
    },
    {
        "N°": "190",
        "Region": "ÑUBLE",
        "Comuna": "PORTEZUELO"
    },
    {
        "N°": "191",
        "Region": "ÑUBLE",
        "Comuna": "PINTO"
    },
    {
        "N°": "192",
        "Region": "ÑUBLE",
        "Comuna": "PEMUCO"
    },
    {
        "N°": "193",
        "Region": "ÑUBLE",
        "Comuna": "ÑIQUEN"
    },
    {
        "N°": "194",
        "Region": "ÑUBLE",
        "Comuna": "NINHUE"
    },
    {
        "N°": "195",
        "Region": "ÑUBLE",
        "Comuna": "EL CARMEN"
    },
    {
        "N°": "196",
        "Region": "ÑUBLE",
        "Comuna": "CHILLAN VIEJO"
    },
    {
        "N°": "197",
        "Region": "ÑUBLE",
        "Comuna": "COIHUECO"
    },
    {
        "N°": "198",
        "Region": "ÑUBLE",
        "Comuna": "COELEMU"
    },
    {
        "N°": "199",
        "Region": "ÑUBLE",
        "Comuna": "COBQUECURA"
    },
    {
        "N°": "200",
        "Region": "ÑUBLE",
        "Comuna": "BULNES"
    },
    {
        "N°": "201",
        "Region": "ÑUBLE",
        "Comuna": "CHILLAN"
    },
    {
        "N°": "202",
        "Region": "DEL MAULE",
        "Comuna": "YERBAS BUENAS"
    },
    {
        "N°": "203",
        "Region": "DEL MAULE",
        "Comuna": "VILLA ALEGRE"
    },
    {
        "N°": "204",
        "Region": "DEL MAULE",
        "Comuna": "SAN JAVIER"
    },
    {
        "N°": "205",
        "Region": "DEL MAULE",
        "Comuna": "RETIRO"
    },
    {
        "N°": "206",
        "Region": "DEL MAULE",
        "Comuna": "PARRAL"
    },
    {
        "N°": "207",
        "Region": "DEL MAULE",
        "Comuna": "LONGAVI"
    },
    {
        "N°": "208",
        "Region": "DEL MAULE",
        "Comuna": "COLBUN"
    },
    {
        "N°": "209",
        "Region": "DEL MAULE",
        "Comuna": "LINARES"
    },
    {
        "N°": "210",
        "Region": "DEL MAULE",
        "Comuna": "VICHUQUEN"
    },
    {
        "N°": "211",
        "Region": "DEL MAULE",
        "Comuna": "TENO"
    },
    {
        "N°": "212",
        "Region": "DEL MAULE",
        "Comuna": "SAGRADA FAMILIA"
    },
    {
        "N°": "213",
        "Region": "DEL MAULE",
        "Comuna": "ROMERAL"
    },
    {
        "N°": "214",
        "Region": "DEL MAULE",
        "Comuna": "RAUCO"
    },
    {
        "N°": "215",
        "Region": "DEL MAULE",
        "Comuna": "MOLINA"
    },
    {
        "N°": "216",
        "Region": "DEL MAULE",
        "Comuna": "LICANTEN"
    },
    {
        "N°": "217",
        "Region": "DEL MAULE",
        "Comuna": "HUALAÑE"
    },
    {
        "N°": "218",
        "Region": "DEL MAULE",
        "Comuna": "CURICO"
    },
    {
        "N°": "219",
        "Region": "DEL MAULE",
        "Comuna": "PELLUHUE"
    },
    {
        "N°": "220",
        "Region": "DEL MAULE",
        "Comuna": "CHANCO"
    },
    {
        "N°": "221",
        "Region": "DEL MAULE",
        "Comuna": "CAUQUENES"
    },
    {
        "N°": "222",
        "Region": "DEL MAULE",
        "Comuna": "SAN RAFAEL"
    },
    {
        "N°": "223",
        "Region": "DEL MAULE",
        "Comuna": "SAN CLEMENTE"
    },
    {
        "N°": "224",
        "Region": "DEL MAULE",
        "Comuna": "RIO CLARO"
    },
    {
        "N°": "225",
        "Region": "DEL MAULE",
        "Comuna": "PENCAHUE"
    },
    {
        "N°": "226",
        "Region": "DEL MAULE",
        "Comuna": "PELARCO"
    },
    {
        "N°": "227",
        "Region": "DEL MAULE",
        "Comuna": "MAULE"
    },
    {
        "N°": "228",
        "Region": "DEL MAULE",
        "Comuna": "EMPEDRADO"
    },
    {
        "N°": "229",
        "Region": "DEL MAULE",
        "Comuna": "CUREPTO"
    },
    {
        "N°": "230",
        "Region": "DEL MAULE",
        "Comuna": "CONSTITUCION"
    },
    {
        "N°": "231",
        "Region": "DEL MAULE",
        "Comuna": "TALCA"
    },
    {
        "N°": "232",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "SANTA CRUZ"
    },
    {
        "N°": "233",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PUMANQUE"
    },
    {
        "N°": "234",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PLACILLA"
    },
    {
        "N°": "235",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PERALILLO"
    },
    {
        "N°": "236",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PALMILLA"
    },
    {
        "N°": "237",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "NANCAGUA"
    },
    {
        "N°": "238",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "LOLOL"
    },
    {
        "N°": "239",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "CHIMBARONGO"
    },
    {
        "N°": "240",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "SAN FERNANDO"
    },
    {
        "N°": "241",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "CHEPICA"
    },
    {
        "N°": "242",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PAREDONES"
    },
    {
        "N°": "243",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "NAVIDAD"
    },
    {
        "N°": "244",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "MARCHIHUE"
    },
    {
        "N°": "245",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "LITUECHE"
    },
    {
        "N°": "246",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "LA ESTRELLA"
    },
    {
        "N°": "247",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PICHILEMU"
    },
    {
        "N°": "248",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "SAN VICENTE"
    },
    {
        "N°": "249",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "RENGO"
    },
    {
        "N°": "250",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "REQUINOA"
    },
    {
        "N°": "251",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "QUINTA DE TILCOCO"
    },
    {
        "N°": "252",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PICHIDEGUA"
    },
    {
        "N°": "253",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "PEUMO"
    },
    {
        "N°": "254",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "OLIVAR"
    },
    {
        "N°": "255",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "MOSTAZAL"
    },
    {
        "N°": "256",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "MALLOA"
    },
    {
        "N°": "257",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "MACHALI"
    },
    {
        "N°": "258",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "LAS CABRAS"
    },
    {
        "N°": "259",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "GRANEROS"
    },
    {
        "N°": "260",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "DOÑIHUE"
    },
    {
        "N°": "261",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "COLTAUCO"
    },
    {
        "N°": "262",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "COINCO"
    },
    {
        "N°": "263",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "CODEGUA"
    },
    {
        "N°": "264",
        "Region": "DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS",
        "Comuna": "RANCAGUA"
    },
    {
        "N°": "265",
        "Region": "VALPARAÍSO",
        "Comuna": "OLMUE"
    },
    {
        "N°": "266",
        "Region": "VALPARAÍSO",
        "Comuna": "QUILPUE"
    },
    {
        "N°": "267",
        "Region": "VALPARAÍSO",
        "Comuna": "VILLA ALEMANA"
    },
    {
        "N°": "268",
        "Region": "VALPARAÍSO",
        "Comuna": "LIMACHE"
    },
    {
        "N°": "269",
        "Region": "VALPARAÍSO",
        "Comuna": "SANTA MARIA"
    },
    {
        "N°": "270",
        "Region": "VALPARAÍSO",
        "Comuna": "PUTAENDO"
    },
    {
        "N°": "271",
        "Region": "VALPARAÍSO",
        "Comuna": "PANQUEHUE"
    },
    {
        "N°": "272",
        "Region": "VALPARAÍSO",
        "Comuna": "CATEMU"
    },
    {
        "N°": "273",
        "Region": "VALPARAÍSO",
        "Comuna": "LLAILLAY / LLAYLLAY"
    },
    {
        "N°": "274",
        "Region": "VALPARAÍSO",
        "Comuna": "SAN FELIPE"
    },
    {
        "N°": "275",
        "Region": "VALPARAÍSO",
        "Comuna": "SANTO DOMINGO"
    },
    {
        "N°": "276",
        "Region": "VALPARAÍSO",
        "Comuna": "EL TABO"
    },
    {
        "N°": "277",
        "Region": "VALPARAÍSO",
        "Comuna": "EL QUISCO"
    },
    {
        "N°": "278",
        "Region": "VALPARAÍSO",
        "Comuna": "CARTAGENA"
    },
    {
        "N°": "279",
        "Region": "VALPARAÍSO",
        "Comuna": "ALGARROBO"
    },
    {
        "N°": "280",
        "Region": "VALPARAÍSO",
        "Comuna": "SAN ANTONIO"
    },
    {
        "N°": "281",
        "Region": "VALPARAÍSO",
        "Comuna": "NOGALES"
    },
    {
        "N°": "282",
        "Region": "VALPARAÍSO",
        "Comuna": "LA CRUZ"
    },
    {
        "N°": "283",
        "Region": "VALPARAÍSO",
        "Comuna": "HIJUELAS"
    },
    {
        "N°": "284",
        "Region": "VALPARAÍSO",
        "Comuna": "LA CALERA"
    },
    {
        "N°": "285",
        "Region": "VALPARAÍSO",
        "Comuna": "QUILLOTA"
    },
    {
        "N°": "286",
        "Region": "VALPARAÍSO",
        "Comuna": "ZAPALLAR"
    },
    {
        "N°": "287",
        "Region": "VALPARAÍSO",
        "Comuna": "PETORCA"
    },
    {
        "N°": "288",
        "Region": "VALPARAÍSO",
        "Comuna": "PAPUDO"
    },
    {
        "N°": "289",
        "Region": "VALPARAÍSO",
        "Comuna": "CABILDO"
    },
    {
        "N°": "290",
        "Region": "VALPARAÍSO",
        "Comuna": "LA LIGUA"
    },
    {
        "N°": "291",
        "Region": "VALPARAÍSO",
        "Comuna": "SAN ESTEBAN"
    },
    {
        "N°": "292",
        "Region": "VALPARAÍSO",
        "Comuna": "RINCONADA"
    },
    {
        "N°": "293",
        "Region": "VALPARAÍSO",
        "Comuna": "CALLE LARGA"
    },
    {
        "N°": "294",
        "Region": "VALPARAÍSO",
        "Comuna": "LOS ANDES"
    },
    {
        "N°": "295",
        "Region": "VALPARAÍSO",
        "Comuna": "ISLA DE PASCUA"
    },
    {
        "N°": "296",
        "Region": "VALPARAÍSO",
        "Comuna": "VIÑA DEL MAR"
    },
    {
        "N°": "297",
        "Region": "VALPARAÍSO",
        "Comuna": "QUINTERO"
    },
    {
        "N°": "298",
        "Region": "VALPARAÍSO",
        "Comuna": "PUCHUNCAVI"
    },
    {
        "N°": "299",
        "Region": "VALPARAÍSO",
        "Comuna": "ISLA JUAN FERNANDEZ"
    },
    {
        "N°": "300",
        "Region": "VALPARAÍSO",
        "Comuna": "CONCON"
    },
    {
        "N°": "301",
        "Region": "VALPARAÍSO",
        "Comuna": "CASABLANCA"
    },
    {
        "N°": "302",
        "Region": "VALPARAÍSO",
        "Comuna": "VALPARAISO"
    },
    {
        "N°": "303",
        "Region": "COQUIMBO",
        "Comuna": "RIO HURTADO"
    },
    {
        "N°": "304",
        "Region": "COQUIMBO",
        "Comuna": "PUNITAQUI"
    },
    {
        "N°": "305",
        "Region": "COQUIMBO",
        "Comuna": "MONTE PATRIA"
    },
    {
        "N°": "306",
        "Region": "COQUIMBO",
        "Comuna": "COMBARBALA"
    },
    {
        "N°": "307",
        "Region": "COQUIMBO",
        "Comuna": "OVALLE"
    },
    {
        "N°": "308",
        "Region": "COQUIMBO",
        "Comuna": "LOS VILOS"
    },
    {
        "N°": "309",
        "Region": "COQUIMBO",
        "Comuna": "SALAMANCA"
    },
    {
        "N°": "310",
        "Region": "COQUIMBO",
        "Comuna": "CANELA"
    },
    {
        "N°": "311",
        "Region": "COQUIMBO",
        "Comuna": "ILLAPEL"
    },
    {
        "N°": "312",
        "Region": "COQUIMBO",
        "Comuna": "VICUÑA"
    },
    {
        "N°": "313",
        "Region": "COQUIMBO",
        "Comuna": "PAIHUANO"
    },
    {
        "N°": "314",
        "Region": "COQUIMBO",
        "Comuna": "LA HIGUERA"
    },
    {
        "N°": "315",
        "Region": "COQUIMBO",
        "Comuna": "ANDACOLLO"
    },
    {
        "N°": "316",
        "Region": "COQUIMBO",
        "Comuna": "COQUIMBO"
    },
    {
        "N°": "317",
        "Region": "COQUIMBO",
        "Comuna": "LA SERENA"
    },
    {
        "N°": "318",
        "Region": "ATACAMA",
        "Comuna": "HUASCO"
    },
    {
        "N°": "319",
        "Region": "ATACAMA",
        "Comuna": "FREIRINA"
    },
    {
        "N°": "320",
        "Region": "ATACAMA",
        "Comuna": "ALTO DEL CARMEN"
    },
    {
        "N°": "321",
        "Region": "ATACAMA",
        "Comuna": "CHAÑARAL"
    },
    {
        "N°": "322",
        "Region": "ATACAMA",
        "Comuna": "TIERRA AMARILLA"
    },
    {
        "N°": "323",
        "Region": "ATACAMA",
        "Comuna": "VALLENAR"
    },
    {
        "N°": "324",
        "Region": "ATACAMA",
        "Comuna": "DIEGO DE ALMAGRO"
    },
    {
        "N°": "325",
        "Region": "ATACAMA",
        "Comuna": "CALDERA"
    },
    {
        "N°": "326",
        "Region": "ATACAMA",
        "Comuna": "COPIAPO"
    },
    {
        "N°": "327",
        "Region": "ANTOFAGASTA",
        "Comuna": "SAN PEDRO DE ATACAMA"
    },
    {
        "N°": "328",
        "Region": "ANTOFAGASTA",
        "Comuna": "SIERRA GORDA"
    },
    {
        "N°": "329",
        "Region": "ANTOFAGASTA",
        "Comuna": "MEJILLONES"
    },
    {
        "N°": "330",
        "Region": "ANTOFAGASTA",
        "Comuna": "MARIA ELENA"
    },
    {
        "N°": "331",
        "Region": "ANTOFAGASTA",
        "Comuna": "TOCOPILLA"
    },
    {
        "N°": "332",
        "Region": "ANTOFAGASTA",
        "Comuna": "OLLAGÜE"
    },
    {
        "N°": "333",
        "Region": "ANTOFAGASTA",
        "Comuna": "CALAMA"
    },
    {
        "N°": "334",
        "Region": "ANTOFAGASTA",
        "Comuna": "TALTAL"
    },
    {
        "N°": "335",
        "Region": "ANTOFAGASTA",
        "Comuna": "ANTOFAGASTA"
    },
    {
        "N°": "336",
        "Region": "TARAPACÁ",
        "Comuna": "PICA"
    },
    {
        "N°": "337",
        "Region": "TARAPACÁ",
        "Comuna": "HUARA"
    },
    {
        "N°": "338",
        "Region": "TARAPACÁ",
        "Comuna": "COLCHANE"
    },
    {
        "N°": "339",
        "Region": "TARAPACÁ",
        "Comuna": "CAMIÑA"
    },
    {
        "N°": "340",
        "Region": "TARAPACÁ",
        "Comuna": "POZO ALMONTE"
    },
    {
        "N°": "341",
        "Region": "TARAPACÁ",
        "Comuna": "IQUIQUE"
    },
    {
        "N°": "342",
        "Region": "TARAPACÁ",
        "Comuna": "ALTO HOSPICIO"
    },
    {
        "N°": "343",
        "Region": "ARICA Y PARINACOTA",
        "Comuna": "ARICA"
    },
    {
        "N°": "344",
        "Region": "ARICA Y PARINACOTA",
        "Comuna": "GENERAL LAGOS"
    },
    {
        "N°": "345",
        "Region": "ARICA Y PARINACOTA",
        "Comuna": "PUTRE"
    },
    {
        "N°": "346",
        "Region": "ARICA Y PARINACOTA",
        "Comuna": "CAMARONES"
    }
];

app.get('/api/regions-and-communes', (req, res) => {
    res.json(regionsAndCommunes);
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });