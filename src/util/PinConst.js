export const GLOBAL = 'ReactPinterestData';

/**
 * Generates a random pseudo-GUID
 * @return {string} GUID
 */
function _generateGuid() {
    const GUID_VARS = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz';
    let guid = '';
    for (var i = 0; i < 12; i++) {
        guid += GUID_VARS.substr(Math.floor(Math.random() * 60), 1);
    }
    return guid;
}

export const GUID = _generateGuid();

export const DEFAULT_LANGUAGE = 'en';

export const POPUP_OPTIONS = Object.freeze({
    PIN_CREATE: 'status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=750,height=320,left=0,top=0',
    FOLLOW: 'status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=1040,height=640,left=0,top=0'
});

export const URL = Object.freeze({
    PINTEREST: 'https://www.pinterest.com',
    PIN_CLOSEUP: 'https://www.pinterest.com/pin/',
    PIN_CREATE: 'https://www.pinterest.com/pin/create/button/',
    PINMARKLET: 'https://assets.pinterest.com/js/pinmarklet.js',
    REPIN: 'https://www.pinterest.com/pin/<id>/repin/x/',
    COUNT: 'https://widgets.pinterest.com/v1/urls/count.json',
    PIN: 'https://widgets.pinterest.com/v3/pidgets/pins/info/',
    BOARD: 'https://widgets.pinterest.com/v3/pidgets/boards/',
    PROFILE: 'https://widgets.pinterest.com/v3/pidgets/users/',
    LOG: 'https://log.pinterest.com/'
});

export const COUNT_TYPES = {
    BUTTON: 'button_count',
    FOLLOW: 'follow_count',
    PROFILE: 'profile_count',
    BOARD: 'board_count',
    PIN_SMALL: 'pin_count',
    PIN_MEDIUM: 'pin_count_medium',
    PIN_LARGE: 'pin_count_large'
};

