const _0x127638 = _0x11a3; (function (_0x49e908, _0x5576c6) { const _0x14298f = _0x11a3, _0x24cd10 = _0x49e908(); while (!![]) { try { const _0x221032 = parseInt(_0x14298f(0x1a1)) / 0x1 * (-parseInt(_0x14298f(0x19d)) / 0x2) + parseInt(_0x14298f(0x17a)) / 0x3 + -parseInt(_0x14298f(0x195)) / 0x4 + parseInt(_0x14298f(0x17f)) / 0x5 + parseInt(_0x14298f(0x19f)) / 0x6 * (-parseInt(_0x14298f(0x189)) / 0x7) + -parseInt(_0x14298f(0x18e)) / 0x8 * (-parseInt(_0x14298f(0x18d)) / 0x9) + -parseInt(_0x14298f(0x193)) / 0xa * (parseInt(_0x14298f(0x182)) / 0xb); if (_0x221032 === _0x5576c6) break; else _0x24cd10['push'](_0x24cd10['shift']()); } catch (_0x2a2933) { _0x24cd10['push'](_0x24cd10['shift']()); } } }(_0x29b9, 0xe36c9)); const Axios = require('axios'), Fs = require('fs'), Self_Args = process[_0x127638(0x191)]['slice'](0x2); var Self = { 'grab_index': 0x0, 'max': 0x0, 'results': [] }; async function Grab(_0x218dc9) { const _0x5e10a4 = _0x127638; try { Self[_0x5e10a4(0x18b)] === Self[_0x5e10a4(0x192)] && (console[_0x5e10a4(0x17d)](_0x5e10a4(0x199) + Self[_0x5e10a4(0x192)] + '\x20comptes\x20' + _0x218dc9 + '.'), console[_0x5e10a4(0x17d)](_0x5e10a4(0x190) + Self_Args[0x2]), Fs['writeFileSync'](Self_Args[0x2], Self[_0x5e10a4(0x198)][_0x5e10a4(0x196)]('\x0a'), 'utf8'), console[_0x5e10a4(0x17d)](_0x5e10a4(0x19a) + Self_Args[0x2]), console[_0x5e10a4(0x17d)]('\x1b[40m\x1b[1m\x1b[31m'), console['log'](_0x5e10a4(0x1a0)), console[_0x5e10a4(0x17d)]('https://discord.gg/GsVtwRTzgB'), process['exit']()); console[_0x5e10a4(0x17d)]('Récuperation\x20de\x20comptes\x20' + _0x218dc9 + '\x20.\x20Index:\x20' + Self[_0x5e10a4(0x18b)]); var _0xe29b0b = await Axios({ 'method': _0x5e10a4(0x188), 'url': _0x5e10a4(0x18f) + _0x218dc9 }); _0xe29b0b = _0xe29b0b[_0x5e10a4(0x179)]; if (Self[_0x5e10a4(0x198)][_0x5e10a4(0x18a)](_0xe29b0b) !== -0x1) return console[_0x5e10a4(0x17d)]('Impossible\x20de\x20saisir\x20ce\x20compte\x20' + _0x218dc9 + _0x5e10a4(0x181) + Self['grab_index']), console[_0x5e10a4(0x17d)](_0x5e10a4(0x176)), Grab(_0x218dc9); return Self['results'][_0x5e10a4(0x186)](_0xe29b0b), Self[_0x5e10a4(0x18b)]++, Grab(_0x218dc9); } catch { return console[_0x5e10a4(0x17d)]('Impossible\x20de\x20saisir\x20ce\x20compte\x20' + _0x218dc9 + ',\x20en\x20raison\x20d\x27un\x20doublon\x20ou\x20d\x27une\x20erreur.\x20Index:\x20' + Self['grab_index']), console[_0x5e10a4(0x17d)]('Je\x20réessaie...'), Grab(_0x218dc9); } } function _0x11a3(_0x2737e3, _0x307ee1) { const _0x29b9a9 = _0x29b9(); return _0x11a3 = function (_0x11a39c, _0x104c94) { _0x11a39c = _0x11a39c - 0x175; let _0x2fa567 = _0x29b9a9[_0x11a39c]; return _0x2fa567; }, _0x11a3(_0x2737e3, _0x307ee1); } !Self_Args['length'] && (console[_0x127638(0x17d)]('\x1b[47m\x20\x1b[31m'), console[_0x127638(0x17d)](_0x127638(0x19e)), console[_0x127638(0x17d)](_0x127638(0x17e)), console[_0x127638(0x17d)](_0x127638(0x19c)), console['log'](_0x127638(0x197)), console['log']('\x20\x20\x20\x20\x20██\x20\x20\x20\x20\x20\x20\x20\x20████\x20\x20\x20██████\x20\x20\x20█████\x20\x20██████\x20\x20\x20\x20\x20██\x20\x20\x20\x20'), console['log'](_0x127638(0x187)), console[_0x127638(0x17d)](_0x127638(0x194)), console[_0x127638(0x17d)](_0x127638(0x17e)), console[_0x127638(0x17d)](_0x127638(0x178)), console[_0x127638(0x17d)](_0x127638(0x18c)), process['exit']()); isNaN(Self_Args[0x1]) && (console['log'](_0x127638(0x184)), process[_0x127638(0x177)]()); !Self_Args[0x2] && (console[_0x127638(0x17d)](_0x127638(0x19b)), process[_0x127638(0x177)]()); Self_Args[0x0] = Self_Args[0x0][_0x127638(0x175)](), Self[_0x127638(0x192)] = parseInt(Self_Args[0x1]); function _0x29b9() { const _0x10c74c = ['spotify', 'push', '\x20\x20\x20\x20\x20██\x20\x20\x20\x20\x20\x20\x20\x20\x20██\x20\x20\x20\x20██\x20\x20\x20██\x20\x20\x20\x20\x20\x20██\x20██\x20\x20\x20██\x20\x20\x20\x20██\x20\x20\x20\x20', 'GET', '7nhcsgn', 'indexOf', 'grab_index', '\x20\x20\x20\x20\x20Utilisation\x20>>\x20node\x20gen_accounts.js\x20<type\x20de\x20compte>\x20<nombre>\x20<fichier\x20pour\x20enregistrer>', '4117581etAmZp', '24XbDung', 'https://opengen.dpkghub.com/api/generate.php?type=', 'Enregistrement\x20sur\x20', 'argv', 'max', '2653870QhenAE', '\x20\x20\x20\x20\x20\x20██████\x20\x20\x20\x20██\x20\x20\x20\x20██████\x20\x20██████\x20\x20██\x20\x20\x20██\x20\x20\x20\x20██\x20\x20\x20\x20', '3743200FAiYJM', 'join', '\x20\x20\x20\x20\x20██\x20\x20\x20\x20\x20\x20\x20██\x20\x20██\x20\x20██\x20\x20\x20██\x20\x20\x20\x20\x20\x20██\x20██\x20\x20\x20██\x20\x20\x20\x20██\x20\x20\x20\x20', 'results', 'Saisie\x20terminée\x20pour\x20', 'Résultats\x20enregistrés\x20avec\x20succès\x20dans\x20', 'Sortie\x20invalide.', '\x20\x20\x20\x20\x20\x20██████\x20██\x20\x20\x20\x20██\x20██████\x20\x20██████\x20\x20██████\x20\x20████████\x20', '60LKfswK', '\x1b[2J', '5008032khKYgo', 'Pour\x20toute\x20question\x20ajoute\x20moi\x20sur\x20discord\x20:\x20SciBert\x20⁶₆⁷#6439', '32135iCCNGn', 'toLowerCase', 'Je\x20réessaie...', 'exit', '\x20\x20\x20\x20\x20Type\x20de\x20comptes:\x20Netflix,\x20Spotify,\x20NordVPN\x20&\x20Disney(Disney\x20plus).', 'data', '2225754ixHpNU', 'Disney', 'NordVPN', 'log', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '9084965PXwQFb', 'netflix', ',\x20en\x20raison\x20d\x27un\x20doublon\x20ou\x20d\x27une\x20erreur.\x20Index:\x20', '11MQBEUk', 'disney', 'le\x20montant\x20n\x27est\x20pas\x20un\x20nombre.']; _0x29b9 = function () { return _0x10c74c; }; return _0x29b9(); } switch (Self_Args[0x0]) { case _0x127638(0x180): Grab('Netflix'); break; case _0x127638(0x185): Grab('Spotify'); break; case 'nordvpn': Grab(_0x127638(0x17c)); break; case _0x127638(0x183): Grab(_0x127638(0x17b)); break; default: console[_0x127638(0x17d)]('Type\x20de\x20compte\x20non\x20valide.'); break; }