export const I18N_DICTIONARY = Object.freeze({
    'cs': {
        'Follow On $1': 'Sledujte na $1',
        'from <b>$1</b>': 'od $1',
        'Copyright issue': 'Probl&#233;m s autorsk&#253;mi pr&#225;vy',
        'attribTo': 'od'
    },
    'da': {
        'Follow On $1': 'F&#248;lg p&#229; $1',
        'from <b>$1</b>': 'fra $1',
        'Copyright issue': 'Problemer med ophavsret',
        'attribTo': 'af'
    },
    'de': {
        'Follow On $1': 'Auf $1 folgen',
        'from <b>$1</b>': 'von $1',
        'Copyright issue': 'Urheberrechtsverletzung',
        'attribTo': 'von'
    },
    'el': {
        'Follow On $1': '&#913;&#954;&#959;&#955;&#959;&#965;&#952;&#942;&#963;&#964;&#949; &#956;&#945;&#962; &#963;&#964;&#959; $1',
        'from <b>$1</b>': '&#945;&#960;&#972; &#964;&#959; $1',
        'Copyright issue': '&#918;&#942;&#964;&#951;&#956;&#945; &#960;&#957;&#949;&#965;&#956;&#945;&#964;&#953;&#954;&#974;&#957; &#948;&#953;&#954;&#945;&#953;&#969;&#956;&#940;&#964;&#969;&#957;',
        'attribTo': '&alpha;&pi;&omicron;&delta;&#943;&delta;&epsilon;&tau;&alpha;&iota; &sigma;&tau;&omicron;'
    },
    'en': {
        'Follow On $1': 'Follow On $1',
        'from <b>$1</b>': 'from $1',
        'Copyright issue': 'Copyright issue',
        'attribTo': 'by'
    },
    'en-gb': {
        'Follow On $1': 'Follow On $1',
        'from <b>$1</b>': 'from $1',
        'Copyright issue': 'Copyright issue',
        'attribTo': 'by'
    },
    'en-uk': {
        'Follow On $1': 'Follow On $1',
        'from <b>$1</b>': 'from $1',
        'Copyright issue': 'Copyright issue',
        'attribTo': 'by'
    },
    'es': {
        'Follow On $1': 'Seguir en $1',
        'from <b>$1</b>': 'de $1',
        'report': 'Problema de copyright',
        'attribTo': 'por'
    },
    'fi': {
        'Follow On $1': 'Seuraa $1',
        'from <b>$1</b>': 'palvelusta $1',
        'Copyright issue': 'Tekij&#228;noikeusloukkaus',
        'attribTo': 'tekij&#228;'
    },
    'fr': {
        'Follow On $1': 'Suivre sur $1',
        'from <b>$1</b>': '&#224; partir de $1',
        'Copyright issue': 'Probl&#232;me de droits d\'auteur',
        'attribTo': 'par'
    },
    'hi': {
        'Follow On $1': '$1 &#2346;&#2375; &#2347;&#2377;&#2354;&#2379; &#2325;&#2352;&#2375;&#2306;',
        'from <b>$1</b>': '$1 &#2360;&#2375;',
        'Copyright issue': '&#2325;&#2377;&#2346;&#2368;&#2352;&#2366;&#2311;&#2335; &#2325;&#2366; &#2350;&#2369;&#2342;&#2381;&#2342;&#2366;',
        'attribTo': '&#2325;&#2379; &#2358;&#2381;&#2352;&#2375;&#2351; &#2342;&#2375;&#2344;&#2366;'
    },
    'hu': {
        'Follow On $1': 'K&#246;vesd a $1',
        'from <b>$1</b>': 'innen: $1',
        'Copyright issue': 'Szerz&#337;i jogi probl&#233;ma',
        'attribTo': 'Hozz&aacute;rendelve a k&ouml;vetkez&#337;h&ouml;z:'
    },
    'id': {
        'Follow On $1': 'Ikuti di Pinterest $1',
        'from <b>$1</b>': 'dari $1',
        'Copyright issue': 'Masalah hak cipta',
        'attribTo': 'oleh'
    },
    'it': {
        'Follow On $1': 'Segui su $1',
        'from <b>$1</b>': 'da $1',
        'Copyright issue': 'Problema di copyright',
        'attribTo': 'da'
    },
    'ko': {
        'Follow On $1': '$1&#50640;&#49436; &#54036;&#47196;&#50864;',
        'from <b>$1</b>': '$1 &#50640;&#49436;',
        'Copyright issue': '&#51200;&#51089;&#44428; &#47928;&#51228;',
        'attribTo': '&#51060; &#54592;&#54632;'
    },
    'ja': {
        'Follow On $1': '$1 &#12391;&#12501;&#12457;&#12525;&#12540;',
        'from <b>$1</b>': '&#12500;&#12531;&#12418;&#12392;&#65306;$1',
        'Copyright issue': '&#33879;&#20316;&#27177;&#12395;&#12388;&#12356;&#12390;&#22577;&#21578;&#12377;&#12427;',
        'attribTo': ''
    },
    'ms': {
        'Follow On $1': 'Ikut di $1',
        'from <b>$1</b>': 'dari $1',
        'Copyright issue': 'Isu hak cipta',
        'attribTo': 'attribut ke'
    },
    'nb': {
        'Follow On $1': 'F&#248;lg p&#229; $1',
        'from <b>$1</b>': 'fra $1',
        'Copyright issue': 'Opphavsrettslig problem',
        'attribTo': 'av'
    },
    'nl': {
        'Follow On $1': 'Volgen op $1',
        'from <b>$1</b>': 'van $1',
        'Copyright issue': 'Probleem met copyright',
        'attribTo': 'door'
    },
    'pl': {
        'Follow On $1': 'Obserwuj na $1',
        'from <b>$1</b>': 'od $1',
        'Copyright issue': 'Problem z prawami autorskimi',
        'attribTo': 'przez'
    },
    'pt': {
        'Follow On $1': 'Seguir no $1',
        'from <b>$1</b>': 'de $1',
        'Copyright issue': 'Assunto relativo a direitos de autor',
        'attribTo': 'por'
    },
    'pt-br': {
        'Follow On $1': 'Seguir no $1',
        'from <b>$1</b>': 'de $1',
        'Copyright issue': 'Problema de direitos autorais',
        'attribTo': 'por'
    },
    'ro': {
        'Follow On $1': 'Urm&#259;re&#537;te pe $1',
        'from <b>$1</b>': 'de la $1',
        'Copyright issue': 'Problem&#259; legat&#259; de drepturile de autor',
        'attribTo': 'de la'
    },
    'ru': {
        'Follow On $1': '&#1055;&#1086;&#1076;&#1087;&#1080;&#1089;&#1072;&#1090;&#1100;&#1089;&#1103; &#1074; $1',
        'from <b>$1</b>': '&#1080;&#1079; $1',
        'Copyright issue': '&#1042;&#1086;&#1087;&#1088;&#1086;&#1089; &#1086;&#1073; &#1072;&#1074;&#1090;&#1086;&#1088;&#1089;&#1082;&#1080;&#1093; &#1087;&#1088;&#1072;&#1074;&#1072;&#1093;',
        'attribTo': '&#1087;&#1086;&#1083;&#1100;&#1079;&#1086;&#1074;&#1072;&#1090;&#1077;&#1083;&#1077;&#1084;'
    },
    'tl': {
        'Follow On $1': 'Sundan sa $1',
        'from <b>$1</b>': 'galing sa $1',
        'Copyright issue': 'Isyu sa copyright',
        'attribTo': ''
    },
    'th': {
        'Follow On $1': '&#3605;&#3636;&#3604;&#3605;&#3634;&#3617;&#3651;&#3609; $1',
        'from <b>$1</b>': '&#3592;&#3634;&#3585; $1',
        'Copyright issue': '&#3611;&#3633;&#3597;&#3627;&#3634;&#3648;&#3619;&#3639;&#3656;&#3629;&#3591;&#3621;&#3636;&#3586;&#3626;&#3636;&#3607;&#3608;&#3636;&#3660;',
        'attribTo': '&#3648;&#3586;&#3637;&#3618;&#3609;&#3650;&#3604;&#3618;'
    },
    'sk': {
        'Follow On $1': 'Sledujte na $1',
        'from <b>$1</b>': 'od $1',
        'Copyright issue': 'Probl&#233;m s autorsk&#253;mi pr&#225;vami',
        'attribTo': 'od'
    },
    'sv': {
        'Follow On $1': 'F&#246;lj p&#229; $1',
        'from <b>$1</b>': 'fr&#229;n $1',
        'Copyright issue': 'Upphovsr&#228;ttsligt problem',
        'attribTo': 'av'
    },
    'tr': {
        'Follow On $1': '$1 takip et',
        'from <b>$1</b>': '$1 sitesinden',
        'Copyright issue': 'Telif hakkı sorunu',
        'attribTo': 'taraf&#305;ndan'
    },
    'ua': {
        'Follow On $1': '&#1055;&#1086;&#1076;&#1087;&#1080;&#1089;&#1072;&#1090;&#1100;&#1089;&#1103; &#1074; $1',
        'from <b>$1</b>': '&#1074;&#1110;&#1076; $1',
        'Copyright issue': '&#1055;&#1088;&#1086;&#1073;&#1083;&#1077;&#1084;&#1072; &#1079;&#1072;&#1093;&#1080;&#1089;&#1090;&#1091; &#1072;&#1074;&#1090;&#1086;&#1088;&#1089;&#1100;&#1082;&#1080;&#1093; &#1087;&#1088;&#1072;&#1074;',
        'attribTo': '&#1086;&#1087;&#1080;&#1089;'
    },
    'vi': {
        'Follow On $1': 'Theo d&#245;i tr&#234;n $1',
        'from <b>$1</b>': 't&#7915; $1',
        'Copyright issue': 'V&#7845;n &#273;&#7873; v&#7873; b&#7843;n quy&#7873;n',
        'attribTo': '&#273;&#432;a v&agrave;o'
    }
});
