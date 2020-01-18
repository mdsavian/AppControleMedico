/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * README from http://www.greywyvern.com/code/javascript/keyboard.js
 * ------
 *
 * - Lay out each keyboard in rows of sub-arrays.  Each sub-array
 *   represents one key.
 *
 * - Each sub-array consists of four slots described as follows:
 *     example: ["a", "A", "\u00e1", "\u00c1"]
 *
 *          a) Normal character
 *          A) Character + Shift/Caps
 *     \u00e1) Character + Alt/AltGr/AltLk
 *     \u00c1) Character + Shift/Caps + Alt/AltGr/AltLk
 *
 *   You may include sub-arrays which are fewer than four slots.
 *   In these cases, the missing slots will be blanked when the
 *   corresponding modifier key (Shift or AltGr) is pressed.
 *
 * - If the second slot of a sub-array matches one of the following
 *   strings:
 *     "Tab", "Caps", "Shift", "Enter", "Bksp",
 *     "Alt" OR "AltGr", "AltLk"
 *   then the function of the key will be the following,
 *   respectively:
 *     - Insert a tab
 *     - Toggle Caps Lock (technically a Shift Lock)
 *     - Next entered character will be the shifted character
 *     - Insert a newline (textarea), or close the keyboard
 *     - Delete the previous character
 *     - Next entered character will be the alternate character
 *     - Toggle Alt/AltGr Lock
 *
 *   The first slot of this sub-array will be the text to display
 *   on the corresponding key.  This allows for easy localisation
 *   of key names.
 *
 * - Layout dead keys (diacritic + letter) should be added as
 *   property/value pairs of objects with hash keys equal to the
 *   diacritic.  See the "this.VKI_deadkey" object below the layout
 *   definitions.  In each property/value pair, the value is what
 *   the diacritic would change the property name to.
 *
 * - Note that any characters beyond the normal ASCII set should be
 *   entered in escaped Unicode format.  (eg \u00a3 = Pound symbol)
 *   You can find Unicode values for characters here:
 *     http://unicode.org/charts/
 *
 * - To remove a keyboard, just delete it, or comment it out of the
 *   source code. If you decide to remove the US International
 *   keyboard layout, make sure you change the default layout
 *   (this.VKI_kt) above so it references an existing layout.
 *
 * CREDITS
 * -------
 *
 * See http://www.greywyvern.com/code/javascript/keyboard for examples
 * and usage instructions.
 *
 * Version 1.49 - November 8, 2011
 *   - Don't display language drop-down if only one keyboard available
 *
 *   See full changelog at:
 *     http://www.greywyvern.com/code/javascript/keyboard.changelog.txt
 *
 * Keyboard Credits
 *   - Yiddish (Yidish Lebt) keyboard layout by Simche Taub (jidysz.net)
 *   - Urdu Phonetic keyboard layout by Khalid Malik
 *   - Yiddish keyboard layout by Helmut Wollmersdorfer
 *   - Khmer keyboard layout by Sovann Heng (km-kh.com)
 *   - Dari keyboard layout by Saif Fazel
 *   - Kurdish keyboard layout by Ara Qadir
 *   - Assamese keyboard layout by Kanchan Gogoi
 *   - Bulgarian BDS keyboard layout by Milen Georgiev
 *   - Basic Japanese Hiragana/Katakana keyboard layout by Damjan
 *   - Ukrainian keyboard layout by Dmitry Nikitin
 *   - Macedonian keyboard layout by Damjan Dimitrioski
 *   - Pashto keyboard layout by Ahmad Wali Achakzai (qamosona.com)
 *   - Armenian Eastern and Western keyboard layouts by Hayastan Project (www.hayastan.co.uk)
 *   - Pinyin keyboard layout from a collaboration with Lou Winklemann
 *   - Kazakh keyboard layout by Alex Madyankin
 *   - Danish keyboard layout by Verner KjÃ¦rsgaard
 *   - Slovak keyboard layout by Daniel Lara (www.learningslovak.com)
 *   - Belarusian and Serbian Cyrillic keyboard layouts by Evgeniy Titov
 *   - Bulgarian Phonetic keyboard layout by Samuil Gospodinov
 *   - Swedish keyboard layout by HÃ¥kan Sandberg
 *   - Romanian keyboard layout by Aurel
 *   - Farsi (Persian) keyboard layout by Kaveh Bakhtiyari (www.bakhtiyari.com)
 *   - Burmese keyboard layout by Cetanapa
 *   - Bosnian/Croatian/Serbian Latin/Slovenian keyboard layout by Miran Zeljko
 *   - Hungarian keyboard layout by Antal Sall 'Hiromacu'
 *   - Arabic keyboard layout by Srinivas Reddy
 *   - Italian and Spanish (Spain) keyboard layouts by dictionarist.com
 *   - Lithuanian and Russian keyboard layouts by Ramunas
 *   - German keyboard layout by QuHno
 *   - French keyboard layout by Hidden Evil
 *   - Polish Programmers layout by moose
 *   - Turkish keyboard layouts by offcu
 *   - Dutch and US Int'l keyboard layouts by jerone
 *
 */
import { InjectionToken } from '@angular/core';
import { KeyboardClassKey } from '../enums/keyboard-class-key.enum';
/** @type {?} */
const MAT_KEYBOARD_LAYOUTS = new InjectionToken('keyboard-layouts.config');
/** @type {?} */
const keyboardLayouts = {
    '\u0627\u0644\u0639\u0631\u0628\u064a\u0629': {
        'name': 'Arabic',
        'keys': [
            [
                ['\u0630', '\u0651 '],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u064e'],
                ['\u0635', '\u064b'],
                ['\u062b', '\u064f'],
                ['\u0642', '\u064c'],
                ['\u0641', '\u0644'],
                ['\u063a', '\u0625'],
                ['\u0639', '\u2018'],
                ['\u0647', '\u00f7'],
                ['\u062e', '\u00d7'],
                ['\u062d', '\u061b'],
                ['\u062c', '<'],
                ['\u062f', '>'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0650'],
                ['\u0633', '\u064d'],
                ['\u064a', ']'],
                ['\u0628', '['],
                ['\u0644', '\u0644'],
                ['\u0627', '\u0623'],
                ['\u062a', '\u0640'],
                ['\u0646', '\u060c'],
                ['\u0645', '/'],
                ['\u0643', ':'],
                ['\u0637', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0626', '~'],
                ['\u0621', '\u0652'],
                ['\u0624', '}'],
                ['\u0631', '{'],
                ['\u0644', '\u0644'],
                ['\u0649', '\u0622'],
                ['\u0629', '\u2019'],
                ['\u0648', ','],
                ['\u0632', '.'],
                ['\u0638', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ar']
    },
    '\u0985\u09b8\u09ae\u09c0\u09df\u09be': {
        'name': 'Assamese',
        'keys': [
            [
                ['+', '?'],
                ['\u09E7', '{', '\u09E7'],
                ['\u09E8', '}', '\u09E8'],
                ['\u09E9', '\u09CD\u09F0', '\u09E9'],
                ['\u09EA', '\u09F0\u09CD', '\u09EA'],
                ['\u09EB', '\u099C\u09CD\u09F0', '\u09EB'],
                ['\u09EC', '\u0995\u09CD\u09B7', '\u09EC'],
                ['\u09ED', '\u0995\u09CD\u09F0', '\u09ED'],
                ['\u09EE', '\u09B6\u09CD\u09F0', '\u09EE'],
                ['\u09EF', '(', '\u09EF'],
                ['\u09E6', ')', '\u09E6'],
                ['-', ''],
                ['\u09C3', '\u098B', '\u09E2', '\u09E0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u09CC', '\u0994', '\u09D7'],
                ['\u09C8', '\u0990'],
                ['\u09BE', '\u0986'],
                ['\u09C0', '\u0988', '\u09E3', '\u09E1'],
                ['\u09C2', '\u098A'],
                ['\u09F1', '\u09AD'],
                ['\u09B9', '\u0999'],
                ['\u0997', '\u0998'],
                ['\u09A6', '\u09A7'],
                ['\u099C', '\u099D'],
                ['\u09A1', '\u09A2', '\u09DC', '\u09DD'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u09CB', '\u0993', '\u09F4', '\u09F5'],
                ['\u09C7', '\u098F', '\u09F6', '\u09F7'],
                ['\u09CD', '\u0985', '\u09F8', '\u09F9'],
                ['\u09BF', '\u0987', '\u09E2', '\u098C'],
                ['\u09C1', '\u0989'],
                ['\u09AA', '\u09AB'],
                ['\u09F0', '', '\u09F0', '\u09F1'],
                ['\u0995', '\u0996'],
                ['\u09A4', '\u09A5'],
                ['\u099A', '\u099B'],
                ['\u099F', '\u09A0'],
                ['\u09BC', '\u099E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u09CE', '\u0983'],
                ['\u0982', '\u0981', '\u09FA'],
                ['\u09AE', '\u09A3'],
                ['\u09A8', '\u09F7'],
                ['\u09AC', '"'],
                ['\u09B2', '\''],
                ['\u09B8', '\u09B6'],
                [',', '\u09B7'],
                ['.', ';'],
                ['\u09AF', '\u09DF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['as']
    },
    '\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d\u04b9\u0430': {
        'name': 'Azerbaijani Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0458', '\u0408'],
                ['\u04AF', '\u04AE'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04BB', '\u04BA'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u04B9', '\u04B8'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u049D', '\u049C'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u04D9', '\u04D8'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u0493', '\u0492'],
                ['\u0431', '\u0411'],
                ['\u04E9', '\u04E8'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['az-CYRL']
    },
    'Az\u0259rbaycanca': {
        'name': 'Azerbaijani Latin',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2166'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['\u00FC', '\u00DC'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', '\u0130'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00F6', '\u00D6'],
                ['\u011F', '\u011E'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u0131', 'I'],
                ['\u0259', '\u018F'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                ['\u00E7', '\u00C7'],
                ['\u015F', '\u015E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['az']
    },
    '\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f': {
        'name': 'Belarusian',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043a', '\u041a'],
                ['\u0435', '\u0415'],
                ['\u043d', '\u041d'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u045e', '\u040e'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\'', '\''],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044b', '\u042b'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043f', '\u041f'],
                ['\u0440', '\u0420'],
                ['\u043e', '\u041e'],
                ['\u043b', '\u041b'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044d', '\u042d'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['/', '|'],
                ['\u044f', '\u042f'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043c', '\u041c'],
                ['\u0456', '\u0406'],
                ['\u0442', '\u0422'],
                ['\u044c', '\u042c'],
                ['\u0431', '\u0411'],
                ['\u044e', '\u042e'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['be']
    },
    'Belgische / Belge': {
        'name': 'Belgian',
        'keys': [
            [
                ['\u00b2', '\u00b3'],
                ['&', '1', '|'],
                ['\u00e9', '2', '@'],
                ['"', '3', '#'],
                ['\'', '4'],
                ['(', '5'],
                ['\u00a7', '6', '^'],
                ['\u00e8', '7'],
                ['!', '8'],
                ['\u00e7', '9', '{'],
                ['\u00e0', '0', '}'],
                [')', '\u00b0'],
                ['-', '_'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['a', 'A'],
                ['z', 'Z'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['^', '\u00a8', '['],
                ['$', '*', ']'],
                ['\u03bc', '\u00a3', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['q', 'Q'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['m', 'M'],
                ['\u00f9', '%', '\u00b4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['w', 'W'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                [',', '?'],
                [';', '.'],
                [':', '/'],
                ['=', '+', '~'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['nl-BE', 'fr-BE']
    },
    '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0424\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u043d': {
        'name': 'Bulgarian Phonetic',
        'keys': [
            [
                ['\u0447', '\u0427'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u044F', '\u042F'],
                ['\u0432', '\u0412'],
                ['\u0435', '\u0415'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u044A', '\u042A'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043E', '\u041E'],
                ['\u043F', '\u041F'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u044E', '\u042E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424'],
                ['\u0433', '\u0413'],
                ['\u0445', '\u0425'],
                ['\u0439', '\u0419'],
                ['\u043A', '\u041A'],
                ['\u043B', '\u041B'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0437', '\u0417'],
                ['\u044C', '\u042C'],
                ['\u0446', '\u0426'],
                ['\u0436', '\u0416'],
                ['\u0431', '\u0411'],
                ['\u043D', '\u041D'],
                ['\u043C', '\u041C'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['bg']
    },
    '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438': {
        'name': 'Bulgarian BDS',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '?'],
                ['3', '+'],
                ['4', '"'],
                ['5', '%'],
                ['6', '='],
                ['7', ':'],
                ['8', '/'],
                ['9', '_'],
                ['0', '\u2116'],
                ['-', '\u0406'],
                ['=', 'V'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                [',', '\u044b'],
                ['\u0443', '\u0423'],
                ['\u0435', '\u0415'],
                ['\u0438', '\u0418'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u043a', '\u041a'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0437', '\u0417'],
                ['\u0446', '\u0426'],
                [';', '\u00a7'],
                ['(', ')']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u044c', '\u042c'],
                ['\u044f', '\u042f'],
                ['\u0430', '\u0410'],
                ['\u043e', '\u041e'],
                ['\u0436', '\u0416'],
                ['\u0433', '\u0413'],
                ['\u0442', '\u0422'],
                ['\u043d', '\u041d'],
                ['\u0412', '\u0412'],
                ['\u043c', '\u041c'],
                ['\u0447', '\u0427'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u042e', '\u044e'],
                ['\u0439', '\u0419'],
                ['\u044a', '\u042a'],
                ['\u044d', '\u042d'],
                ['\u0444', '\u0424'],
                ['\u0445', '\u0425'],
                ['\u043f', '\u041f'],
                ['\u0440', '\u0420'],
                ['\u043b', '\u041b'],
                ['\u0431', '\u0411'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u09ac\u09be\u0982\u09b2\u09be': {
        'name': 'Bengali',
        'keys': [
            [
                [''],
                ['1', '', '\u09E7'],
                ['2', '', '\u09E8'],
                ['3', '\u09CD\u09B0', '\u09E9'],
                ['4', '\u09B0\u09CD', '\u09EA'],
                ['5', '\u099C\u09CD\u09B0', '\u09EB'],
                ['6', '\u09A4\u09CD\u09B7', '\u09EC'],
                ['7', '\u0995\u09CD\u09B0', '\u09ED'],
                ['8', '\u09B6\u09CD\u09B0', '\u09EE'],
                ['9', '(', '\u09EF'],
                ['0', ')', '\u09E6'],
                ['-', '\u0983'],
                ['\u09C3', '\u098B', '\u09E2', '\u09E0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u09CC', '\u0994', '\u09D7'],
                ['\u09C8', '\u0990'],
                ['\u09BE', '\u0986'],
                ['\u09C0', '\u0988', '\u09E3', '\u09E1'],
                ['\u09C2', '\u098A'],
                ['\u09AC', '\u09AD'],
                ['\u09B9', '\u0999'],
                ['\u0997', '\u0998'],
                ['\u09A6', '\u09A7'],
                ['\u099C', '\u099D'],
                ['\u09A1', '\u09A2', '\u09DC', '\u09DD'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u09CB', '\u0993', '\u09F4', '\u09F5'],
                ['\u09C7', '\u098F', '\u09F6', '\u09F7'],
                ['\u09CD', '\u0985', '\u09F8', '\u09F9'],
                ['\u09BF', '\u0987', '\u09E2', '\u098C'],
                ['\u09C1', '\u0989'],
                ['\u09AA', '\u09AB'],
                ['\u09B0', '', '\u09F0', '\u09F1'],
                ['\u0995', '\u0996'],
                ['\u09A4', '\u09A5'],
                ['\u099A', '\u099B'],
                ['\u099F', '\u09A0'],
                ['\u09BC', '\u099E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0982', '\u0981', '\u09FA'],
                ['\u09AE', '\u09A3'],
                ['\u09A8'],
                ['\u09AC'],
                ['\u09B2'],
                ['\u09B8', '\u09B6'],
                [',', '\u09B7'],
                ['.', '{'],
                ['\u09AF', '\u09DF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['bn']
    },
    'Bosanski': {
        'name': 'Bosnian',
        'keys': [
            [
                ['\u00B8', '\u00A8'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '&', '\u02DB'],
                ['7', '/', '`'],
                ['8', '(', '\u02D9'],
                ['9', ')', '\u00B4'],
                ['0', '=', '\u02DD'],
                ['\'', '?', '\u00A8'],
                ['+', '*', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u0161', '\u0160', '\u00F7'],
                ['\u0111', '\u0110', '\u00D7'],
                ['\u017E', '\u017D', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u010D', '\u010C'],
                ['\u0107', '\u0106', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_', '\u00A9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['bs']
    },
    'Canadienne-fran\u00e7aise': {
        'name': 'Canadian French',
        'keys': [
            [
                ['#', '|', '\\'],
                ['1', '!', '\u00B1'],
                ['2', '"', '@'],
                ['3', '/', '\u00A3'],
                ['4', '$', '\u00A2'],
                ['5', '%', '\u00A4'],
                ['6', '?', '\u00AC'],
                ['7', '&', '\u00A6'],
                ['8', '*', '\u00B2'],
                ['9', '(', '\u00B3'],
                ['0', ')', '\u00BC'],
                ['-', '_', '\u00BD'],
                ['=', '+', '\u00BE'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O', '\u00A7'],
                ['p', 'P', '\u00B6'],
                ['^', '^', '['],
                ['\u00B8', '\u00A8', ']'],
                ['<', '>', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':', '~'],
                ['`', '`', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u00AB', '\u00BB', '\u00B0'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', '\'', '\u00AF'],
                ['.', '.', '\u00AD'],
                ['\u00E9', '\u00C9', '\u00B4'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr-CA']
    },
    '\u010cesky': {
        'name': 'Czech',
        'keys': [
            [
                [';', '\u00b0', '`', '~'],
                ['+', '1', '!'],
                ['\u011B', '2', '@'],
                ['\u0161', '3', '#'],
                ['\u010D', '4', '$'],
                ['\u0159', '5', '%'],
                ['\u017E', '6', '^'],
                ['\u00FD', '7', '&'],
                ['\u00E1', '8', '*'],
                ['\u00ED', '9', '('],
                ['\u00E9', '0', ')'],
                ['=', '%', '-', '_'],
                ['\u00B4', '\u02c7', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FA', '/', '[', '{'],
                [')', '(', ']', '}'],
                ['\u00A8', '\'', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u016F', '"', ';', ':'],
                ['\u00A7', '!', '\u00a4', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|', '', '\u02dd'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '?', '<', '\u00d7'],
                ['.', ':', '>', '\u00f7'],
                ['-', '_', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['cs']
    },
    'Dansk': {
        'name': 'Danish',
        'keys': [
            [
                ['\u00bd', '\u00a7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%', '\u20ac'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\u00b4', '`', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e6', '\u00c6'],
                ['\u00f8', '\u00d8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['da']
    },
    'Deutsch': {
        'name': 'German',
        'keys': [
            [
                ['^', '\u00b0'],
                ['1', '!'],
                ['2', '"', '\u00b2'],
                ['3', '\u00a7', '\u00b3'],
                ['4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\u00df', '?', '\\'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00fc', '\u00dc'],
                ['+', '*', '~'],
                ['#', '\'']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f6', '\u00d6'],
                ['\u00e4', '\u00c4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\u00a6'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00b5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['de']
    },
    'Dingbats': {
        'name': 'Dingbats',
        'keys': [
            [
                ['\u2764', '\u2765', '\u2766', '\u2767'],
                ['\u278a', '\u2780', '\u2776', '\u2768'],
                ['\u278b', '\u2781', '\u2777', '\u2769'],
                ['\u278c', '\u2782', '\u2778', '\u276a'],
                ['\u278d', '\u2783', '\u2779', '\u276b'],
                ['\u278e', '\u2784', '\u277a', '\u276c'],
                ['\u278f', '\u2785', '\u277b', '\u276d'],
                ['\u2790', '\u2786', '\u277c', '\u276e'],
                ['\u2791', '\u2787', '\u277d', '\u276f'],
                ['\u2792', '\u2788', '\u277e', '\u2770'],
                ['\u2793', '\u2789', '\u277f', '\u2771'],
                ['\u2795', '\u2796', '\u274c', '\u2797'],
                ['\u2702', '\u2704', '\u2701', '\u2703'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u2714', '\u2705', '\u2713'],
                ['\u2718', '\u2715', '\u2717', '\u2716'],
                ['\u271a', '\u2719', '\u271b', '\u271c'],
                ['\u271d', '\u271e', '\u271f', '\u2720'],
                ['\u2722', '\u2723', '\u2724', '\u2725'],
                ['\u2726', '\u2727', '\u2728', '\u2756'],
                ['\u2729', '\u272a', '\u272d', '\u2730'],
                ['\u272c', '\u272b', '\u272e', '\u272f'],
                ['\u2736', '\u2731', '\u2732', '\u2749'],
                ['\u273b', '\u273c', '\u273d', '\u273e'],
                ['\u2744', '\u2745', '\u2746', '\u2743'],
                ['\u2733', '\u2734', '\u2735', '\u2721'],
                ['\u2737', '\u2738', '\u2739', '\u273a']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u2799', '\u279a', '\u2798', '\u2758'],
                ['\u27b5', '\u27b6', '\u27b4', '\u2759'],
                ['\u27b8', '\u27b9', '\u27b7', '\u275a'],
                ['\u2794', '\u279c', '\u27ba', '\u27bb'],
                ['\u279d', '\u279e', '\u27a1', '\u2772'],
                ['\u27a9', '\u27aa', '\u27ab', '\u27ac'],
                ['\u27a4', '\u27a3', '\u27a2', '\u279b'],
                ['\u27b3', '\u27bc', '\u27bd', '\u2773'],
                ['\u27ad', '\u27ae', '\u27af', '\u27b1'],
                ['\u27a8', '\u27a6', '\u27a5', '\u27a7'],
                ['\u279f', '\u27a0', '\u27be', '\u27b2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u270c', '\u270b', '\u270a', '\u270d'],
                ['\u274f', '\u2750', '\u2751', '\u2752'],
                ['\u273f', '\u2740', '\u2741', '\u2742'],
                ['\u2747', '\u2748', '\u274a', '\u274b'],
                ['\u2757', '\u2755', '\u2762', '\u2763'],
                ['\u2753', '\u2754', '\u27b0', '\u27bf'],
                ['\u270f', '\u2710', '\u270e', '\u2774'],
                ['\u2712', '\u2711', '\u274d', '\u274e'],
                ['\u2709', '\u2706', '\u2708', '\u2707'],
                ['\u275b', '\u275d', '\u2761', '\u2775'],
                ['\u275c', '\u275e', '\u275f', '\u2760'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    '\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0': {
        'name': 'Divehi',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u07ab', '\u00d7'],
                ['\u07ae', '\u2019'],
                ['\u07a7', '\u201c'],
                ['\u07a9', '/'],
                ['\u07ad', ':'],
                ['\u078e', '\u07a4'],
                ['\u0783', '\u079c'],
                ['\u0789', '\u07a3'],
                ['\u078c', '\u07a0'],
                ['\u0780', '\u0799'],
                ['\u078d', '\u00f7'],
                ['[', '{'],
                [']', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u07a8', '<'],
                ['\u07aa', '>'],
                ['\u07b0', '.', ',', ','],
                ['\u07a6', '\u060c'],
                ['\u07ac', '"'],
                ['\u0788', '\u07a5'],
                ['\u0787', '\u07a2'],
                ['\u0782', '\u0798'],
                ['\u0786', '\u079a'],
                ['\u078a', '\u07a1'],
                ['\ufdf2', '\u061b', ';', ';'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u0792', '\u0796'],
                ['\u0791', '\u0795'],
                ['\u0790', '\u078f'],
                ['\u0794', '\u0797', '\u200D'],
                ['\u0785', '\u079f', '\u200C'],
                ['\u078b', '\u079b', '\u200E'],
                ['\u0784', '\u079D', '\u200F'],
                ['\u0781', '\\'],
                ['\u0793', '\u079e'],
                ['\u07af', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['dv']
    },
    'Dvorak': {
        'name': 'Dvorak',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['[', '{'],
                [']', '}'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\'', '"'],
                [',', '<'],
                ['.', '>'],
                ['p', 'P'],
                ['y', 'Y'],
                ['f', 'F'],
                ['g', 'G'],
                ['c', 'C'],
                ['r', 'R'],
                ['l', 'L'],
                ['/', '?'],
                ['=', '+'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['o', 'O'],
                ['e', 'E'],
                ['u', 'U'],
                ['i', 'I'],
                ['d', 'D'],
                ['h', 'H'],
                ['t', 'T'],
                ['n', 'N'],
                ['s', 'S'],
                ['-', '_'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [';', ':'],
                ['q', 'Q'],
                ['j', 'J'],
                ['k', 'K'],
                ['x', 'X'],
                ['b', 'B'],
                ['m', 'M'],
                ['w', 'W'],
                ['v', 'V'],
                ['z', 'Z'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac': {
        'name': 'Greek',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a3'],
                ['5', '%', '\u00a7'],
                ['6', '^', '\u00b6'],
                ['7', '&'],
                ['8', '*', '\u00a4'],
                ['9', '(', '\u00a6'],
                ['0', ')', '\u00ba'],
                ['-', '_', '\u00b1'],
                ['=', '+', '\u00bd'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                [';', ':'],
                ['\u03c2', '^'],
                ['\u03b5', '\u0395'],
                ['\u03c1', '\u03a1'],
                ['\u03c4', '\u03a4'],
                ['\u03c5', '\u03a5'],
                ['\u03b8', '\u0398'],
                ['\u03b9', '\u0399'],
                ['\u03bf', '\u039f'],
                ['\u03c0', '\u03a0'],
                ['[', '{', '\u201c'],
                [']', '}', '\u201d'],
                ['\\', '|', '\u00ac']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u03b1', '\u0391'],
                ['\u03c3', '\u03a3'],
                ['\u03b4', '\u0394'],
                ['\u03c6', '\u03a6'],
                ['\u03b3', '\u0393'],
                ['\u03b7', '\u0397'],
                ['\u03be', '\u039e'],
                ['\u03ba', '\u039a'],
                ['\u03bb', '\u039b'],
                ['\u0384', '\u00a8', '\u0385'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['\u03b6', '\u0396'],
                ['\u03c7', '\u03a7'],
                ['\u03c8', '\u03a8'],
                ['\u03c9', '\u03a9'],
                ['\u03b2', '\u0392'],
                ['\u03bd', '\u039d'],
                ['\u03bc', '\u039c'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['el']
    },
    'Eesti': {
        'name': 'Estonian',
        'keys': [
            [
                ['\u02C7', '~'],
                ['1', '!'],
                ['2', '"', '@', '@'],
                ['3', '#', '\u00A3', '\u00A3'],
                ['4', '\u00A4', '$', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{', '{'],
                ['8', '(', '[', '['],
                ['9', ')', ']', ']'],
                ['0', '=', '}', '}'],
                ['+', '?', '\\', '\\'],
                ['\u00B4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FC', '\u00DC'],
                ['\u00F5', '\u00D5', '\u00A7', '\u00A7'],
                ['\'', '*', '\u00BD', '\u00BD']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0161', '\u0160'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00F6', '\u00D6'],
                ['\u00E4', '\u00C4', '^', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|', '|'],
                ['z', 'Z', '\u017E', '\u017D'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['et']
    },
    'Espa\u00f1ol': {
        'name': 'Spanish',
        'keys': [
            [
                ['\u00ba', '\u00aa', '\\'],
                ['1', '!', '|'],
                ['2', '"', '@'],
                ['3', '\'', '#'],
                ['4', '$', '~'],
                ['5', '%', '\u20ac'],
                ['6', '&', '\u00ac'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['\u00a1', '\u00bf'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['`', '^', '['],
                ['+', '*', ']'],
                ['\u00e7', '\u00c7', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f1', '\u00d1'],
                ['\u00b4', '\u00a8', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['es']
    },
    '\u062f\u0631\u06cc': {
        'name': 'Dari',
        'keys': [
            [
                ['\u200D', '\u00F7', '~'],
                ['\u06F1', '!', '`'],
                ['\u06F2', '\u066C', '@'],
                ['\u06F3', '\u066B', '#'],
                ['\u06F4', '\u060B', '$'],
                ['\u06F5', '\u066A', '%'],
                ['\u06F6', '\u00D7', '^'],
                ['\u06F7', '\u060C', '&'],
                ['\u06F8', '*', '\u2022'],
                ['\u06F9', ')', '\u200E'],
                ['\u06F0', '(', '\u200F'],
                ['-', '\u0640', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u0652', '\u00B0'],
                ['\u0635', '\u064C'],
                ['\u062B', '\u064D', '\u20AC'],
                ['\u0642', '\u064B', '\uFD3E'],
                ['\u0641', '\u064F', '\uFD3F'],
                ['\u063A', '\u0650', '\u0656'],
                ['\u0639', '\u064E', '\u0659'],
                ['\u0647', '\u0651', '\u0655'],
                ['\u062E', ']', '\''],
                ['\u062D', '[', '"'],
                ['\u062C', '}', '\u0681'],
                ['\u0686', '{', '\u0685'],
                ['\\', '|', '?']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0624', '\u069A'],
                ['\u0633', '\u0626', '\u06CD'],
                ['\u06CC', '\u064A', '\u0649'],
                ['\u0628', '\u0625', '\u06D0'],
                ['\u0644', '\u0623', '\u06B7'],
                ['\u0627', '\u0622', '\u0671'],
                ['\u062A', '\u0629', '\u067C'],
                ['\u0646', '\u00BB', '\u06BC'],
                ['\u0645', '\u00AB', '\u06BA'],
                ['\u06A9', ':', ';'],
                ['\u06AF', '\u061B', '\u06AB'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '\u0643', '\u06D2'],
                ['\u0637', '\u0653', '\u0691'],
                ['\u0632', '\u0698', '\u0696'],
                ['\u0631', '\u0670', '\u0693'],
                ['\u0630', '\u200C', '\u0688'],
                ['\u062F', '\u0654', '\u0689'],
                ['\u067E', '\u0621', '\u0679'],
                ['\u0648', '>', ','],
                ['.', '<', '\u06C7'],
                ['/', '\u061F', '\u06C9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fa-AF']
    },
    '\u0641\u0627\u0631\u0633\u06cc': {
        'name': 'Farsi',
        'keys': [
            [
                ['\u067e', '\u0651 '],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u064e'],
                ['\u0635', '\u064b'],
                ['\u062b', '\u064f'],
                ['\u0642', '\u064c'],
                ['\u0641', '\u0644'],
                ['\u063a', '\u0625'],
                ['\u0639', '\u2018'],
                ['\u0647', '\u00f7'],
                ['\u062e', '\u00d7'],
                ['\u062d', '\u061b'],
                ['\u062c', '<'],
                ['\u0686', '>'],
                ['\u0698', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0650'],
                ['\u0633', '\u064d'],
                ['\u064a', ']'],
                ['\u0628', '['],
                ['\u0644', '\u0644'],
                ['\u0627', '\u0623'],
                ['\u062a', '\u0640'],
                ['\u0646', '\u060c'],
                ['\u0645', '\\'],
                ['\u06af', ':'],
                ['\u0643', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '~'],
                ['\u0637', '\u0652'],
                ['\u0632', '}'],
                ['\u0631', '{'],
                ['\u0630', '\u0644'],
                ['\u062f', '\u0622'],
                ['\u0626', '\u0621'],
                ['\u0648', ','],
                ['.', '.'],
                ['/', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['fa']
    },
    'F\u00f8royskt': {
        'name': 'Faeroese',
        'keys': [
            [
                ['\u00BD', '\u00A7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00A3'],
                ['4', '\u00A4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\u00B4', '`', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E5', '\u00C5', '\u00A8'],
                ['\u00F0', '\u00D0', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E6', '\u00C6'],
                ['\u00F8', '\u00D8', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fo']
    },
    'Fran\u00e7ais': {
        'name': 'French',
        'keys': [
            [
                ['\u00b2', '\u00b3'],
                ['&', '1'],
                ['\u00e9', '2', '~'],
                ['"', '3', '#'],
                ['\'', '4', '{'],
                ['(', '5', '['],
                ['-', '6', '|'],
                ['\u00e8', '7', '`'],
                ['_', '8', '\\'],
                ['\u00e7', '9', '^'],
                ['\u00e0', '0', '@'],
                [')', '\u00b0', ']'],
                ['=', '+', '}'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['a', 'A'],
                ['z', 'Z'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['^', '\u00a8'],
                ['$', '\u00a3', '\u00a4'],
                ['*', '\u03bc']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['q', 'Q'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['m', 'M'],
                ['\u00f9', '%'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['w', 'W'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                [',', '?'],
                [';', '.'],
                [':', '/'],
                ['!', '\u00a7'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr']
    },
    'Gaeilge': {
        'name': 'Irish / Gaelic',
        'keys': [
            [
                ['`', '\u00AC', '\u00A6', '\u00A6'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00A3'],
                ['4', '$', '\u20AC'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00E9', '\u00C9'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y', '\u00FD', '\u00DD'],
                ['u', 'U', '\u00FA', '\u00DA'],
                ['i', 'I', '\u00ED', '\u00CD'],
                ['o', 'O', '\u00F3', '\u00D3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['#', '~']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E1', '\u00C1'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@', '\u00B4', '`'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ga', 'gd']
    },
    '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0': {
        'name': 'Gujarati',
        'keys': [
            [
                [''],
                ['1', '\u0A8D', '\u0AE7'],
                ['2', '\u0AC5', '\u0AE8'],
                ['3', '\u0ACD\u0AB0', '\u0AE9'],
                ['4', '\u0AB0\u0ACD', '\u0AEA'],
                ['5', '\u0A9C\u0ACD\u0A9E', '\u0AEB'],
                ['6', '\u0AA4\u0ACD\u0AB0', '\u0AEC'],
                ['7', '\u0A95\u0ACD\u0AB7', '\u0AED'],
                ['8', '\u0AB6\u0ACD\u0AB0', '\u0AEE'],
                ['9', '(', '\u0AEF'],
                ['0', ')', '\u0AE6'],
                ['-', '\u0A83'],
                ['\u0AC3', '\u0A8B', '\u0AC4', '\u0AE0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0ACC', '\u0A94'],
                ['\u0AC8', '\u0A90'],
                ['\u0ABE', '\u0A86'],
                ['\u0AC0', '\u0A88'],
                ['\u0AC2', '\u0A8A'],
                ['\u0AAC', '\u0AAD'],
                ['\u0AB9', '\u0A99'],
                ['\u0A97', '\u0A98'],
                ['\u0AA6', '\u0AA7'],
                ['\u0A9C', '\u0A9D'],
                ['\u0AA1', '\u0AA2'],
                ['\u0ABC', '\u0A9E'],
                ['\u0AC9', '\u0A91']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0ACB', '\u0A93'],
                ['\u0AC7', '\u0A8F'],
                ['\u0ACD', '\u0A85'],
                ['\u0ABF', '\u0A87'],
                ['\u0AC1', '\u0A89'],
                ['\u0AAA', '\u0AAB'],
                ['\u0AB0'],
                ['\u0A95', '\u0A96'],
                ['\u0AA4', '\u0AA5'],
                ['\u0A9A', '\u0A9B'],
                ['\u0A9F', '\u0AA0'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0A82', '\u0A81', '', '\u0AD0'],
                ['\u0AAE', '\u0AA3'],
                ['\u0AA8'],
                ['\u0AB5'],
                ['\u0AB2', '\u0AB3'],
                ['\u0AB8', '\u0AB6'],
                [',', '\u0AB7'],
                ['.', '\u0964', '\u0965', '\u0ABD'],
                ['\u0AAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['gu']
    },
    '\u05e2\u05d1\u05e8\u05d9\u05ea': {
        'name': 'Hebrew',
        'keys': [
            [
                ['~', '`'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$', '\u20aa'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', 'Q'],
                ['\'', 'W'],
                ['\u05e7', 'E', '\u20ac'],
                ['\u05e8', 'R'],
                ['\u05d0', 'T'],
                ['\u05d8', 'Y'],
                ['\u05d5', 'U', '\u05f0'],
                ['\u05df', 'I'],
                ['\u05dd', 'O'],
                ['\u05e4', 'P'],
                ['\\', '|'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05e9', 'A'],
                ['\u05d3', 'S'],
                ['\u05d2', 'D'],
                ['\u05db', 'F'],
                ['\u05e2', 'G'],
                ['\u05d9', 'H', '\u05f2'],
                ['\u05d7', 'J', '\u05f1'],
                ['\u05dc', 'K'],
                ['\u05da', 'L'],
                ['\u05e3', ':'],
                [',', '"'],
                [']', '}'],
                ['[', '{']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05d6', 'Z'],
                ['\u05e1', 'X'],
                ['\u05d1', 'C'],
                ['\u05d4', 'V'],
                ['\u05e0', 'B'],
                ['\u05de', 'N'],
                ['\u05e6', 'M'],
                ['\u05ea', '>'],
                ['\u05e5', '<'],
                ['.', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['he']
    },
    '\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940': {
        'name': 'Devanagari',
        'keys': [
            [
                ['\u094A', '\u0912'],
                ['1', '\u090D', '\u0967'],
                ['2', '\u0945', '\u0968'],
                ['3', '\u094D\u0930', '\u0969'],
                ['4', '\u0930\u094D', '\u096A'],
                ['5', '\u091C\u094D\u091E', '\u096B'],
                ['6', '\u0924\u094D\u0930', '\u096C'],
                ['7', '\u0915\u094D\u0937', '\u096D'],
                ['8', '\u0936\u094D\u0930', '\u096E'],
                ['9', '(', '\u096F'],
                ['0', ')', '\u0966'],
                ['-', '\u0903'],
                ['\u0943', '\u090B', '\u0944', '\u0960'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908', '\u0963', '\u0961'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918', '\u095A'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D', '\u095B'],
                ['\u0921', '\u0922', '\u095C', '\u095D'],
                ['\u093C', '\u091E'],
                ['\u0949', '\u0911']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907', '\u0962', '\u090C'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B', '', '\u095E'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916', '\u0958', '\u0959'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', '\u0952'],
                ['\u091F', '\u0920', '', '\u0951'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0946', '\u090E', '\u0953'],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923', '\u0954'],
                ['\u0928', '\u0929'],
                ['\u0935', '\u0934'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', '\u0970'],
                ['.', '\u0964', '\u0965', '\u093D'],
                ['\u092F', '\u095F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hi-DEVA']
    },
    '\u0939\u093f\u0902\u0926\u0940': {
        'name': 'Hindi',
        'keys': [
            [
                ['\u200d', '\u200c', '`', '~'],
                ['1', '\u090D', '\u0967', '!'],
                ['2', '\u0945', '\u0968', '@'],
                ['3', '\u094D\u0930', '\u0969', '#'],
                ['4', '\u0930\u094D', '\u096A', '$'],
                ['5', '\u091C\u094D\u091E', '\u096B', '%'],
                ['6', '\u0924\u094D\u0930', '\u096C', '^'],
                ['7', '\u0915\u094D\u0937', '\u096D', '&'],
                ['8', '\u0936\u094D\u0930', '\u096E', '*'],
                ['9', '(', '\u096F', '('],
                ['0', ')', '\u0966', ')'],
                ['-', '\u0903', '-', '_'],
                ['\u0943', '\u090B', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D'],
                ['\u0921', '\u0922', '[', '{'],
                ['\u093C', '\u091E', ']', '}'],
                ['\u0949', '\u0911', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', ';', ':'],
                ['\u091F', '\u0920', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923'],
                ['\u0928'],
                ['\u0935'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', ',', '<'],
                ['.', '\u0964', '.', '>'],
                ['\u092F', '\u095F', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hi']
    },
    '\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0574\u0578\u0582\u057f\u0584': {
        'name': 'Western Armenian',
        'keys': [
            [
                ['\u055D', '\u055C'],
                [':', '1'],
                ['\u0571', '\u0541'],
                ['\u0575', '\u0545'],
                ['\u055B', '3'],
                [',', '4'],
                ['-', '9'],
                ['.', '\u0587'],
                ['\u00AB', '('],
                ['\u00BB', ')'],
                ['\u0585', '\u0555'],
                ['\u057C', '\u054C'],
                ['\u056A', '\u053A'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u056D', '\u053D'],
                ['\u057E', '\u054E'],
                ['\u0567', '\u0537'],
                ['\u0580', '\u0550'],
                ['\u0564', '\u0534'],
                ['\u0565', '\u0535'],
                ['\u0568', '\u0538'],
                ['\u056B', '\u053B'],
                ['\u0578', '\u0548'],
                ['\u0562', '\u0532'],
                ['\u0579', '\u0549'],
                ['\u057B', '\u054B'],
                ['\'', '\u055E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0561', '\u0531'],
                ['\u057D', '\u054D'],
                ['\u057F', '\u054F'],
                ['\u0586', '\u0556'],
                ['\u056F', '\u053F'],
                ['\u0570', '\u0540'],
                ['\u0573', '\u0543'],
                ['\u0584', '\u0554'],
                ['\u056C', '\u053C'],
                ['\u0569', '\u0539'],
                ['\u0583', '\u0553'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0566', '\u0536'],
                ['\u0581', '\u0551'],
                ['\u0563', '\u0533'],
                ['\u0582', '\u0552'],
                ['\u057A', '\u054A'],
                ['\u0576', '\u0546'],
                ['\u0574', '\u0544'],
                ['\u0577', '\u0547'],
                ['\u0572', '\u0542'],
                ['\u056E', '\u053E'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['hy-AREVMATA']
    },
    '\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0565\u056c\u0584': {
        'name': 'Eastern Armenian',
        'keys': [
            [
                ['\u055D', '\u055C'],
                [':', '1'],
                ['\u0571', '\u0541'],
                ['\u0575', '\u0545'],
                ['\u055B', '3'],
                [',', '4'],
                ['-', '9'],
                ['.', '\u0587'],
                ['\u00AB', '('],
                ['\u00BB', ')'],
                ['\u0585', '\u0555'],
                ['\u057C', '\u054C'],
                ['\u056A', '\u053A'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u056D', '\u053D'],
                ['\u0582', '\u0552'],
                ['\u0567', '\u0537'],
                ['\u0580', '\u0550'],
                ['\u057F', '\u054F'],
                ['\u0565', '\u0535'],
                ['\u0568', '\u0538'],
                ['\u056B', '\u053B'],
                ['\u0578', '\u0548'],
                ['\u057A', '\u054A'],
                ['\u0579', '\u0549'],
                ['\u057B', '\u054B'],
                ['\'', '\u055E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0561', '\u0531'],
                ['\u057D', '\u054D'],
                ['\u0564', '\u0534'],
                ['\u0586', '\u0556'],
                ['\u0584', '\u0554'],
                ['\u0570', '\u0540'],
                ['\u0573', '\u0543'],
                ['\u056F', '\u053F'],
                ['\u056C', '\u053C'],
                ['\u0569', '\u0539'],
                ['\u0583', '\u0553'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0566', '\u0536'],
                ['\u0581', '\u0551'],
                ['\u0563', '\u0533'],
                ['\u057E', '\u054E'],
                ['\u0562', '\u0532'],
                ['\u0576', '\u0546'],
                ['\u0574', '\u0544'],
                ['\u0577', '\u0547'],
                ['\u0572', '\u0542'],
                ['\u056E', '\u053E'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['hy']
    },
    '\u00cdslenska': {
        'name': 'Icelandic',
        'keys': [
            [
                ['\u00B0', '\u00A8', '\u00B0'],
                ['1', '!'],
                ['2', '"'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\u00F6', '\u00D6', '\\'],
                ['-', '_'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00F0', '\u00D0'],
                ['\'', '?', '~'],
                ['+', '*', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E6', '\u00C6'],
                ['\u00B4', '\'', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['\u00FE', '\u00DE'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['is']
    },
    'Italiano': {
        'name': 'Italian',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00a3'],
                ['4', '$', '\u20ac'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['\u00ec', '^'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e8', '\u00e9', '[', '{'],
                ['+', '*', ']', '}'],
                ['\u00f9', '\u00a7']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f2', '\u00e7', '@'],
                ['\u00e0', '\u00b0', '#'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['it']
    },
    '\u65e5\u672c\u8a9e': {
        'name': 'Japanese Hiragana/Katakana',
        'keys': [
            [
                ['\uff5e'],
                ['\u306c', '\u30cc'],
                ['\u3075', '\u30d5'],
                ['\u3042', '\u30a2', '\u3041', '\u30a1'],
                ['\u3046', '\u30a6', '\u3045', '\u30a5'],
                ['\u3048', '\u30a8', '\u3047', '\u30a7'],
                ['\u304a', '\u30aa', '\u3049', '\u30a9'],
                ['\u3084', '\u30e4', '\u3083', '\u30e3'],
                ['\u3086', '\u30e6', '\u3085', '\u30e5'],
                ['\u3088', '\u30e8', '\u3087', '\u30e7'],
                ['\u308f', '\u30ef', '\u3092', '\u30f2'],
                ['\u307b', '\u30db', '\u30fc', '\uff1d'],
                ['\u3078', '\u30d8', '\uff3e', '\uff5e'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u305f', '\u30bf'],
                ['\u3066', '\u30c6'],
                ['\u3044', '\u30a4', '\u3043', '\u30a3'],
                ['\u3059', '\u30b9'],
                ['\u304b', '\u30ab'],
                ['\u3093', '\u30f3'],
                ['\u306a', '\u30ca'],
                ['\u306b', '\u30cb'],
                ['\u3089', '\u30e9'],
                ['\u305b', '\u30bb'],
                ['\u3001', '\u3001', '\uff20', '\u2018'],
                ['\u3002', '\u3002', '\u300c', '\uff5b'],
                ['\uffe5', '', '', '\uff0a'],
                ['\u309B', '"', '\uffe5', '\uff5c']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u3061', '\u30c1'],
                ['\u3068', '\u30c8'],
                ['\u3057', '\u30b7'],
                ['\u306f', '\u30cf'],
                ['\u304d', '\u30ad'],
                ['\u304f', '\u30af'],
                ['\u307e', '\u30de'],
                ['\u306e', '\u30ce'],
                ['\u308c', '\u30ec', '\uff1b', '\uff0b'],
                ['\u3051', '\u30b1', '\uff1a', '\u30f6'],
                ['\u3080', '\u30e0', '\u300d', '\uff5d'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u3064', '\u30c4'],
                ['\u3055', '\u30b5'],
                ['\u305d', '\u30bd'],
                ['\u3072', '\u30d2'],
                ['\u3053', '\u30b3'],
                ['\u307f', '\u30df'],
                ['\u3082', '\u30e2'],
                ['\u306d', '\u30cd', '\u3001', '\uff1c'],
                ['\u308b', '\u30eb', '\u3002', '\uff1e'],
                ['\u3081', '\u30e1', '\u30fb', '\uff1f'],
                ['\u308d', '\u30ed', '', '\uff3f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ja']
    },
    '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8': {
        'name': 'Georgian',
        'keys': [
            [
                ['\u201E', '\u201C'],
                ['!', '1'],
                ['?', '2'],
                ['\u2116', '3'],
                ['\u00A7', '4'],
                ['%', '5'],
                [':', '6'],
                ['.', '7'],
                [';', '8'],
                [',', '9'],
                ['/', '0'],
                ['\u2013', '-'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u10E6', '\u10E6'],
                ['\u10EF', '\u10EF'],
                ['\u10E3', '\u10E3'],
                ['\u10D9', '\u10D9'],
                ['\u10D4', '\u10D4', '\u10F1'],
                ['\u10DC', '\u10DC'],
                ['\u10D2', '\u10D2'],
                ['\u10E8', '\u10E8'],
                ['\u10EC', '\u10EC'],
                ['\u10D6', '\u10D6'],
                ['\u10EE', '\u10EE', '\u10F4'],
                ['\u10EA', '\u10EA'],
                ['(', ')']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u10E4', '\u10E4', '\u10F6'],
                ['\u10EB', '\u10EB'],
                ['\u10D5', '\u10D5', '\u10F3'],
                ['\u10D7', '\u10D7'],
                ['\u10D0', '\u10D0'],
                ['\u10DE', '\u10DE'],
                ['\u10E0', '\u10E0'],
                ['\u10DD', '\u10DD'],
                ['\u10DA', '\u10DA'],
                ['\u10D3', '\u10D3'],
                ['\u10DF', '\u10DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u10ED', '\u10ED'],
                ['\u10E9', '\u10E9'],
                ['\u10E7', '\u10E7'],
                ['\u10E1', '\u10E1'],
                ['\u10DB', '\u10DB'],
                ['\u10D8', '\u10D8', '\u10F2'],
                ['\u10E2', '\u10E2'],
                ['\u10E5', '\u10E5'],
                ['\u10D1', '\u10D1'],
                ['\u10F0', '\u10F0', '\u10F5'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ka']
    },
    '\u049a\u0430\u0437\u0430\u049b\u0448\u0430': {
        'name': 'Kazakh',
        'keys': [
            [
                ['(', ')'],
                ['"', '!'],
                ['\u04d9', '\u04d8'],
                ['\u0456', '\u0406'],
                ['\u04a3', '\u04a2'],
                ['\u0493', '\u0492'],
                [',', ';'],
                ['.', ':'],
                ['\u04af', '\u04ae'],
                ['\u04b1', '\u04b0'],
                ['\u049b', '\u049a'],
                ['\u04e9', '\u04e8'],
                ['\u04bb', '\u04ba'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['\u2116', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['kk']
    },
    '\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a': {
        'name': 'Khmer',
        'keys': [
            [
                ['\u00AB', '\u00BB', '\u200D'],
                ['\u17E1', '!', '\u200C', '\u17F1'],
                ['\u17E2', '\u17D7', '@', '\u17F2'],
                ['\u17E3', '"', '\u17D1', '\u17F3'],
                ['\u17E4', '\u17DB', '$', '\u17F4'],
                ['\u17E5', '%', '\u20AC', '\u17F5'],
                ['\u17E6', '\u17CD', '\u17D9', '\u17F6'],
                ['\u17E7', '\u17D0', '\u17DA', '\u17F7'],
                ['\u17E8', '\u17CF', '*', '\u17F8'],
                ['\u17E9', '(', '{', '\u17F9'],
                ['\u17E0', ')', '}', '\u17F0'],
                ['\u17A5', '\u17CC', 'x'],
                ['\u17B2', '=', '\u17CE'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1786', '\u1788', '\u17DC', '\u19E0'],
                ['\u17B9', '\u17BA', '\u17DD', '\u19E1'],
                ['\u17C1', '\u17C2', '\u17AF', '\u19E2'],
                ['\u179A', '\u17AC', '\u17AB', '\u19E3'],
                ['\u178F', '\u1791', '\u17A8', '\u19E4'],
                ['\u1799', '\u17BD', '\u1799\u17BE\u1784', '\u19E5'],
                ['\u17BB', '\u17BC', '', '\u19E6'],
                ['\u17B7', '\u17B8', '\u17A6', '\u19E7'],
                ['\u17C4', '\u17C5', '\u17B1', '\u19E8'],
                ['\u1795', '\u1797', '\u17B0', '\u19E9'],
                ['\u17C0', '\u17BF', '\u17A9', '\u19EA'],
                ['\u17AA', '\u17A7', '\u17B3', '\u19EB'],
                ['\u17AE', '\u17AD', '\\']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u17B6', '\u17B6\u17C6', '\u17B5', '\u19EC'],
                ['\u179F', '\u17C3', '', '\u19ED'],
                ['\u178A', '\u178C', '\u17D3', '\u19EE'],
                ['\u1790', '\u1792', '', '\u19EF'],
                ['\u1784', '\u17A2', '\u17A4', '\u19F0'],
                ['\u17A0', '\u17C7', '\u17A3', '\u19F1'],
                ['\u17D2', '\u1789', '\u17B4', '\u19F2'],
                ['\u1780', '\u1782', '\u179D', '\u19F3'],
                ['\u179B', '\u17A1', '\u17D8', '\u19F4'],
                ['\u17BE', '\u17C4\u17C7', '\u17D6', '\u19F5'],
                ['\u17CB', '\u17C9', '\u17C8', '\u19F6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u178B', '\u178D', '|', '\u19F7'],
                ['\u1781', '\u1783', '\u1781\u17D2\u1789\u17BB\u17C6', '\u19F8'],
                ['\u1785', '\u1787', '-', '\u19F9'],
                ['\u179C', '\u17C1\u17C7', '+', '\u19FA'],
                ['\u1794', '\u1796', '\u179E', '\u19FB'],
                ['\u1793', '\u178E', '[', '\u19FC'],
                ['\u1798', '\u17C6', ']', '\u19FD'],
                ['\u17BB\u17C6', '\u17BB\u17C7', ',', '\u19FE'],
                ['\u17D4', '\u17D5', '.', '\u19FF'],
                ['\u17CA', '?', '/'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                ['\u200B', ' ', '\u00A0', ' '],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['km']
    },
    '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1': {
        'name': 'Kannada',
        'keys': [
            [
                ['\u0CCA', '\u0C92'],
                ['1', '', '\u0CE7'],
                ['2', '', '\u0CE8'],
                ['3', '\u0CCD\u0CB0', '\u0CE9'],
                ['4', '\u0CB0\u0CCD', '\u0CEA'],
                ['5', '\u0C9C\u0CCD\u0C9E', '\u0CEB'],
                ['6', '\u0CA4\u0CCD\u0CB0', '\u0CEC'],
                ['7', '\u0C95\u0CCD\u0CB7', '\u0CED'],
                ['8', '\u0CB6\u0CCD\u0CB0', '\u0CEE'],
                ['9', '(', '\u0CEF'],
                ['0', ')', '\u0CE6'],
                ['-', '\u0C83'],
                ['\u0CC3', '\u0C8B', '\u0CC4', '\u0CE0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0CCC', '\u0C94'],
                ['\u0CC8', '\u0C90', '\u0CD6'],
                ['\u0CBE', '\u0C86'],
                ['\u0CC0', '\u0C88', '', '\u0CE1'],
                ['\u0CC2', '\u0C8A'],
                ['\u0CAC', '\u0CAD'],
                ['\u0CB9', '\u0C99'],
                ['\u0C97', '\u0C98'],
                ['\u0CA6', '\u0CA7'],
                ['\u0C9C', '\u0C9D'],
                ['\u0CA1', '\u0CA2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0CCB', '\u0C93'],
                ['\u0CC7', '\u0C8F', '\u0CD5'],
                ['\u0CCD', '\u0C85'],
                ['\u0CBF', '\u0C87', '', '\u0C8C'],
                ['\u0CC1', '\u0C89'],
                ['\u0CAA', '\u0CAB', '', '\u0CDE'],
                ['\u0CB0', '\u0CB1'],
                ['\u0C95', '\u0C96'],
                ['\u0CA4', '\u0CA5'],
                ['\u0C9A', '\u0C9B'],
                ['\u0C9F', '\u0CA0'],
                ['', '\u0C9E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0CC6', '\u0C8F'],
                ['\u0C82'],
                ['\u0CAE', '\u0CA3'],
                ['\u0CA8'],
                ['\u0CB5'],
                ['\u0CB2', '\u0CB3'],
                ['\u0CB8', '\u0CB6'],
                [',', '\u0CB7'],
                ['.', '|'],
                ['\u0CAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['kn']
    },
    '\ud55c\uad6d\uc5b4': {
        'name': 'Korean',
        'keys': [
            [
                ['`', '~', '`', '~'],
                ['1', '!', '1', '!'],
                ['2', '@', '2', '@'],
                ['3', '#', '3', '#'],
                ['4', '$', '4', '$'],
                ['5', '%', '5', '%'],
                ['6', '^', '6', '^'],
                ['7', '&', '7', '&'],
                ['8', '*', '8', '*'],
                ['9', ')', '9', ')'],
                ['0', '(', '0', '('],
                ['-', '_', '-', '_'],
                ['=', '+', '=', '+'],
                ['\u20A9', '|', '\u20A9', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1107', '\u1108', 'q', 'Q'],
                ['\u110C', '\u110D', 'w', 'W'],
                ['\u1103', '\u1104', 'e', 'E'],
                ['\u1100', '\u1101', 'r', 'R'],
                ['\u1109', '\u110A', 't', 'T'],
                ['\u116D', '', 'y', 'Y'],
                ['\u1167', '', 'u', 'U'],
                ['\u1163', '', 'i', 'I'],
                ['\u1162', '\u1164', 'o', 'O'],
                ['\u1166', '\u1168', 'p', 'P'],
                ['[', '{', '[', '{'],
                [']', '}', ']', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u1106', '', 'a', 'A'],
                ['\u1102', '', 's', 'S'],
                ['\u110B', '', 'd', 'D'],
                ['\u1105', '', 'f', 'F'],
                ['\u1112', '', 'g', 'G'],
                ['\u1169', '', 'h', 'H'],
                ['\u1165', '', 'j', 'J'],
                ['\u1161', '', 'k', 'K'],
                ['\u1175', '', 'l', 'L'],
                [';', ':', ';', ':'],
                ['\'', '"', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u110F', '', 'z', 'Z'],
                ['\u1110', '', 'x', 'X'],
                ['\u110E', '', 'c', 'C'],
                ['\u1111', '', 'v', 'V'],
                ['\u1172', '', 'b', 'B'],
                ['\u116E', '', 'n', 'N'],
                ['\u1173', '', 'm', 'M'],
                [',', '<', ',', '<'],
                ['.', '>', '.', '>'],
                ['/', '?', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                ['Kor', KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ko']
    },
    'Kurd\u00ee': {
        'name': 'Kurdish',
        'keys': [
            [
                ['\u20ac', '~'],
                ['\u0661', '!'],
                ['\u0662', '@'],
                ['\u0663', '#'],
                ['\u0664', '$'],
                ['\u0665', '%'],
                ['\u0666', '^'],
                ['\u0667', '&'],
                ['\u0668', '*'],
                ['\u0669', '('],
                ['\u0660', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0642', '`'],
                ['\u0648', '\u0648\u0648'],
                ['\u06d5', '\u064a'],
                ['\u0631', '\u0695'],
                ['\u062a', '\u0637'],
                ['\u06cc', '\u06ce'],
                ['\u0626', '\u0621'],
                ['\u062d', '\u0639'],
                ['\u06c6', '\u0624'],
                ['\u067e', '\u062b'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0627', '\u0622'],
                ['\u0633', '\u0634'],
                ['\u062f', '\u0630'],
                ['\u0641', '\u0625'],
                ['\u06af', '\u063a'],
                ['\u0647', '\u200c'],
                ['\u0698', '\u0623'],
                ['\u06a9', '\u0643'],
                ['\u0644', '\u06b5'],
                ['\u061b', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0632', '\u0636'],
                ['\u062e', '\u0635'],
                ['\u062c', '\u0686'],
                ['\u06a4', '\u0638'],
                ['\u0628', '\u0649'],
                ['\u0646', '\u0629'],
                ['\u0645', '\u0640'],
                ['\u060c', '<'],
                ['.', '>'],
                ['/', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ku']
    },
    '\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430': {
        'name': 'Kyrgyz',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423', '\u04AF', '\u04AE'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D', '\u04A3', '\u04A2'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E', '\u04E9', '\u04E8'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ky']
    },
    'Latvie\u0161u': {
        'name': 'Latvian',
        'keys': [
            [
                ['\u00AD', '?'],
                ['1', '!', '\u00AB'],
                ['2', '\u00AB', '', '@'],
                ['3', '\u00BB', '', '#'],
                ['4', '$', '\u20AC', '$'],
                ['5', '%', '"', '~'],
                ['6', '/', '\u2019', '^'],
                ['7', '&', '', '\u00B1'],
                ['8', '\u00D7', ':'],
                ['9', '('],
                ['0', ')'],
                ['-', '_', '\u2013', '\u2014'],
                ['f', 'F', '=', ';'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u016B', '\u016A', 'q', 'Q'],
                ['g', 'G', '\u0123', '\u0122'],
                ['j', 'J'],
                ['r', 'R', '\u0157', '\u0156'],
                ['m', 'M', 'w', 'W'],
                ['v', 'V', 'y', 'Y'],
                ['n', 'N'],
                ['z', 'Z'],
                ['\u0113', '\u0112'],
                ['\u010D', '\u010C'],
                ['\u017E', '\u017D', '[', '{'],
                ['h', 'H', ']', '}'],
                ['\u0137', '\u0136']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0161', '\u0160'],
                ['u', 'U'],
                ['s', 'S'],
                ['i', 'I'],
                ['l', 'L'],
                ['d', 'D'],
                ['a', 'A'],
                ['t', 'T'],
                ['e', 'E', '\u20AC'],
                ['c', 'C'],
                ['\u00B4', '\u00B0', '\u00B4', '\u00A8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0146', '\u0145'],
                ['b', 'B', 'x', 'X'],
                ['\u012B', '\u012A'],
                ['k', 'K', '\u0137', '\u0136'],
                ['p', 'P'],
                ['o', 'O', '\u00F5', '\u00D5'],
                ['\u0101', '\u0100'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['\u013C', '\u013B'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['lv']
    },
    'Lietuvi\u0173': {
        'name': 'Lithuanian',
        'keys': [
            [
                ['`', '~'],
                ['\u0105', '\u0104'],
                ['\u010D', '\u010C'],
                ['\u0119', '\u0118'],
                ['\u0117', '\u0116'],
                ['\u012F', '\u012E'],
                ['\u0161', '\u0160'],
                ['\u0173', '\u0172'],
                ['\u016B', '\u016A'],
                ['\u201E', '('],
                ['\u201C', ')'],
                ['-', '_'],
                ['\u017E', '\u017D'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u2013', '\u20AC'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['lt']
    },
    'Magyar': {
        'name': 'Hungarian',
        'keys': [
            [
                ['0', '\u00a7'],
                ['1', '\'', '~'],
                ['2', '"', '\u02c7'],
                ['3', '+', '\u02c6'],
                ['4', '!', '\u02d8'],
                ['5', '%', '\u00b0'],
                ['6', '/', '\u02db'],
                ['7', '=', '`'],
                ['8', '(', '\u02d9'],
                ['9', ')', '\u00b4'],
                ['\u00f6', '\u00d6', '\u02dd'],
                ['\u00fc', '\u00dc', '\u00a8'],
                ['\u00f3', '\u00d3', '\u00b8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u00c4'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U', '\u20ac'],
                ['i', 'I', '\u00cd'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u0151', '\u0150', '\u00f7'],
                ['\u00fa', '\u00da', '\u00d7'],
                ['\u0171', '\u0170', '\u00a4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e4'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J', '\u00ed'],
                ['k', 'K', '\u0141'],
                ['l', 'L', '\u0142'],
                ['\u00e9', '\u00c9', '$'],
                ['\u00e1', '\u00c1', '\u00df'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u00ed', '\u00cd', '<'],
                ['y', 'Y', '>'],
                ['x', 'X', '#'],
                ['c', 'C', '&'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '<'],
                [',', '?', ';'],
                ['.', ':', '>'],
                ['-', '_', '*'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hu']
    },
    'Malti': {
        'name': 'Maltese 48',
        'keys': [
            [
                ['\u010B', '\u010A', '`'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u20ac', '\u00A3'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00E8', '\u00C8'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U', '\u00F9', '\u00D9'],
                ['i', 'I', '\u00EC', '\u00cc'],
                ['o', 'O', '\u00F2', '\u00D2'],
                ['p', 'P'],
                ['\u0121', '\u0120', '[', '{'],
                ['\u0127', '\u0126', ']', '}'],
                ['#', '\u017e']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E0', '\u00C0'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u017c', '\u017b', '\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?', '', '`'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mt']
    },
    '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438': {
        'name': 'Macedonian Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '\u201E'],
                ['3', '\u201C'],
                ['4', '\u2019'],
                ['5', '%'],
                ['6', '\u2018'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0459', '\u0409'],
                ['\u045A', '\u040A'],
                ['\u0435', '\u0415', '\u20AC'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u0455', '\u0405'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043E', '\u041E'],
                ['\u043F', '\u041F'],
                ['\u0448', '\u0428', '\u0402'],
                ['\u0453', '\u0403', '\u0452'],
                ['\u0436', '\u0416']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424', '['],
                ['\u0433', '\u0413', ']'],
                ['\u0445', '\u0425'],
                ['\u0458', '\u0408'],
                ['\u043A', '\u041A'],
                ['\u043B', '\u041B'],
                ['\u0447', '\u0427', '\u040B'],
                ['\u045C', '\u040C', '\u045B'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0451', '\u0401'],
                ['\u0437', '\u0417'],
                ['\u045F', '\u040F'],
                ['\u0446', '\u0426'],
                ['\u0432', '\u0412', '@'],
                ['\u0431', '\u0411', '{'],
                ['\u043D', '\u041D', '}'],
                ['\u043C', '\u041C', '\u00A7'],
                [',', ';'],
                ['.', ':'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mk']
    },
    '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02': {
        'name': 'Malayalam',
        'keys': [
            [
                ['\u0D4A', '\u0D12'],
                ['1', '', '\u0D67'],
                ['2', '', '\u0D68'],
                ['3', '\u0D4D\u0D30', '\u0D69'],
                ['4', '', '\u0D6A'],
                ['5', '', '\u0D6B'],
                ['6', '', '\u0D6C'],
                ['7', '\u0D15\u0D4D\u0D37', '\u0D6D'],
                ['8', '', '\u0D6E'],
                ['9', '(', '\u0D6F'],
                ['0', ')', '\u0D66'],
                ['-', '\u0D03'],
                ['\u0D43', '\u0D0B', '', '\u0D60'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0D4C', '\u0D14', '\u0D57'],
                ['\u0D48', '\u0D10'],
                ['\u0D3E', '\u0D06'],
                ['\u0D40', '\u0D08', '', '\u0D61'],
                ['\u0D42', '\u0D0A'],
                ['\u0D2C', '\u0D2D'],
                ['\u0D39', '\u0D19'],
                ['\u0D17', '\u0D18'],
                ['\u0D26', '\u0D27'],
                ['\u0D1C', '\u0D1D'],
                ['\u0D21', '\u0D22'],
                ['', '\u0D1E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0D4B', '\u0D13'],
                ['\u0D47', '\u0D0F'],
                ['\u0D4D', '\u0D05', '', '\u0D0C'],
                ['\u0D3F', '\u0D07'],
                ['\u0D41', '\u0D09'],
                ['\u0D2A', '\u0D2B'],
                ['\u0D30', '\u0D31'],
                ['\u0D15', '\u0D16'],
                ['\u0D24', '\u0D25'],
                ['\u0D1A', '\u0D1B'],
                ['\u0D1F', '\u0D20'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0D46', '\u0D0F'],
                ['\u0D02'],
                ['\u0D2E', '\u0D23'],
                ['\u0D28'],
                ['\u0D35', '\u0D34'],
                ['\u0D32', '\u0D33'],
                ['\u0D38', '\u0D36'],
                [',', '\u0D37'],
                ['.'],
                ['\u0D2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ml']
    },
    'Misc. Symbols': {
        'name': 'Misc. Symbols',
        'keys': [
            [
                ['\u2605', '\u2606', '\u260e', '\u260f'],
                ['\u2648', '\u2673', '\u2659', '\u2630'],
                ['\u2649', '\u2674', '\u2658', '\u2631'],
                ['\u264a', '\u2675', '\u2657', '\u2632'],
                ['\u264b', '\u2676', '\u2656', '\u2633'],
                ['\u264c', '\u2677', '\u2655', '\u2634'],
                ['\u264d', '\u2678', '\u2654', '\u2635'],
                ['\u264e', '\u2679', '\u265f', '\u2636'],
                ['\u264f', '\u267a', '\u265e', '\u2637'],
                ['\u2650', '\u267b', '\u265d', '\u2686'],
                ['\u2651', '\u267c', '\u265c', '\u2687'],
                ['\u2652', '\u267d', '\u265b', '\u2688'],
                ['\u2653', '\u2672', '\u265a', '\u2689'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                ['\u263f', '\u2680', '\u268a', '\u26a2'],
                ['\u2640', '\u2681', '\u268b', '\u26a3'],
                ['\u2641', '\u2682', '\u268c', '\u26a4'],
                ['\u2642', '\u2683', '\u268d', '\u26a5'],
                ['\u2643', '\u2684', '\u268e', '\u26a6'],
                ['\u2644', '\u2685', '\u268f', '\u26a7'],
                ['\u2645', '\u2620', '\u26ff', '\u26a8'],
                ['\u2646', '\u2622', '\u2692', '\u26a9'],
                ['\u2647', '\u2623', '\u2693', '\u26b2'],
                ['\u2669', '\u266d', '\u2694', '\u26ac'],
                ['\u266a', '\u266e', '\u2695', '\u26ad'],
                ['\u266b', '\u266f', '\u2696', '\u26ae'],
                ['\u266c', '\u2607', '\u2697', '\u26af'],
                ['\u26f9', '\u2608', '\u2698', '\u26b0'],
                ['\u267f', '\u262e', '\u2638', '\u2609']
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u261e', '\u261c', '\u261d', '\u261f'],
                ['\u261b', '\u261a', '\u2618', '\u2619'],
                ['\u2602', '\u2614', '\u26f1', '\u26d9'],
                ['\u2615', '\u2668', '\u26fe', '\u26d8'],
                ['\u263a', '\u2639', '\u263b', '\u26dc'],
                ['\u2617', '\u2616', '\u26ca', '\u26c9'],
                ['\u2660', '\u2663', '\u2665', '\u2666'],
                ['\u2664', '\u2667', '\u2661', '\u2662'],
                ['\u26c2', '\u26c0', '\u26c3', '\u26c1'],
                ['\u2624', '\u2625', '\u269a', '\u26b1'],
                ['\u2610', '\u2611', '\u2612', '\u2613'],
                ['\u2628', '\u2626', '\u2627', '\u2629'],
                ['\u262a', '\u262b', '\u262c', '\u262d'],
                ['\u26fa', '\u26fb', '\u26fc', '\u26fd']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u262f', '\u2670', '\u2671', '\u267e'],
                ['\u263c', '\u2699', '\u263d', '\u263e'],
                ['\u26c4', '\u2603', '\u26c7', '\u26c6'],
                ['\u26a0', '\u26a1', '\u2621', '\u26d4'],
                ['\u26e4', '\u26e5', '\u26e6', '\u26e7'],
                ['\u260a', '\u260b', '\u260c', '\u260d'],
                ['\u269c', '\u269b', '\u269d', '\u2604'],
                ['\u26b3', '\u26b4', '\u26b5', '\u26b6'],
                ['\u26b7', '\u26bf', '\u26b8', '\u26f8'],
                ['\u26b9', '\u26ba', '\u26bb', '\u26bc'],
                ['\u26bd', '\u26be', '\u269f', '\u269e'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u2600', '\u2601', '\u26c5', '\u26c8'],
                ['\u2691', '\u2690', '\u26ab', '\u26aa'],
                ['\u26cb', '\u26cc', '\u26cd', '\u26ce'],
                ['\u26cf', '\u26d0', '\u26d1', '\u26d2'],
                ['\u26d3', '\u26d5', '\u26d6', '\u26d7'],
                ['\u26da', '\u26db', '\u26dd', '\u26de'],
                ['\u26df', '\u26e0', '\u26e1', '\u26e2'],
                ['\u26e3', '\u26e8', '\u26e9', '\u26ea'],
                ['\u26eb', '\u26ec', '\u26ed', '\u26ee'],
                ['\u26ef', '\u26f0', '\u26f2', '\u26f3'],
                ['\u26f4', '\u26f5', '\u26f6', '\u26f7'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ]
    },
    '\u041c\u043e\u043d\u0433\u043e\u043b': {
        'name': 'Mongolian Cyrillic',
        'keys': [
            [
                ['=', '+'],
                ['\u2116', '1'],
                ['-', '2'],
                ['"', '3'],
                ['\u20AE', '4'],
                [':', '5'],
                ['.', '6'],
                ['_', '7'],
                [',', '8'],
                ['%', '9'],
                ['?', '0'],
                ['\u0435', '\u0415'],
                ['\u0449', '\u0429'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0444', '\u0424'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u0436', '\u0416'],
                ['\u044d', '\u042d'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04af', '\u04AE'],
                ['\u0437', '\u0417'],
                ['\u043A', '\u041a'],
                ['\u044A', '\u042A'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0439', '\u0419'],
                ['\u044B', '\u042B'],
                ['\u0431', '\u0411'],
                ['\u04e9', '\u04e8'],
                ['\u0430', '\u0410'],
                ['\u0445', '\u0425'],
                ['\u0440', '\u0420'],
                ['\u043e', '\u041e'],
                ['\u043B', '\u041b'],
                ['\u0434', '\u0414'],
                ['\u043f', '\u041f'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0451', '\u0401'],
                ['\u0441', '\u0421'],
                ['\u043c', '\u041c'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044c', '\u042c'],
                ['\u0432', '\u0412'],
                ['\u044e', '\u042e'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['mn']
    },
    '\u092e\u0930\u093e\u0920\u0940': {
        'name': 'Marathi',
        'keys': [
            [
                ['', '', '`', '~'],
                ['\u0967', '\u090D', '1', '!'],
                ['\u0968', '\u0945', '2', '@'],
                ['\u0969', '\u094D\u0930', '3', '#'],
                ['\u096A', '\u0930\u094D', '4', '$'],
                ['\u096B', '\u091C\u094D\u091E', '5', '%'],
                ['\u096C', '\u0924\u094D\u0930', '6', '^'],
                ['\u096D', '\u0915\u094D\u0937', '7', '&'],
                ['\u096E', '\u0936\u094D\u0930', '8', '*'],
                ['\u096F', '(', '9', '('],
                ['\u0966', ')', '0', ')'],
                ['-', '\u0903', '-', '_'],
                ['\u0943', '\u090B', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D'],
                ['\u0921', '\u0922', '[', '{'],
                ['\u093C', '\u091E', ']', '}'],
                ['\u0949', '\u0911', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', ';', ':'],
                ['\u091F', '\u0920', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923'],
                ['\u0928'],
                ['\u0935'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', ',', '<'],
                ['.', '\u0964', '.', '>'],
                ['\u092F', '\u095F', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mr']
    },
    '\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c': {
        'name': 'Burmese',
        'keys': [
            [
                ['\u1039`', '~'],
                ['\u1041', '\u100D'],
                ['\u1042', '\u100E'],
                ['\u1043', '\u100B'],
                ['\u1044', '\u1000\u103B\u1015\u103A'],
                ['\u1045', '%'],
                ['\u1046', '/'],
                ['\u1047', '\u101B'],
                ['\u1048', '\u1002'],
                ['\u1049', '('],
                ['\u1040', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1006', '\u1029'],
                ['\u1010', '\u1040'],
                ['\u1014', '\u103F'],
                ['\u1019', '\u1023'],
                ['\u1021', '\u1024'],
                ['\u1015', '\u104C'],
                ['\u1000', '\u1009'],
                ['\u1004', '\u104D'],
                ['\u101E', '\u1025'],
                ['\u1005', '\u100F'],
                ['\u101F', '\u1027'],
                ['\u2018', '\u2019'],
                ['\u104F', '\u100B\u1039\u100C']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u200B\u1031', '\u1017'],
                ['\u200B\u103B', '\u200B\u103E'],
                ['\u200B\u102D', '\u200B\u102E'],
                ['\u200B\u103A', '\u1004\u103A\u1039\u200B'],
                ['\u200B\u102B', '\u200B\u103D'],
                ['\u200B\u1037', '\u200B\u1036'],
                ['\u200B\u103C', '\u200B\u1032'],
                ['\u200B\u102F', '\u200B\u102F'],
                ['\u200B\u1030', '\u200B\u1030'],
                ['\u200B\u1038', '\u200B\u102B\u103A'],
                ['\u1012', '\u1013'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u1016', '\u1007'],
                ['\u1011', '\u100C'],
                ['\u1001', '\u1003'],
                ['\u101C', '\u1020'],
                ['\u1018', '\u1026'],
                ['\u100A', '\u1008'],
                ['\u200B\u102C', '\u102A'],
                ['\u101A', '\u101B'],
                ['.', '\u101B'],
                ['\u104B', '\u104A'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['my']
    },
    'Nederlands': {
        'name': 'Dutch',
        'keys': [
            [
                ['@', '\u00a7', '\u00ac'],
                ['1', '!', '\u00b9'],
                ['2', '"', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00bc'],
                ['5', '%', '\u00bd'],
                ['6', '&', '\u00be'],
                ['7', '_', '\u00a3'],
                ['8', '(', '{'],
                ['9', ')', '}'],
                ['0', '\''],
                ['/', '?', '\\'],
                ['\u00b0', '~', '\u00b8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R', '\u00b6'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00a8', '^'],
                ['*', '|'],
                ['<', '>']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u00df'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['+', '\u00b1'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [']', '[', '\u00a6'],
                ['z', 'Z', '\u00ab'],
                ['x', 'X', '\u00bb'],
                ['c', 'C', '\u00a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00b5'],
                [',', ';'],
                ['.', ':', '\u00b7'],
                ['-', '='],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['nl']
    },
    'Norsk': {
        'name': 'Norwegian',
        'keys': [
            [
                ['|', '\u00a7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\\', '`', '\u00b4'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f8', '\u00d8'],
                ['\u00e6', '\u00c6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['no', 'nb', 'nn']
    },
    '\u067e\u069a\u062a\u0648': {
        'name': 'Pashto',
        'keys': [
            [
                ['\u200d', '\u00f7', '`'],
                ['\u06f1', '!', '`'],
                ['\u06f2', '\u066c', '@'],
                ['\u06f3', '\u066b', '\u066b'],
                ['\u06f4', '\u00a4', '\u00a3'],
                ['\u06f5', '\u066a', '%'],
                ['\u06f6', '\u00d7', '^'],
                ['\u06f7', '\u00ab', '&'],
                ['\u06f8', '\u00bb', '*'],
                ['\u06f9', '(', '\ufdf2'],
                ['\u06f0', ')', '\ufefb'],
                ['-', '\u0640', '_'],
                ['=', '+', '\ufe87', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u0652', '\u06d5'],
                ['\u0635', '\u064c', '\u0653'],
                ['\u062b', '\u064d', '\u20ac'],
                ['\u0642', '\u064b', '\ufef7'],
                ['\u0641', '\u064f', '\ufef5'],
                ['\u063a', '\u0650', '\''],
                ['\u0639', '\u064e', '\ufe84'],
                ['\u0647', '\u0651', '\u0670'],
                ['\u062e', '\u0681', '\''],
                ['\u062d', '\u0685', '"'],
                ['\u062c', ']', '}'],
                ['\u0686', '[', '{'],
                ['\\', '\u066d', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u069a', '\ufbb0'],
                ['\u0633', '\u06cd', '\u06d2'],
                ['\u06cc', '\u064a', '\u06d2'],
                ['\u0628', '\u067e', '\u06ba'],
                ['\u0644', '\u0623', '\u06b7'],
                ['\u0627', '\u0622', '\u0671'],
                ['\u062a', '\u067c', '\u0679'],
                ['\u0646', '\u06bc', '<'],
                ['\u0645', '\u0629', '>'],
                ['\u06a9', ':', '\u0643'],
                ['\u06af', '\u061b', '\u06ab'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '\u0626', '?'],
                ['\u0637', '\u06d0', ';'],
                ['\u0632', '\u0698', '\u0655'],
                ['\u0631', '\u0621', '\u0654'],
                ['\u0630', '\u200c', '\u0625'],
                ['\u062f', '\u0689', '\u0688'],
                ['\u0693', '\u0624', '\u0691'],
                ['\u0648', '\u060c', ','],
                ['\u0696', '.', '\u06c7'],
                ['/', '\u061f', '\u06c9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, '\u064d']
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ps']
    },
    '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40': {
        'name': 'Punjabi (Gurmukhi)',
        'keys': [
            [
                [''],
                ['1', '\u0A4D\u0A35', '\u0A67', '\u0A67'],
                ['2', '\u0A4D\u0A2F', '\u0A68', '\u0A68'],
                ['3', '\u0A4D\u0A30', '\u0A69', '\u0A69'],
                ['4', '\u0A71', '\u0A6A', '\u0A6A'],
                ['5', '', '\u0A6B', '\u0A6B'],
                ['6', '', '\u0A6C', '\u0A6C'],
                ['7', '', '\u0A6D', '\u0A6D'],
                ['8', '', '\u0A6E', '\u0A6E'],
                ['9', '(', '\u0A6F', '\u0A6F'],
                ['0', ')', '\u0A66', '\u0A66'],
                ['-'],
                [''],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0A4C', '\u0A14'],
                ['\u0A48', '\u0A10'],
                ['\u0A3E', '\u0A06'],
                ['\u0A40', '\u0A08'],
                ['\u0A42', '\u0A0A'],
                ['\u0A2C', '\u0A2D'],
                ['\u0A39', '\u0A19'],
                ['\u0A17', '\u0A18', '\u0A5A', '\u0A5A'],
                ['\u0A26', '\u0A27'],
                ['\u0A1C', '\u0A1D', '\u0A5B', '\u0A5B'],
                ['\u0A21', '\u0A22', '\u0A5C', '\u0A5C'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0A4B', '\u0A13'],
                ['\u0A47', '\u0A0F'],
                ['\u0A4D', '\u0A05'],
                ['\u0A3F', '\u0A07'],
                ['\u0A41', '\u0A09'],
                ['\u0A2A', '\u0A2B', '\u0A5E', '\u0A5E'],
                ['\u0A30'],
                ['\u0A15', '\u0A16', '\u0A59', '\u0A59'],
                ['\u0A24', '\u0A25'],
                ['\u0A1A', '\u0A1B'],
                ['\u0A1F', '\u0A20'],
                ['\u0A3C', '\u0A1E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0A02', '\u0A02'],
                ['\u0A2E', '\u0A23'],
                ['\u0A28'],
                ['\u0A35', '\u0A72', '\u0A73', '\u0A73'],
                ['\u0A32', '\u0A33'],
                ['\u0A38', '\u0A36'],
                [','],
                ['.', '|', '\u0965', '\u0965'],
                ['\u0A2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pa']
    },
    '\u62fc\u97f3 (Pinyin)': {
        'name': 'Pinyin',
        'keys': [
            [
                ['`', '~', '\u4e93', '\u301C'],
                ['1', '!', '\uFF62'],
                ['2', '@', '\uFF63'],
                ['3', '#', '\u301D'],
                ['4', '$', '\u301E'],
                ['5', '%', '\u301F'],
                ['6', '^', '\u3008'],
                ['7', '&', '\u3009'],
                ['8', '*', '\u302F'],
                ['9', '(', '\u300A'],
                ['0', ')', '\u300B'],
                ['-', '_', '\u300E'],
                ['=', '+', '\u300F'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u0101', '\u0100'],
                ['w', 'W', '\u00E1', '\u00C1'],
                ['e', 'E', '\u01CE', '\u01CD'],
                ['r', 'R', '\u00E0', '\u00C0'],
                ['t', 'T', '\u0113', '\u0112'],
                ['y', 'Y', '\u00E9', '\u00C9'],
                ['u', 'U', '\u011B', '\u011A'],
                ['i', 'I', '\u00E8', '\u00C8'],
                ['o', 'O', '\u012B', '\u012A'],
                ['p', 'P', '\u00ED', '\u00CD'],
                ['[', '{', '\u01D0', '\u01CF'],
                [']', '}', '\u00EC', '\u00CC'],
                ['\\', '|', '\u3020']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u014D', '\u014C'],
                ['s', 'S', '\u00F3', '\u00D3'],
                ['d', 'D', '\u01D2', '\u01D1'],
                ['f', 'F', '\u00F2', '\u00D2'],
                ['g', 'G', '\u00fc', '\u00dc'],
                ['h', 'H', '\u016B', '\u016A'],
                ['j', 'J', '\u00FA', '\u00DA'],
                ['k', 'K', '\u01D4', '\u01D3'],
                ['l', 'L', '\u00F9', '\u00D9'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u01D6', '\u01D5'],
                ['x', 'X', '\u01D8', '\u01D7'],
                ['c', 'C', '\u01DA', '\u01D9'],
                ['v', 'V', '\u01DC', '\u01DB'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<', '\u3001'],
                ['.', '>', '\u3002'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['zh-LATN']
    },
    'Polski': {
        'name': 'Polish (214)',
        'keys': [
            [
                ['\u02DB', '\u00B7'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '\u00A4', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '&', '\u02DB'],
                ['7', '/', '`'],
                ['8', '(', '\u00B7'],
                ['9', ')', '\u00B4'],
                ['0', '=', '\u02DD'],
                ['+', '?', '\u00A8'],
                ['\'', '*', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '\u00A6'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U', '\u20AC'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u017C', '\u0144', '\u00F7'],
                ['\u015B', '\u0107', '\u00D7'],
                ['\u00F3', '\u017A']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u0142', '\u0141', '$'],
                ['\u0105', '\u0119', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    'Polski Programisty': {
        'name': 'Polish Programmers',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u0119', '\u0118'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u0105', '\u0104'],
                ['s', 'S', '\u015b', '\u015a'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u0142', '\u0141'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u017c', '\u017b'],
                ['x', 'X', '\u017a', '\u0179'],
                ['c', 'C', '\u0107', '\u0106'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N', '\u0144', '\u0143'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['pl']
    },
    'Portugu\u00eas Brasileiro': {
        'name': 'Portuguese (Brazil)',
        'keys': [
            [
                ['\'', '"'],
                ['1', '!', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a3'],
                ['5', '%', '\u00a2'],
                ['6', '\u00a8', '\u00ac'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+', '\u00a7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '/'],
                ['w', 'W', '?'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00b4', '`'],
                ['[', '{', '\u00aa'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e7', '\u00c7'],
                ['~', '^'],
                [']', '}', '\u00ba'],
                ['/', '?']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C', '\u20a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                [':', ':'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pt-BR']
    },
    'Portugu\u00eas': {
        'name': 'Portuguese',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '$', '\u00a7'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\'', '?'],
                ['\u00ab', '\u00bb'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['+', '*', '\u00a8'],
                ['\u00b4', '`'],
                ['~', '^']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e7', '\u00c7'],
                ['\u00ba', '\u00aa'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pt']
    },
    'Rom\u00e2n\u0103': {
        'name': 'Romanian',
        'keys': [
            [
                ['\u201E', '\u201D', '`', '~'],
                ['1', '!', '~'],
                ['2', '@', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '^', '\u02DB'],
                ['7', '&', '`'],
                ['8', '*', '\u02D9'],
                ['9', '(', '\u00B4'],
                ['0', ')', '\u02DD'],
                ['-', '_', '\u00A8'],
                ['=', '+', '\u00B8', '\u00B1'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P', '\u00A7'],
                ['\u0103', '\u0102', '[', '{'],
                ['\u00EE', '\u00CE', ']', '}'],
                ['\u00E2', '\u00C2', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u00df'],
                ['d', 'D', '\u00f0', '\u00D0'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u0142', '\u0141'],
                ['\u0219', '\u0218', ';', ':'],
                ['\u021B', '\u021A', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C', '\u00A9'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';', '<', '\u00AB'],
                ['.', ':', '>', '\u00BB'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ro']
    },
    '\u0420\u0443\u0441\u0441\u043a\u0438\u0439': {
        'name': 'Russian',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['/', '|'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ru']
    },
    'Schweizerdeutsch': {
        'name': 'Swiss German',
        'keys': [
            [
                ['\u00A7', '\u00B0'],
                ['1', '+', '\u00A6'],
                ['2', '"', '@'],
                ['3', '*', '#'],
                ['4', '\u00E7', '\u00B0'],
                ['5', '%', '\u00A7'],
                ['6', '&', '\u00AC'],
                ['7', '/', '|'],
                ['8', '(', '\u00A2'],
                ['9', ')'],
                ['0', '='],
                ['\'', '?', '\u00B4'],
                ['^', '`', '~'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FC', '\u00E8', '['],
                ['\u00A8', '!', ']'],
                ['$', '\u00A3', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00F6', '\u00E9'],
                ['\u00E4', '\u00E0', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['de-CH']
    },
    'Shqip': {
        'name': 'Albanian',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '^', '\u02DB'],
                ['7', '&', '`'],
                ['8', '*', '\u02D9'],
                ['9', '(', '\u00B4'],
                ['0', ')', '\u02DD'],
                ['-', '_', '\u00A8'],
                ['=', '+', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E7', '\u00C7', '\u00F7'],
                ['[', '{', '\u00DF'],
                [']', '}', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u00EB', '\u00CB', '$'],
                ['@', '\'', '\u00D7'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sq']
    },
    'Sloven\u010dina': {
        'name': 'Slovak',
        'keys': [
            [
                [';', '\u00b0'],
                ['+', '1', '~'],
                ['\u013E', '2', '\u02C7'],
                ['\u0161', '3', '^'],
                ['\u010D', '4', '\u02D8'],
                ['\u0165', '5', '\u00B0'],
                ['\u017E', '6', '\u02DB'],
                ['\u00FD', '7', '`'],
                ['\u00E1', '8', '\u02D9'],
                ['\u00ED', '9', '\u00B4'],
                ['\u00E9', '0', '\u02DD'],
                ['=', '%', '\u00A8'],
                ['\u00B4', '\u02c7', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P', '\''],
                ['\u00FA', '/', '\u00F7'],
                ['\u00E4', '(', '\u00D7'],
                ['\u0148', ')', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u00F4', '"', '$'],
                ['\u00A7', '!', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['&', '*', '<'],
                ['y', 'Y', '>'],
                ['x', 'X', '#'],
                ['c', 'C', '&'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M'],
                [',', '?', '<'],
                ['.', ':', '>'],
                ['-', '_', '*'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sk']
    },
    '\u0441\u0440\u043f\u0441\u043a\u0438': {
        'name': 'Serbian Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['+', '*'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0459', '\u0409'],
                ['\u045a', '\u040a'],
                ['\u0435', '\u0415', '\u20ac'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u0437', '\u0417'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043e', '\u041e'],
                ['\u043f', '\u041f'],
                ['\u0448', '\u0428'],
                ['\u0452', '\u0402'],
                ['\u0436', '\u0416']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424'],
                ['\u0433', '\u0413'],
                ['\u0445', '\u0425'],
                ['\u0458', '\u0408'],
                ['\u043a', '\u041a'],
                ['\u043b', '\u041b'],
                ['\u0447', '\u0427'],
                ['\u045b', '\u040b'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['\u0455', '\u0405'],
                ['\u045f', '\u040f'],
                ['\u0446', '\u0426'],
                ['\u0432', '\u0412'],
                ['\u0431', '\u0411'],
                ['\u043d', '\u041d'],
                ['\u043c', '\u041c'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_', '\u00a9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sr-CYRL']
    },
    'Suomi': {
        'name': 'Finnish',
        'keys': [
            [
                ['\u00a7', '\u00BD'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00A3'],
                ['4', '\u00A4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?', '\\'],
                ['\u00B4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u00E2', '\u00C2'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T', '\u0167', '\u0166'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I', '\u00ef', '\u00CF'],
                ['o', 'O', '\u00f5', '\u00D5'],
                ['p', 'P'],
                ['\u00E5', '\u00C5'],
                ['\u00A8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E1', '\u00C1'],
                ['s', 'S', '\u0161', '\u0160'],
                ['d', 'D', '\u0111', '\u0110'],
                ['f', 'F', '\u01e5', '\u01E4'],
                ['g', 'G', '\u01E7', '\u01E6'],
                ['h', 'H', '\u021F', '\u021e'],
                ['j', 'J'],
                ['k', 'K', '\u01e9', '\u01E8'],
                ['l', 'L'],
                ['\u00F6', '\u00D6', '\u00F8', '\u00D8'],
                ['\u00E4', '\u00C4', '\u00E6', '\u00C6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z', '\u017E', '\u017D'],
                ['x', 'X'],
                ['c', 'C', '\u010d', '\u010C'],
                ['v', 'V', '\u01EF', '\u01EE'],
                ['b', 'B', '\u0292', '\u01B7'],
                ['n', 'N', '\u014B', '\u014A'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fi']
    },
    'Svenska': {
        'name': 'Swedish',
        'keys': [
            [
                ['\u00a7', '\u00bd'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%', '\u20ac'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?', '\\'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f6', '\u00d6'],
                ['\u00e4', '\u00c4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sv']
    },
    'Swiss Fran\u00e7ais': {
        'name': 'Swiss French',
        'keys': [
            [
                ['\u00A7', '\u00B0'],
                ['1', '+', '\u00A6'],
                ['2', '"', '@'],
                ['3', '*', '#'],
                ['4', '\u00E7', '\u00B0'],
                ['5', '%', '\u00A7'],
                ['6', '&', '\u00AC'],
                ['7', '/', '|'],
                ['8', '(', '\u00A2'],
                ['9', ')'],
                ['0', '='],
                ['\'', '?', '\u00B4'],
                ['^', '`', '~'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E8', '\u00FC', '['],
                ['\u00A8', '!', ']'],
                ['$', '\u00A3', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E9', '\u00F6'],
                ['\u00E0', '\u00E4', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr-CH']
    },
    '\u0723\u0718\u072a\u071d\u071d\u0710': {
        'name': 'Syriac',
        'keys': [
            [
                ['\u070f', '\u032e', '\u0651', '\u0651'],
                ['1', '!', '\u0701', '\u0701'],
                ['2', '\u030a', '\u0702', '\u0702'],
                ['3', '\u0325', '\u0703', '\u0703'],
                ['4', '\u0749', '\u0704', '\u0704'],
                ['5', '\u2670', '\u0705', '\u0705'],
                ['6', '\u2671', '\u0708', '\u0708'],
                ['7', '\u070a', '\u0709', '\u0709'],
                ['8', '\u00bb', '\u070B', '\u070B'],
                ['9', ')', '\u070C', '\u070C'],
                ['0', '(', '\u070D', '\u070D'],
                ['-', '\u00ab', '\u250C', '\u250C'],
                ['=', '+', '\u2510', '\u2510'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0714', '\u0730', '\u064E', '\u064E'],
                ['\u0728', '\u0733', '\u064B', '\u064B'],
                ['\u0716', '\u0736', '\u064F', '\u064F'],
                ['\u0729', '\u073A', '\u064C', '\u064C'],
                ['\u0726', '\u073D', '\u0653', '\u0653'],
                ['\u071c', '\u0740', '\u0654', '\u0654'],
                ['\u0725', '\u0741', '\u0747', '\u0747'],
                ['\u0717', '\u0308', '\u0743', '\u0743'],
                ['\u071e', '\u0304', '\u0745', '\u0745'],
                ['\u071a', '\u0307', '\u032D', '\u032D'],
                ['\u0713', '\u0303'],
                ['\u0715', '\u074A'],
                ['\u0706', ':']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u072b', '\u0731', '\u0650', '\u0650'],
                ['\u0723', '\u0734', '\u064d', '\u064d'],
                ['\u071d', '\u0737'],
                ['\u0712', '\u073b', '\u0621', '\u0621'],
                ['\u0720', '\u073e', '\u0655', '\u0655'],
                ['\u0710', '\u0711', '\u0670', '\u0670'],
                ['\u072c', '\u0640', '\u0748', '\u0748'],
                ['\u0722', '\u0324', '\u0744', '\u0744'],
                ['\u0721', '\u0331', '\u0746', '\u0746'],
                ['\u071f', '\u0323'],
                ['\u071b', '\u0330'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [']', '\u0732'],
                ['[', '\u0735', '\u0652', '\u0652'],
                ['\u0724', '\u0738'],
                ['\u072a', '\u073c', '\u200D'],
                ['\u0727', '\u073f', '\u200C'],
                ['\u0700', '\u0739', '\u200E'],
                ['.', '\u0742', '\u200F'],
                ['\u0718', '\u060c'],
                ['\u0719', '\u061b'],
                ['\u0707', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['syc']
    },
    '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd': {
        'name': 'Tamil',
        'keys': [
            [
                ['\u0BCA', '\u0B92'],
                ['1', '', '\u0BE7'],
                ['2', '', '\u0BE8'],
                ['3', '', '\u0BE9'],
                ['4', '', '\u0BEA'],
                ['5', '', '\u0BEB'],
                ['6', '\u0BA4\u0BCD\u0BB0', '\u0BEC'],
                ['7', '\u0B95\u0BCD\u0BB7', '\u0BED'],
                ['8', '\u0BB7\u0BCD\u0BB0', '\u0BEE'],
                ['9', '', '\u0BEF'],
                ['0', '', '\u0BF0'],
                ['-', '\u0B83', '\u0BF1'],
                ['', '', '\u0BF2'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0BCC', '\u0B94'],
                ['\u0BC8', '\u0B90'],
                ['\u0BBE', '\u0B86'],
                ['\u0BC0', '\u0B88'],
                ['\u0BC2', '\u0B8A'],
                ['\u0BAA', '\u0BAA'],
                ['\u0BB9', '\u0B99'],
                ['\u0B95', '\u0B95'],
                ['\u0BA4', '\u0BA4'],
                ['\u0B9C', '\u0B9A'],
                ['\u0B9F', '\u0B9F'],
                ['\u0B9E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0BCB', '\u0B93'],
                ['\u0BC7', '\u0B8F'],
                ['\u0BCD', '\u0B85'],
                ['\u0BBF', '\u0B87'],
                ['\u0BC1', '\u0B89'],
                ['\u0BAA', '\u0BAA'],
                ['\u0BB0', '\u0BB1'],
                ['\u0B95', '\u0B95'],
                ['\u0BA4', '\u0BA4'],
                ['\u0B9A', '\u0B9A'],
                ['\u0B9F', '\u0B9F'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0BC6', '\u0B8E'],
                [''],
                ['\u0BAE', '\u0BA3'],
                ['\u0BA8', '\u0BA9'],
                ['\u0BB5', '\u0BB4'],
                ['\u0BB2', '\u0BB3'],
                ['\u0BB8', '\u0BB7'],
                [',', '\u0BB7'],
                ['.', '\u0BB8\u0BCD\u0BB0\u0BC0'],
                ['\u0BAF', '\u0BAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ta']
    },
    '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41': {
        'name': 'Telugu',
        'keys': [
            [
                ['\u0C4A', '\u0C12'],
                ['1', '', '\u0C67'],
                ['2', '', '\u0C68'],
                ['3', '\u0C4D\u0C30', '\u0C69'],
                ['4', '', '\u0C6A'],
                ['5', '\u0C1C\u0C4D\u0C1E', '\u0C6B'],
                ['6', '\u0C24\u0C4D\u0C30', '\u0C6C'],
                ['7', '\u0C15\u0C4D\u0C37', '\u0C6D'],
                ['8', '\u0C36\u0C4D\u0C30', '\u0C6E'],
                ['9', '(', '\u0C6F'],
                ['0', ')', '\u0C66'],
                ['-', '\u0C03'],
                ['\u0C43', '\u0C0B', '\u0C44'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0C4C', '\u0C14'],
                ['\u0C48', '\u0C10', '\u0C56'],
                ['\u0C3E', '\u0C06'],
                ['\u0C40', '\u0C08', '', '\u0C61'],
                ['\u0C42', '\u0C0A'],
                ['\u0C2C'],
                ['\u0C39', '\u0C19'],
                ['\u0C17', '\u0C18'],
                ['\u0C26', '\u0C27'],
                ['\u0C1C', '\u0C1D'],
                ['\u0C21', '\u0C22'],
                ['', '\u0C1E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0C4B', '\u0C13'],
                ['\u0C47', '\u0C0F', '\u0C55'],
                ['\u0C4D', '\u0C05'],
                ['\u0C3F', '\u0C07', '', '\u0C0C'],
                ['\u0C41', '\u0C09'],
                ['\u0C2A', '\u0C2B'],
                ['\u0C30', '\u0C31'],
                ['\u0C15', '\u0C16'],
                ['\u0C24', '\u0C25'],
                ['\u0C1A', '\u0C1B'],
                ['\u0C1F', '\u0C25'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0C46', '\u0C0E'],
                ['\u0C02', '\u0C01'],
                ['\u0C2E', '\u0C23'],
                ['\u0C28', '\u0C28'],
                ['\u0C35'],
                ['\u0C32', '\u0C33'],
                ['\u0C38', '\u0C36'],
                [',', '\u0C37'],
                ['.'],
                ['\u0C2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['te']
    },
    'Ti\u1ebfng Vi\u1ec7t': {
        'name': 'Vietnamese',
        'keys': [
            [
                ['`', '~', '`', '~'],
                ['\u0103', '\u0102', '1', '!'],
                ['\u00E2', '\u00C2', '2', '@'],
                ['\u00EA', '\u00CA', '3', '#'],
                ['\u00F4', '\u00D4', '4', '$'],
                ['\u0300', '\u0300', '5', '%'],
                ['\u0309', '\u0309', '6', '^'],
                ['\u0303', '\u0303', '7', '&'],
                ['\u0301', '\u0301', '8', '*'],
                ['\u0323', '\u0323', '9', '('],
                ['\u0111', '\u0110', '0', ')'],
                ['-', '_', '-', '_'],
                ['\u20AB', '+', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', 'q', 'Q'],
                ['w', 'W', 'w', 'W'],
                ['e', 'E', 'e', 'E'],
                ['r', 'R', 'r', 'R'],
                ['t', 'T', 't', 'T'],
                ['y', 'Y', 'y', 'Y'],
                ['u', 'U', 'u', 'U'],
                ['i', 'I', 'i', 'I'],
                ['o', 'O', 'o', 'O'],
                ['p', 'P', 'p', 'P'],
                ['\u01B0', '\u01AF', '[', '{'],
                ['\u01A1', '\u01A0', ']', '}'],
                ['\\', '|', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', 'a', 'A'],
                ['s', 'S', 's', 'S'],
                ['d', 'D', 'd', 'D'],
                ['f', 'F', 'f', 'F'],
                ['g', 'G', 'g', 'G'],
                ['h', 'H', 'h', 'H'],
                ['j', 'J', 'j', 'J'],
                ['k', 'K', 'k', 'K'],
                ['l', 'L', 'l', 'L'],
                [';', ':', ';', ':'],
                ['\'', '"', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', 'z', 'Z'],
                ['x', 'X', 'x', 'X'],
                ['c', 'C', 'c', 'C'],
                ['v', 'V', 'v', 'V'],
                ['b', 'B', 'b', 'B'],
                ['n', 'N', 'n', 'N'],
                ['m', 'M', 'm', 'M'],
                [',', '<', ',', '<'],
                ['.', '>', '.', '>'],
                ['/', '?', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['vi']
    },
    '\u0e44\u0e17\u0e22 Kedmanee': {
        'name': 'Thai Kedmanee',
        'keys': [
            [
                ['_', '%'],
                ['\u0E45', '+'],
                ['/', '\u0E51'],
                ['-', '\u0E52'],
                ['\u0E20', '\u0E53'],
                ['\u0E16', '\u0E54'],
                ['\u0E38', '\u0E39'],
                ['\u0E36', '\u0E3F'],
                ['\u0E04', '\u0E55'],
                ['\u0E15', '\u0E56'],
                ['\u0E08', '\u0E57'],
                ['\u0E02', '\u0E58'],
                ['\u0E0A', '\u0E59'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0E46', '\u0E50'],
                ['\u0E44', '"'],
                ['\u0E33', '\u0E0E'],
                ['\u0E1E', '\u0E11'],
                ['\u0E30', '\u0E18'],
                ['\u0E31', '\u0E4D'],
                ['\u0E35', '\u0E4A'],
                ['\u0E23', '\u0E13'],
                ['\u0E19', '\u0E2F'],
                ['\u0E22', '\u0E0D'],
                ['\u0E1A', '\u0E10'],
                ['\u0E25', ','],
                ['\u0E03', '\u0E05']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0E1F', '\u0E24'],
                ['\u0E2B', '\u0E06'],
                ['\u0E01', '\u0E0F'],
                ['\u0E14', '\u0E42'],
                ['\u0E40', '\u0E0C'],
                ['\u0E49', '\u0E47'],
                ['\u0E48', '\u0E4B'],
                ['\u0E32', '\u0E29'],
                ['\u0E2A', '\u0E28'],
                ['\u0E27', '\u0E0B'],
                ['\u0E07', '.'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0E1C', '('],
                ['\u0E1B', ')'],
                ['\u0E41', '\u0E09'],
                ['\u0E2D', '\u0E2E'],
                ['\u0E34', '\u0E3A'],
                ['\u0E37', '\u0E4C'],
                ['\u0E17', '?'],
                ['\u0E21', '\u0E12'],
                ['\u0E43', '\u0E2C'],
                ['\u0E1D', '\u0E26'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['th']
    },
    '\u0e44\u0e17\u0e22 Pattachote': {
        'name': 'Thai Pattachote',
        'keys': [
            [
                ['_', '\u0E3F'],
                ['=', '+'],
                ['\u0E52', '"'],
                ['\u0E53', '/'],
                ['\u0E54', ','],
                ['\u0E55', '?'],
                ['\u0E39', '\u0E38'],
                ['\u0E57', '_'],
                ['\u0E58', '.'],
                ['\u0E59', '('],
                ['\u0E50', ')'],
                ['\u0E51', '-'],
                ['\u0E56', '%'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0E47', '\u0E4A'],
                ['\u0E15', '\u0E24'],
                ['\u0E22', '\u0E46'],
                ['\u0E2D', '\u0E0D'],
                ['\u0E23', '\u0E29'],
                ['\u0E48', '\u0E36'],
                ['\u0E14', '\u0E1D'],
                ['\u0E21', '\u0E0B'],
                ['\u0E27', '\u0E16'],
                ['\u0E41', '\u0E12'],
                ['\u0E43', '\u0E2F'],
                ['\u0E0C', '\u0E26'],
                ['\uF8C7', '\u0E4D']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0E49', '\u0E4B'],
                ['\u0E17', '\u0E18'],
                ['\u0E07', '\u0E33'],
                ['\u0E01', '\u0E13'],
                ['\u0E31', '\u0E4C'],
                ['\u0E35', '\u0E37'],
                ['\u0E32', '\u0E1C'],
                ['\u0E19', '\u0E0A'],
                ['\u0E40', '\u0E42'],
                ['\u0E44', '\u0E06'],
                ['\u0E02', '\u0E11'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0E1A', '\u0E0E'],
                ['\u0E1B', '\u0E0F'],
                ['\u0E25', '\u0E10'],
                ['\u0E2B', '\u0E20'],
                ['\u0E34', '\u0E31'],
                ['\u0E04', '\u0E28'],
                ['\u0E2A', '\u0E2E'],
                ['\u0E30', '\u0E1F'],
                ['\u0E08', '\u0E09'],
                ['\u0E1E', '\u0E2C'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u0422\u0430\u0442\u0430\u0440\u0447\u0430': {
        'name': 'Tatar',
        'keys': [
            [
                ['\u04BB', '\u04BA', '\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '\u2116', '#'],
                ['4', ';', '$'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?', '['],
                ['8', '*', ']'],
                ['9', '(', '{'],
                ['0', ')', '}'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u04E9', '\u04E8', '\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04D9', '\u04D8', '\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u04AF', '\u04AE', '\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u04A3', '\u04A2', '\u0436', '\u0416'],
                ['\u044D', '\u042D', '\''],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0491', '\u0490'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u0497', '\u0496', '\u044C', '\u042C'],
                ['\u0431', '\u0411', '<'],
                ['\u044E', '\u042E', '>'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['tt']
    },
    'T\u00fcrk\u00e7e F': {
        'name': 'Turkish F',
        'keys': [
            [
                ['+', '*', '\u00ac'],
                ['1', '!', '\u00b9', '\u00a1'],
                ['2', '"', '\u00b2'],
                ['3', '^', '#', '\u00b3'],
                ['4', '$', '\u00bc', '\u00a4'],
                ['5', '%', '\u00bd'],
                ['6', '&', '\u00be'],
                ['7', '\'', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['/', '?', '\\', '\u00bf'],
                ['-', '_', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['f', 'F', '@'],
                ['g', 'G'],
                ['\u011f', '\u011e'],
                ['\u0131', 'I', '\u00b6', '\u00ae'],
                ['o', 'O'],
                ['d', 'D', '\u00a5'],
                ['r', 'R'],
                ['n', 'N'],
                ['h', 'H', '\u00f8', '\u00d8'],
                ['p', 'P', '\u00a3'],
                ['q', 'Q', '\u00a8'],
                ['w', 'W', '~'],
                ['x', 'X', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['u', 'U', '\u00e6', '\u00c6'],
                ['i', '\u0130', '\u00df', '\u00a7'],
                ['e', 'E', '\u20ac'],
                ['a', 'A', ' ', '\u00aa'],
                ['\u00fc', '\u00dc'],
                ['t', 'T'],
                ['k', 'K'],
                ['m', 'M'],
                ['l', 'L'],
                ['y', 'Y', '\u00b4'],
                ['\u015f', '\u015e'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|', '\u00a6'],
                ['j', 'J', '\u00ab', '<'],
                ['\u00f6', '\u00d6', '\u00bb', '>'],
                ['v', 'V', '\u00a2', '\u00a9'],
                ['c', 'C'],
                ['\u00e7', '\u00c7'],
                ['z', 'Z'],
                ['s', 'S', '\u00b5', '\u00ba'],
                ['b', 'B', '\u00d7'],
                ['.', ':', '\u00f7'],
                [',', ';', '-'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    'T\u00fcrk\u00e7e Q': {
        'name': 'Turkish Q',
        'keys': [
            [
                ['"', '\u00e9', '<'],
                ['1', '!', '>'],
                ['2', '\'', '\u00a3'],
                ['3', '^', '#'],
                ['4', '+', '$'],
                ['5', '%', '\u00bd'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['*', '?', '\\'],
                ['-', '_', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['\u0131', 'I', 'i', '\u0130'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u011f', '\u011e', '\u00a8'],
                ['\u00fc', '\u00dc', '~'],
                [',', ';', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e6', '\u00c6'],
                ['s', 'S', '\u00df'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u015f', '\u015e', '\u00b4'],
                ['i', '\u0130'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                ['\u00f6', '\u00d6'],
                ['\u00e7', '\u00c7'],
                ['.', ':'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['tr']
    },
    '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430': {
        'name': 'Ukrainian',
        'keys': [
            [
                ['\u00b4', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u0457', '\u0407'],
                ['\u0491', '\u0490']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u0456', '\u0406'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u0454', '\u0404'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['uk']
    },
    'United Kingdom': {
        'name': 'United Kingdom',
        'keys': [
            [
                ['`', '\u00ac', '\u00a6'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00a3'],
                ['4', '$', '\u20ac'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00e9', '\u00c9'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U', '\u00fa', '\u00da'],
                ['i', 'I', '\u00ed', '\u00cd'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['#', '~']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e1', '\u00c1'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['en-GB']
    },
    '\u0627\u0631\u062f\u0648': {
        'name': 'Urdu',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '\u066A'],
                ['6', '^'],
                ['7', '\u06D6'],
                ['8', '\u066D'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0637', '\u0638'],
                ['\u0635', '\u0636'],
                ['\u06be', '\u0630'],
                ['\u062f', '\u0688'],
                ['\u0679', '\u062B'],
                ['\u067e', '\u0651'],
                ['\u062a', '\u06C3'],
                ['\u0628', '\u0640'],
                ['\u062c', '\u0686'],
                ['\u062d', '\u062E'],
                [']', '}'],
                ['[', '{'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0645', '\u0698'],
                ['\u0648', '\u0632'],
                ['\u0631', '\u0691'],
                ['\u0646', '\u06BA'],
                ['\u0644', '\u06C2'],
                ['\u06c1', '\u0621'],
                ['\u0627', '\u0622'],
                ['\u06A9', '\u06AF'],
                ['\u06CC', '\u064A'],
                ['\u061b', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0642', '\u200D'],
                ['\u0641', '\u200C'],
                ['\u06D2', '\u06D3'],
                ['\u0633', '\u200E'],
                ['\u0634', '\u0624'],
                ['\u063a', '\u0626'],
                ['\u0639', '\u200F'],
                ['\u060C', '>'],
                ['\u06D4', '<'],
                ['/', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ur']
    },
    '\u0627\u0631\u062f\u0648 Phonetic': {
        'name': 'Urdu Phonetic',
        'keys': [
            [
                ['\u064D', '\u064B', '~'],
                ['\u06F1', '1', '!'],
                ['\u06F2', '2', '@'],
                ['\u06F3', '3', '#'],
                ['\u06F4', '4', '$'],
                ['\u06F5', '5', '\u066A'],
                ['\u06F6', '6', '^'],
                ['\u06F7', '7', '&'],
                ['\u06F8', '8', '*'],
                ['\u06F9', '9', '('],
                ['\u06F0', '0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0642', '\u0652'],
                ['\u0648', '\u0651', '\u0602'],
                ['\u0639', '\u0670', '\u0656'],
                ['\u0631', '\u0691', '\u0613'],
                ['\u062A', '\u0679', '\u0614'],
                ['\u06D2', '\u064E', '\u0601'],
                ['\u0621', '\u0626', '\u0654'],
                ['\u06CC', '\u0650', '\u0611'],
                ['\u06C1', '\u06C3'],
                ['\u067E', '\u064F', '\u0657'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0627', '\u0622', '\uFDF2'],
                ['\u0633', '\u0635', '\u0610'],
                ['\u062F', '\u0688', '\uFDFA'],
                ['\u0641'],
                ['\u06AF', '\u063A'],
                ['\u062D', '\u06BE', '\u0612'],
                ['\u062C', '\u0636', '\uFDFB'],
                ['\u06A9', '\u062E'],
                ['\u0644'],
                ['\u061B', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0632', '\u0630', '\u060F'],
                ['\u0634', '\u0698', '\u060E'],
                ['\u0686', '\u062B', '\u0603'],
                ['\u0637', '\u0638'],
                ['\u0628', '', '\uFDFD'],
                ['\u0646', '\u06BA', '\u0600'],
                ['\u0645', '\u0658'],
                ['\u060C', '', '<'],
                ['\u06D4', '\u066B', '>'],
                ['/', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ]
    },
    'US Standard': {
        'name': 'US Standard',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['en-US']
    },
    'US International': {
        'name': 'US International',
        'keys': [
            [
                ['`', '~'],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u00e4', '\u00c4'],
                ['w', 'W', '\u00e5', '\u00c5'],
                ['e', 'E', '\u00e9', '\u00c9'],
                ['r', 'R', '\u00ae'],
                ['t', 'T', '\u00fe', '\u00de'],
                ['y', 'Y', '\u00fc', '\u00dc'],
                ['u', 'U', '\u00fa', '\u00da'],
                ['i', 'I', '\u00ed', '\u00cd'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P', '\u00f6', '\u00d6'],
                ['[', '{', '\u00ab'],
                [']', '}', '\u00bb'],
                ['\\', '|', '\u00ac', '\u00a6']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e1', '\u00c1'],
                ['s', 'S', '\u00df', '\u00a7'],
                ['d', 'D', '\u00f0', '\u00d0'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u00f8', '\u00d8'],
                [';', ':', '\u00b6', '\u00b0'],
                ['\'', '"', '\u00b4', '\u00a8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u00e6', '\u00c6'],
                ['x', 'X'],
                ['c', 'C', '\u00a9', '\u00a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N', '\u00f1', '\u00d1'],
                ['m', 'M', '\u00b5'],
                [',', '<', '\u00e7', '\u00c7'],
                ['.', '>'],
                ['/', '?', '\u00bf'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['en']
    },
    '\u040e\u0437\u0431\u0435\u043a\u0447\u0430': {
        'name': 'Uzbek Cyrillic',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['\u0493', '\u0492'],
                ['\u04B3', '\u04B2'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u045E', '\u040E'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u049B', '\u049A'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['uz']
    },
    '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9': {
        // from http://www.yv.org/uyip/hebyidkbd.txt http://uyip.org/keyboards.html
        'name': 'Yiddish',
        'keys': [
            [
                [';', '~', '\u05B0'],
                ['1', '!', '\u05B1'],
                ['2', '@', '\u05B2'],
                ['3', '#', '\u05B3'],
                ['4', '$', '\u05B4'],
                ['5', '%', '\u05B5'],
                ['6', '^', '\u05B6'],
                ['7', '*', '\u05B7'],
                ['8', '&', '\u05B8'],
                ['9', '(', '\u05C2'],
                ['0', ')', '\u05C1'],
                ['-', '_', '\u05B9'],
                ['=', '+', '\u05BC'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', '\u201F', '\u201F'],
                ['\'', '\u201E', '\u201E'],
                ['\u05E7', '`', '`'],
                ['\u05E8', '\uFB2F', '\uFB2F'],
                ['\u05D0', '\uFB2E', '\uFB2E'],
                ['\u05D8', '\u05F0', '\u05F0'],
                ['\u05D5', '\uFB35', '\uFB35'],
                ['\u05DF', '\uFB4B', '\uFB4B'],
                ['\u05DD', '\uFB4E', '\uFB4E'],
                ['\u05E4', '\uFB44', '\uFB44'],
                ['[', '{', '\u05BD'],
                [']', '}', '\u05BF'],
                ['\\', '|', '\u05BB']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05E9', '\uFB2A', '\uFB2A'],
                ['\u05D3', '\uFB2B', '\uFB2B'],
                ['\u05D2'],
                ['\u05DB', '\uFB3B', '\uFB3B'],
                ['\u05E2', '\u05F1', '\u05F1'],
                ['\u05D9', '\uFB1D', '\uFB1D'],
                ['\u05D7', '\uFF1F', '\uFF1F'],
                ['\u05DC', '\u05F2', '\u05F2'],
                ['\u05DA'],
                ['\u05E3', ':', '\u05C3'],
                [',', '"', '\u05C0'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05D6', '\u2260', '\u2260'],
                ['\u05E1', '\uFB4C', '\uFB4C'],
                ['\u05D1', '\uFB31', '\uFB31'],
                ['\u05D4', '\u05BE', '\u05BE'],
                ['\u05E0', '\u2013', '\u2013'],
                ['\u05DE', '\u2014', '\u2014'],
                ['\u05E6', '\uFB4A', '\uFB4A'],
                ['\u05EA', '<', '\u05F3'],
                ['\u05E5', '>', '\u05F4'],
                ['.', '?', '\u20AA'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['yi']
    },
    '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05dc\u05e2\u05d1\u05d8': {
        // from http://jidysz.net/
        'name': 'Yiddish (Yidish Lebt)',
        'keys': [
            [
                [';', '~'],
                ['1', '!', '\u05B2', '\u05B2'],
                ['2', '@', '\u05B3', '\u05B3'],
                ['3', '#', '\u05B1', '\u05B1'],
                ['4', '$', '\u05B4', '\u05B4'],
                ['5', '%', '\u05B5', '\u05B5'],
                ['6', '^', '\u05B7', '\u05B7'],
                ['7', '&', '\u05B8', '\u05B8'],
                ['8', '*', '\u05BB', '\u05BB'],
                ['9', ')', '\u05B6', '\u05B6'],
                ['0', '(', '\u05B0', '\u05B0'],
                ['-', '_', '\u05BF', '\u05BF'],
                ['=', '+', '\u05B9', '\u05B9'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', '', '\u05F4', '\u05F4'],
                ['\'', '', '\u05F3', '\u05F3'],
                ['\u05E7', '', '\u20AC'],
                ['\u05E8'],
                ['\u05D0', '', '\u05D0\u05B7', '\uFB2E'],
                ['\u05D8', '', '\u05D0\u05B8', '\uFB2F'],
                ['\u05D5', '\u05D5\u05B9', '\u05D5\u05BC', '\uFB35'],
                ['\u05DF', '', '\u05D5\u05D5', '\u05F0'],
                ['\u05DD', '', '\u05BC'],
                ['\u05E4', '', '\u05E4\u05BC', '\uFB44'],
                [']', '}', '\u201E', '\u201D'],
                ['[', '{', '\u201A', '\u2019'],
                ['\\', '|', '\u05BE', '\u05BE']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05E9', '\u05E9\u05C1', '\u05E9\u05C2', '\uFB2B'],
                ['\u05D3', '', '\u20AA'],
                ['\u05D2', '\u201E'],
                ['\u05DB', '', '\u05DB\u05BC', '\uFB3B'],
                ['\u05E2', '', '', '\uFB20'],
                ['\u05D9', '', '\u05D9\u05B4', '\uFB1D'],
                ['\u05D7', '', '\u05F2\u05B7', '\uFB1F'],
                ['\u05DC', '\u05DC\u05B9', '\u05D5\u05D9', '\u05F1'],
                ['\u05DA', '', '', '\u05F2'],
                ['\u05E3', ':', '\u05E4\u05BF', '\uFB4E'],
                [',', '"', ';', '\u05B2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05D6', '', '\u2013', '\u2013'],
                ['\u05E1', '', '\u2014', '\u2014'],
                ['\u05D1', '\u05DC\u05B9', '\u05D1\u05BF', '\uFB4C'],
                ['\u05D4', '', '\u201D', '\u201C'],
                ['\u05E0', '', '\u059C', '\u059E'],
                ['\u05DE', '', '\u2019', '\u2018'],
                ['\u05E6', '', '\u05E9\u05C1', '\uFB2A'],
                ['\u05EA', '>', '\u05EA\u05BC', '\uFB4A'],
                ['\u05E5', '<'],
                ['.', '?', '\u2026'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['yi']
    },
    '\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7': {
        'name': 'Chinese Bopomofo IME',
        'keys': [
            [
                ['\u20AC', '~'],
                ['\u3105', '!'],
                ['\u3109', '@'],
                ['\u02C7', '#'],
                ['\u02CB', '$'],
                ['\u3113', '%'],
                ['\u02CA', '^'],
                ['\u02D9', '&'],
                ['\u311A', '*'],
                ['\u311E', ')'],
                ['\u3122', '('],
                ['\u3126', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u3106', 'q'],
                ['\u310A', 'w'],
                ['\u310D', 'e'],
                ['\u3110', 'r'],
                ['\u3114', 't'],
                ['\u3117', 'y'],
                ['\u3127', 'u'],
                ['\u311B', 'i'],
                ['\u311F', 'o'],
                ['\u3123', 'p'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u3107', 'a'],
                ['\u310B', 's'],
                ['\u310E', 'd'],
                ['\u3111', 'f'],
                ['\u3115', 'g'],
                ['\u3118', 'h'],
                ['\u3128', 'j'],
                ['\u311C', 'k'],
                ['\u3120', 'l'],
                ['\u3124', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u3108', 'z'],
                ['\u310C', 'x'],
                ['\u310F', 'c'],
                ['\u3112', 'v'],
                ['\u3116', 'b'],
                ['\u3119', 'n'],
                ['\u3129', 'm'],
                ['\u311D', '<'],
                ['\u3121', '>'],
                ['\u3125', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['zh-BOPO']
    },
    '\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5': {
        'name': 'Chinese Cangjie IME',
        'keys': [
            [
                ['\u20AC', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u624B', 'q'],
                ['\u7530', 'w'],
                ['\u6C34', 'e'],
                ['\u53E3', 'r'],
                ['\u5EFF', 't'],
                ['\u535C', 'y'],
                ['\u5C71', 'u'],
                ['\u6208', 'i'],
                ['\u4EBA', 'o'],
                ['\u5FC3', 'p'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u65E5', 'a'],
                ['\u5C38', 's'],
                ['\u6728', 'd'],
                ['\u706B', 'f'],
                ['\u571F', 'g'],
                ['\u7AF9', 'h'],
                ['\u5341', 'j'],
                ['\u5927', 'k'],
                ['\u4E2D', 'l'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\uFF3A', 'z'],
                ['\u96E3', 'x'],
                ['\u91D1', 'c'],
                ['\u5973', 'v'],
                ['\u6708', 'b'],
                ['\u5F13', 'n'],
                ['\u4E00', 'm'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['zh']
    }
};
// aliases
keyboardLayouts['Hrvatski'] = {
    'name': 'Croatian',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['hr']
};
keyboardLayouts['Sloven\u0161\u010dina'] = {
    'name': 'Slovenian',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['sl']
};
keyboardLayouts['Srpski'] = {
    'name': 'Serbian Latin',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['sr']
};
export { keyboardLayouts, MAT_KEYBOARD_LAYOUTS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtbGF5b3V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3g3LW1hdGVyaWFsLWtleWJvYXJkLyIsInNvdXJjZXMiOlsiY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7TUFHOUQsb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQW1CLHlCQUF5QixDQUFDOztNQUN0RixlQUFlLEdBQXFCO0lBQ3hDLDRDQUE0QyxFQUFFO1FBQzVDLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztnQkFDckIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FB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LENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNE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Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDWDtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdC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QUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ2hCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FB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O1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7YUFDNUI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUs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QWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ1o7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxF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R0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO2FBQ1o7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDekM7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFR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RyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtLQUNGO0lBQ0Qsa0RBQWtELEVBQUU7UUFDbEQsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2FBQ3RCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsSUFBSSxFQUFFLEdBQUcs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QztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7YUFDMUI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDckIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUNqQjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFB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QUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDWDtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQzFCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixD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Q0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ2xDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDbkMsQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QsZ0NBQWdDLEVBQUU7UUFDaEMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxrREFBa0QsRUFBRTtRQUNsRCxNQUFNLEVBQUUsWUFBWTtRQUNwQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7Z0JBQy9CLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7Z0JBQy9CLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDO2dCQUNyQyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLENBQUM7Z0JBQ3JDLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDckI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ2xDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ2xDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNuQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7S0FDcEI7SUFDRCxnQ0FBZ0MsRUFBRTtRQUNoQyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNwQyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDcEMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNoQztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQy9CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxtR0FBbUcsRUFBRTtRQUNuRyxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7YUFDakI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQ3hCO0lBQ0QsdUZBQXVGLEVBQUU7UUFDdkYsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO2FBQ2pCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUss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QUUsR0FBRyxDQUFDO2FBQ2hCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDckIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDckI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxn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QUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQzthQUN6QztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDekM7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUs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QUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdC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ZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDckIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7S0FDM0I7SUFDRCwwQkFBMEIsRUFBRTtRQUMxQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUN0QjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUs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QUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2FBQ3RCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7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Q0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtLQUNGO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDcEIsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ1o7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUss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Q0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdB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O2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxL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QkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdC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RyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDdEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELDZCQUE2QixFQUFFO1FBQzdCLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCwrQkFBK0IsRUFBRTtRQUMvQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVB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SUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO2dCQUMxQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ25DLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDaEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNuQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNuQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7S0FDRjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztnQkFDckIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDaEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCw4REFBOEQsRUFBRTtRQUM5RCxNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ1g7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVB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cEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMs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RUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFF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Z0JBQzlCLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxF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QztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0NBQ0Y7O0FBR0QsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHO0lBQzVCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ2YsQ0FBQztBQUVGLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHO0lBQ3pDLE1BQU0sRUFBRSxXQUFXO0lBQ25CLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ2YsQ0FBQztBQUVGLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRztJQUMxQixNQUFNLEVBQUUsZUFBZTtJQUN2QixNQUFNLEVBQUUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztDQUNmLENBQUM7QUFFRixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBSRUFETUUgZnJvbSBodHRwOi8vd3d3LmdyZXl3eXZlcm4uY29tL2NvZGUvamF2YXNjcmlwdC9rZXlib2FyZC5qc1xyXG4gKiAtLS0tLS1cclxuICpcclxuICogLSBMYXkgb3V0IGVhY2gga2V5Ym9hcmQgaW4gcm93cyBvZiBzdWItYXJyYXlzLiAgRWFjaCBzdWItYXJyYXlcclxuICogICByZXByZXNlbnRzIG9uZSBrZXkuXHJcbiAqXHJcbiAqIC0gRWFjaCBzdWItYXJyYXkgY29uc2lzdHMgb2YgZm91ciBzbG90cyBkZXNjcmliZWQgYXMgZm9sbG93czpcclxuICogICAgIGV4YW1wbGU6IFtcImFcIiwgXCJBXCIsIFwiXFx1MDBlMVwiLCBcIlxcdTAwYzFcIl1cclxuICpcclxuICogICAgICAgICAgYSkgTm9ybWFsIGNoYXJhY3RlclxyXG4gKiAgICAgICAgICBBKSBDaGFyYWN0ZXIgKyBTaGlmdC9DYXBzXHJcbiAqICAgICBcXHUwMGUxKSBDaGFyYWN0ZXIgKyBBbHQvQWx0R3IvQWx0TGtcclxuICogICAgIFxcdTAwYzEpIENoYXJhY3RlciArIFNoaWZ0L0NhcHMgKyBBbHQvQWx0R3IvQWx0TGtcclxuICpcclxuICogICBZb3UgbWF5IGluY2x1ZGUgc3ViLWFycmF5cyB3aGljaCBhcmUgZmV3ZXIgdGhhbiBmb3VyIHNsb3RzLlxyXG4gKiAgIEluIHRoZXNlIGNhc2VzLCB0aGUgbWlzc2luZyBzbG90cyB3aWxsIGJlIGJsYW5rZWQgd2hlbiB0aGVcclxuICogICBjb3JyZXNwb25kaW5nIG1vZGlmaWVyIGtleSAoU2hpZnQgb3IgQWx0R3IpIGlzIHByZXNzZWQuXHJcbiAqXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBzbG90IG9mIGEgc3ViLWFycmF5IG1hdGNoZXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcclxuICogICBzdHJpbmdzOlxyXG4gKiAgICAgXCJUYWJcIiwgXCJDYXBzXCIsIFwiU2hpZnRcIiwgXCJFbnRlclwiLCBcIkJrc3BcIixcclxuICogICAgIFwiQWx0XCIgT1IgXCJBbHRHclwiLCBcIkFsdExrXCJcclxuICogICB0aGVuIHRoZSBmdW5jdGlvbiBvZiB0aGUga2V5IHdpbGwgYmUgdGhlIGZvbGxvd2luZyxcclxuICogICByZXNwZWN0aXZlbHk6XHJcbiAqICAgICAtIEluc2VydCBhIHRhYlxyXG4gKiAgICAgLSBUb2dnbGUgQ2FwcyBMb2NrICh0ZWNobmljYWxseSBhIFNoaWZ0IExvY2spXHJcbiAqICAgICAtIE5leHQgZW50ZXJlZCBjaGFyYWN0ZXIgd2lsbCBiZSB0aGUgc2hpZnRlZCBjaGFyYWN0ZXJcclxuICogICAgIC0gSW5zZXJ0IGEgbmV3bGluZSAodGV4dGFyZWEpLCBvciBjbG9zZSB0aGUga2V5Ym9hcmRcclxuICogICAgIC0gRGVsZXRlIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXJcclxuICogICAgIC0gTmV4dCBlbnRlcmVkIGNoYXJhY3RlciB3aWxsIGJlIHRoZSBhbHRlcm5hdGUgY2hhcmFjdGVyXHJcbiAqICAgICAtIFRvZ2dsZSBBbHQvQWx0R3IgTG9ja1xyXG4gKlxyXG4gKiAgIFRoZSBmaXJzdCBzbG90IG9mIHRoaXMgc3ViLWFycmF5IHdpbGwgYmUgdGhlIHRleHQgdG8gZGlzcGxheVxyXG4gKiAgIG9uIHRoZSBjb3JyZXNwb25kaW5nIGtleS4gIFRoaXMgYWxsb3dzIGZvciBlYXN5IGxvY2FsaXNhdGlvblxyXG4gKiAgIG9mIGtleSBuYW1lcy5cclxuICpcclxuICogLSBMYXlvdXQgZGVhZCBrZXlzIChkaWFjcml0aWMgKyBsZXR0ZXIpIHNob3VsZCBiZSBhZGRlZCBhc1xyXG4gKiAgIHByb3BlcnR5L3ZhbHVlIHBhaXJzIG9mIG9iamVjdHMgd2l0aCBoYXNoIGtleXMgZXF1YWwgdG8gdGhlXHJcbiAqICAgZGlhY3JpdGljLiAgU2VlIHRoZSBcInRoaXMuVktJX2RlYWRrZXlcIiBvYmplY3QgYmVsb3cgdGhlIGxheW91dFxyXG4gKiAgIGRlZmluaXRpb25zLiAgSW4gZWFjaCBwcm9wZXJ0eS92YWx1ZSBwYWlyLCB0aGUgdmFsdWUgaXMgd2hhdFxyXG4gKiAgIHRoZSBkaWFjcml0aWMgd291bGQgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIHRvLlxyXG4gKlxyXG4gKiAtIE5vdGUgdGhhdCBhbnkgY2hhcmFjdGVycyBiZXlvbmQgdGhlIG5vcm1hbCBBU0NJSSBzZXQgc2hvdWxkIGJlXHJcbiAqICAgZW50ZXJlZCBpbiBlc2NhcGVkIFVuaWNvZGUgZm9ybWF0LiAgKGVnIFxcdTAwYTMgPSBQb3VuZCBzeW1ib2wpXHJcbiAqICAgWW91IGNhbiBmaW5kIFVuaWNvZGUgdmFsdWVzIGZvciBjaGFyYWN0ZXJzIGhlcmU6XHJcbiAqICAgICBodHRwOi8vdW5pY29kZS5vcmcvY2hhcnRzL1xyXG4gKlxyXG4gKiAtIFRvIHJlbW92ZSBhIGtleWJvYXJkLCBqdXN0IGRlbGV0ZSBpdCwgb3IgY29tbWVudCBpdCBvdXQgb2YgdGhlXHJcbiAqICAgc291cmNlIGNvZGUuIElmIHlvdSBkZWNpZGUgdG8gcmVtb3ZlIHRoZSBVUyBJbnRlcm5hdGlvbmFsXHJcbiAqICAga2V5Ym9hcmQgbGF5b3V0LCBtYWtlIHN1cmUgeW91IGNoYW5nZSB0aGUgZGVmYXVsdCBsYXlvdXRcclxuICogICAodGhpcy5WS0lfa3QpIGFib3ZlIHNvIGl0IHJlZmVyZW5jZXMgYW4gZXhpc3RpbmcgbGF5b3V0LlxyXG4gKlxyXG4gKiBDUkVESVRTXHJcbiAqIC0tLS0tLS1cclxuICpcclxuICogU2VlIGh0dHA6Ly93d3cuZ3JleXd5dmVybi5jb20vY29kZS9qYXZhc2NyaXB0L2tleWJvYXJkIGZvciBleGFtcGxlc1xyXG4gKiBhbmQgdXNhZ2UgaW5zdHJ1Y3Rpb25zLlxyXG4gKlxyXG4gKiBWZXJzaW9uIDEuNDkgLSBOb3ZlbWJlciA4LCAyMDExXHJcbiAqICAgLSBEb24ndCBkaXNwbGF5IGxhbmd1YWdlIGRyb3AtZG93biBpZiBvbmx5IG9uZSBrZXlib2FyZCBhdmFpbGFibGVcclxuICpcclxuICogICBTZWUgZnVsbCBjaGFuZ2Vsb2cgYXQ6XHJcbiAqICAgICBodHRwOi8vd3d3LmdyZXl3eXZlcm4uY29tL2NvZGUvamF2YXNjcmlwdC9rZXlib2FyZC5jaGFuZ2Vsb2cudHh0XHJcbiAqXHJcbiAqIEtleWJvYXJkIENyZWRpdHNcclxuICogICAtIFlpZGRpc2ggKFlpZGlzaCBMZWJ0KSBrZXlib2FyZCBsYXlvdXQgYnkgU2ltY2hlIFRhdWIgKGppZHlzei5uZXQpXHJcbiAqICAgLSBVcmR1IFBob25ldGljIGtleWJvYXJkIGxheW91dCBieSBLaGFsaWQgTWFsaWtcclxuICogICAtIFlpZGRpc2gga2V5Ym9hcmQgbGF5b3V0IGJ5IEhlbG11dCBXb2xsbWVyc2RvcmZlclxyXG4gKiAgIC0gS2htZXIga2V5Ym9hcmQgbGF5b3V0IGJ5IFNvdmFubiBIZW5nIChrbS1raC5jb20pXHJcbiAqICAgLSBEYXJpIGtleWJvYXJkIGxheW91dCBieSBTYWlmIEZhemVsXHJcbiAqICAgLSBLdXJkaXNoIGtleWJvYXJkIGxheW91dCBieSBBcmEgUWFkaXJcclxuICogICAtIEFzc2FtZXNlIGtleWJvYXJkIGxheW91dCBieSBLYW5jaGFuIEdvZ29pXHJcbiAqICAgLSBCdWxnYXJpYW4gQkRTIGtleWJvYXJkIGxheW91dCBieSBNaWxlbiBHZW9yZ2lldlxyXG4gKiAgIC0gQmFzaWMgSmFwYW5lc2UgSGlyYWdhbmEvS2F0YWthbmEga2V5Ym9hcmQgbGF5b3V0IGJ5IERhbWphblxyXG4gKiAgIC0gVWtyYWluaWFuIGtleWJvYXJkIGxheW91dCBieSBEbWl0cnkgTmlraXRpblxyXG4gKiAgIC0gTWFjZWRvbmlhbiBrZXlib2FyZCBsYXlvdXQgYnkgRGFtamFuIERpbWl0cmlvc2tpXHJcbiAqICAgLSBQYXNodG8ga2V5Ym9hcmQgbGF5b3V0IGJ5IEFobWFkIFdhbGkgQWNoYWt6YWkgKHFhbW9zb25hLmNvbSlcclxuICogICAtIEFybWVuaWFuIEVhc3Rlcm4gYW5kIFdlc3Rlcm4ga2V5Ym9hcmQgbGF5b3V0cyBieSBIYXlhc3RhbiBQcm9qZWN0ICh3d3cuaGF5YXN0YW4uY28udWspXHJcbiAqICAgLSBQaW55aW4ga2V5Ym9hcmQgbGF5b3V0IGZyb20gYSBjb2xsYWJvcmF0aW9uIHdpdGggTG91IFdpbmtsZW1hbm5cclxuICogICAtIEthemFraCBrZXlib2FyZCBsYXlvdXQgYnkgQWxleCBNYWR5YW5raW5cclxuICogICAtIERhbmlzaCBrZXlib2FyZCBsYXlvdXQgYnkgVmVybmVyIEtqw4PCpnJzZ2FhcmRcclxuICogICAtIFNsb3ZhayBrZXlib2FyZCBsYXlvdXQgYnkgRGFuaWVsIExhcmEgKHd3dy5sZWFybmluZ3Nsb3Zhay5jb20pXHJcbiAqICAgLSBCZWxhcnVzaWFuIGFuZCBTZXJiaWFuIEN5cmlsbGljIGtleWJvYXJkIGxheW91dHMgYnkgRXZnZW5peSBUaXRvdlxyXG4gKiAgIC0gQnVsZ2FyaWFuIFBob25ldGljIGtleWJvYXJkIGxheW91dCBieSBTYW11aWwgR29zcG9kaW5vdlxyXG4gKiAgIC0gU3dlZGlzaCBrZXlib2FyZCBsYXlvdXQgYnkgSMODwqVrYW4gU2FuZGJlcmdcclxuICogICAtIFJvbWFuaWFuIGtleWJvYXJkIGxheW91dCBieSBBdXJlbFxyXG4gKiAgIC0gRmFyc2kgKFBlcnNpYW4pIGtleWJvYXJkIGxheW91dCBieSBLYXZlaCBCYWtodGl5YXJpICh3d3cuYmFraHRpeWFyaS5jb20pXHJcbiAqICAgLSBCdXJtZXNlIGtleWJvYXJkIGxheW91dCBieSBDZXRhbmFwYVxyXG4gKiAgIC0gQm9zbmlhbi9Dcm9hdGlhbi9TZXJiaWFuIExhdGluL1Nsb3ZlbmlhbiBrZXlib2FyZCBsYXlvdXQgYnkgTWlyYW4gWmVsamtvXHJcbiAqICAgLSBIdW5nYXJpYW4ga2V5Ym9hcmQgbGF5b3V0IGJ5IEFudGFsIFNhbGwgJ0hpcm9tYWN1J1xyXG4gKiAgIC0gQXJhYmljIGtleWJvYXJkIGxheW91dCBieSBTcmluaXZhcyBSZWRkeVxyXG4gKiAgIC0gSXRhbGlhbiBhbmQgU3BhbmlzaCAoU3BhaW4pIGtleWJvYXJkIGxheW91dHMgYnkgZGljdGlvbmFyaXN0LmNvbVxyXG4gKiAgIC0gTGl0aHVhbmlhbiBhbmQgUnVzc2lhbiBrZXlib2FyZCBsYXlvdXRzIGJ5IFJhbXVuYXNcclxuICogICAtIEdlcm1hbiBrZXlib2FyZCBsYXlvdXQgYnkgUXVIbm9cclxuICogICAtIEZyZW5jaCBrZXlib2FyZCBsYXlvdXQgYnkgSGlkZGVuIEV2aWxcclxuICogICAtIFBvbGlzaCBQcm9ncmFtbWVycyBsYXlvdXQgYnkgbW9vc2VcclxuICogICAtIFR1cmtpc2gga2V5Ym9hcmQgbGF5b3V0cyBieSBvZmZjdVxyXG4gKiAgIC0gRHV0Y2ggYW5kIFVTIEludCdsIGtleWJvYXJkIGxheW91dHMgYnkgamVyb25lXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXlib2FyZENsYXNzS2V5IH0gZnJvbSAnLi4vZW51bXMva2V5Ym9hcmQtY2xhc3Mta2V5LmVudW0nO1xyXG5pbXBvcnQgeyBJS2V5Ym9hcmRMYXlvdXRzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXRzLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBNQVRfS0VZQk9BUkRfTEFZT1VUUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJS2V5Ym9hcmRMYXlvdXRzPigna2V5Ym9hcmQtbGF5b3V0cy5jb25maWcnKTtcclxuY29uc3Qga2V5Ym9hcmRMYXlvdXRzOiBJS2V5Ym9hcmRMYXlvdXRzID0ge1xyXG4gICdcXHUwNjI3XFx1MDY0NFxcdTA2MzlcXHUwNjMxXFx1MDYyOFxcdTA2NGFcXHUwNjI5Jzoge1xyXG4gICAgJ25hbWUnOiAnQXJhYmljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNjMwJywgJ1xcdTA2NTEgJ10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBhMScsICdcXHUwMGI5J10sXHJcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDBiMiddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwYjMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE0JywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDBiYyddLFxyXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbJzgnLCAnKicsICdcXHUwMGJlJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MjAxOCddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTIwMTknXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMGE1J10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBkNycsICdcXHUwMGY3J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNjM2JywgJ1xcdTA2NGUnXSxcclxuICAgICAgICBbJ1xcdTA2MzUnLCAnXFx1MDY0YiddLFxyXG4gICAgICAgIFsnXFx1MDYyYicsICdcXHUwNjRmJ10sXHJcbiAgICAgICAgWydcXHUwNjQyJywgJ1xcdTA2NGMnXSxcclxuICAgICAgICBbJ1xcdTA2NDEnLCAnXFx1MDY0NCddLFxyXG4gICAgICAgIFsnXFx1MDYzYScsICdcXHUwNjI1J10sXHJcbiAgICAgICAgWydcXHUwNjM5JywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJ1xcdTA2NDcnLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFsnXFx1MDYyZScsICdcXHUwMGQ3J10sXHJcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2MWInXSxcclxuICAgICAgICBbJ1xcdTA2MmMnLCAnPCddLFxyXG4gICAgICAgIFsnXFx1MDYyZicsICc+J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNjM0JywgJ1xcdTA2NTAnXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDY0ZCddLFxyXG4gICAgICAgIFsnXFx1MDY0YScsICddJ10sXHJcbiAgICAgICAgWydcXHUwNjI4JywgJ1snXSxcclxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDY0NCddLFxyXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIzJ10sXHJcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2NDAnXSxcclxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDYwYyddLFxyXG4gICAgICAgIFsnXFx1MDY0NScsICcvJ10sXHJcbiAgICAgICAgWydcXHUwNjQzJywgJzonXSxcclxuICAgICAgICBbJ1xcdTA2MzcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA2MjYnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDYyMScsICdcXHUwNjUyJ10sXHJcbiAgICAgICAgWydcXHUwNjI0JywgJ30nXSxcclxuICAgICAgICBbJ1xcdTA2MzEnLCAneyddLFxyXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNjQ0J10sXHJcbiAgICAgICAgWydcXHUwNjQ5JywgJ1xcdTA2MjInXSxcclxuICAgICAgICBbJ1xcdTA2MjknLCAnXFx1MjAxOSddLFxyXG4gICAgICAgIFsnXFx1MDY0OCcsICcsJ10sXHJcbiAgICAgICAgWydcXHUwNjMyJywgJy4nXSxcclxuICAgICAgICBbJ1xcdTA2MzgnLCAnXFx1MDYxZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydhciddXHJcbiAgfSxcclxuICAnXFx1MDk4NVxcdTA5YjhcXHUwOWFlXFx1MDljMFxcdTA5ZGZcXHUwOWJlJzoge1xyXG4gICAgJ25hbWUnOiAnQXNzYW1lc2UnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJysnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MDlFNycsICd7JywgJ1xcdTA5RTcnXSxcclxuICAgICAgICBbJ1xcdTA5RTgnLCAnfScsICdcXHUwOUU4J10sXHJcbiAgICAgICAgWydcXHUwOUU5JywgJ1xcdTA5Q0RcXHUwOUYwJywgJ1xcdTA5RTknXSxcclxuICAgICAgICBbJ1xcdTA5RUEnLCAnXFx1MDlGMFxcdTA5Q0QnLCAnXFx1MDlFQSddLFxyXG4gICAgICAgIFsnXFx1MDlFQicsICdcXHUwOTlDXFx1MDlDRFxcdTA5RjAnLCAnXFx1MDlFQiddLFxyXG4gICAgICAgIFsnXFx1MDlFQycsICdcXHUwOTk1XFx1MDlDRFxcdTA5QjcnLCAnXFx1MDlFQyddLFxyXG4gICAgICAgIFsnXFx1MDlFRCcsICdcXHUwOTk1XFx1MDlDRFxcdTA5RjAnLCAnXFx1MDlFRCddLFxyXG4gICAgICAgIFsnXFx1MDlFRScsICdcXHUwOUI2XFx1MDlDRFxcdTA5RjAnLCAnXFx1MDlFRSddLFxyXG4gICAgICAgIFsnXFx1MDlFRicsICcoJywgJ1xcdTA5RUYnXSxcclxuICAgICAgICBbJ1xcdTA5RTYnLCAnKScsICdcXHUwOUU2J10sXHJcbiAgICAgICAgWyctJywgJyddLFxyXG4gICAgICAgIFsnXFx1MDlDMycsICdcXHUwOThCJywgJ1xcdTA5RTInLCAnXFx1MDlFMCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDlDQycsICdcXHUwOTk0JywgJ1xcdTA5RDcnXSxcclxuICAgICAgICBbJ1xcdTA5QzgnLCAnXFx1MDk5MCddLFxyXG4gICAgICAgIFsnXFx1MDlCRScsICdcXHUwOTg2J10sXHJcbiAgICAgICAgWydcXHUwOUMwJywgJ1xcdTA5ODgnLCAnXFx1MDlFMycsICdcXHUwOUUxJ10sXHJcbiAgICAgICAgWydcXHUwOUMyJywgJ1xcdTA5OEEnXSxcclxuICAgICAgICBbJ1xcdTA5RjEnLCAnXFx1MDlBRCddLFxyXG4gICAgICAgIFsnXFx1MDlCOScsICdcXHUwOTk5J10sXHJcbiAgICAgICAgWydcXHUwOTk3JywgJ1xcdTA5OTgnXSxcclxuICAgICAgICBbJ1xcdTA5QTYnLCAnXFx1MDlBNyddLFxyXG4gICAgICAgIFsnXFx1MDk5QycsICdcXHUwOTlEJ10sXHJcbiAgICAgICAgWydcXHUwOUExJywgJ1xcdTA5QTInLCAnXFx1MDlEQycsICdcXHUwOUREJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA5Q0InLCAnXFx1MDk5MycsICdcXHUwOUY0JywgJ1xcdTA5RjUnXSxcclxuICAgICAgICBbJ1xcdTA5QzcnLCAnXFx1MDk4RicsICdcXHUwOUY2JywgJ1xcdTA5RjcnXSxcclxuICAgICAgICBbJ1xcdTA5Q0QnLCAnXFx1MDk4NScsICdcXHUwOUY4JywgJ1xcdTA5RjknXSxcclxuICAgICAgICBbJ1xcdTA5QkYnLCAnXFx1MDk4NycsICdcXHUwOUUyJywgJ1xcdTA5OEMnXSxcclxuICAgICAgICBbJ1xcdTA5QzEnLCAnXFx1MDk4OSddLFxyXG4gICAgICAgIFsnXFx1MDlBQScsICdcXHUwOUFCJ10sXHJcbiAgICAgICAgWydcXHUwOUYwJywgJycsICdcXHUwOUYwJywgJ1xcdTA5RjEnXSxcclxuICAgICAgICBbJ1xcdTA5OTUnLCAnXFx1MDk5NiddLFxyXG4gICAgICAgIFsnXFx1MDlBNCcsICdcXHUwOUE1J10sXHJcbiAgICAgICAgWydcXHUwOTlBJywgJ1xcdTA5OUInXSxcclxuICAgICAgICBbJ1xcdTA5OUYnLCAnXFx1MDlBMCddLFxyXG4gICAgICAgIFsnXFx1MDlCQycsICdcXHUwOTlFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA5Q0UnLCAnXFx1MDk4MyddLFxyXG4gICAgICAgIFsnXFx1MDk4MicsICdcXHUwOTgxJywgJ1xcdTA5RkEnXSxcclxuICAgICAgICBbJ1xcdTA5QUUnLCAnXFx1MDlBMyddLFxyXG4gICAgICAgIFsnXFx1MDlBOCcsICdcXHUwOUY3J10sXHJcbiAgICAgICAgWydcXHUwOUFDJywgJ1wiJ10sXHJcbiAgICAgICAgWydcXHUwOUIyJywgJ1xcJyddLFxyXG4gICAgICAgIFsnXFx1MDlCOCcsICdcXHUwOUI2J10sXHJcbiAgICAgICAgWycsJywgJ1xcdTA5QjcnXSxcclxuICAgICAgICBbJy4nLCAnOyddLFxyXG4gICAgICAgIFsnXFx1MDlBRicsICdcXHUwOURGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnYXMnXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MTBcXHUwNDM3XFx1MDRkOVxcdTA0NDBcXHUwNDMxXFx1MDQzMFxcdTA0NThcXHUwNGI5XFx1MDQzMFxcdTA0M2RcXHUwNGI5XFx1MDQzMCc6IHtcclxuICAgICduYW1lJzogJ0F6ZXJiYWlqYW5pIEN5cmlsbGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXHJcbiAgICAgICAgWyc0JywgJzsnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc6J10sXHJcbiAgICAgICAgWyc3JywgJz8nXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDU4JywgJ1xcdTA0MDgnXSxcclxuICAgICAgICBbJ1xcdTA0QUYnLCAnXFx1MDRBRSddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MUEnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDRCQicsICdcXHUwNEJBJ10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDRCOScsICdcXHUwNEI4J10sXHJcbiAgICAgICAgWydcXFxcJywgJy8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NEInLCAnXFx1MDQyQiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0OUQnLCAnXFx1MDQ5QyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWydcXHUwNEQ5JywgJ1xcdTA0RDgnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDkzJywgJ1xcdTA0OTInXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDRFOScsICdcXHUwNEU4J10sXHJcbiAgICAgICAgWycuJywgJywnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2F6LUNZUkwnXVxyXG4gIH0sXHJcbiAgJ0F6XFx1MDI1OXJiYXljYW5jYSc6IHtcclxuICAgICduYW1lJzogJ0F6ZXJiYWlqYW5pIExhdGluJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTY2J10sXHJcbiAgICAgICAgWyc0JywgJzsnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc6J10sXHJcbiAgICAgICAgWyc3JywgJz8nXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ1xcdTAwRkMnLCAnXFx1MDBEQyddLFxyXG4gICAgICAgIFsnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnXFx1MDEzMCddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRjYnLCAnXFx1MDBENiddLFxyXG4gICAgICAgIFsnXFx1MDExRicsICdcXHUwMTFFJ10sXHJcbiAgICAgICAgWydcXFxcJywgJy8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMTMxJywgJ0knXSxcclxuICAgICAgICBbJ1xcdTAyNTknLCAnXFx1MDE4RiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWydcXHUwMEU3JywgJ1xcdTAwQzcnXSxcclxuICAgICAgICBbJ1xcdTAxNUYnLCAnXFx1MDE1RSddLFxyXG4gICAgICAgIFsnLicsICcsJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydheiddXHJcbiAgfSxcclxuICAnXFx1MDQxMVxcdTA0MzVcXHUwNDNiXFx1MDQzMFxcdTA0NDBcXHUwNDQzXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0Zic6IHtcclxuICAgICduYW1lJzogJ0JlbGFydXNpYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTA0NTEnLCAnXFx1MDQwMSddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTIxMTYnXSxcclxuICAgICAgICBbJzQnLCAnOyddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJzonXSxcclxuICAgICAgICBbJzcnLCAnPyddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxyXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0M2EnLCAnXFx1MDQxYSddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDNkJywgJ1xcdTA0MWQnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNDVlJywgJ1xcdTA0MGUnXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXCcnLCAnXFwnJ10sXHJcbiAgICAgICAgWydcXFxcJywgJy8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NGInLCAnXFx1MDQyYiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0M2YnLCAnXFx1MDQxZiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNlJywgJ1xcdTA0MWUnXSxcclxuICAgICAgICBbJ1xcdTA0M2InLCAnXFx1MDQxYiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0NGQnLCAnXFx1MDQyZCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnLycsICd8J10sXHJcbiAgICAgICAgWydcXHUwNDRmJywgJ1xcdTA0MmYnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNjJywgJ1xcdTA0MWMnXSxcclxuICAgICAgICBbJ1xcdTA0NTYnLCAnXFx1MDQwNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDRjJywgJ1xcdTA0MmMnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDQ0ZScsICdcXHUwNDJlJ10sXHJcbiAgICAgICAgWycuJywgJywnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2JlJ11cclxuICB9LFxyXG4gICdCZWxnaXNjaGUgLyBCZWxnZSc6IHtcclxuICAgICduYW1lJzogJ0JlbGdpYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwYjInLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnJicsICcxJywgJ3wnXSxcclxuICAgICAgICBbJ1xcdTAwZTknLCAnMicsICdAJ10sXHJcbiAgICAgICAgWydcIicsICczJywgJyMnXSxcclxuICAgICAgICBbJ1xcJycsICc0J10sXHJcbiAgICAgICAgWycoJywgJzUnXSxcclxuICAgICAgICBbJ1xcdTAwYTcnLCAnNicsICdeJ10sXHJcbiAgICAgICAgWydcXHUwMGU4JywgJzcnXSxcclxuICAgICAgICBbJyEnLCAnOCddLFxyXG4gICAgICAgIFsnXFx1MDBlNycsICc5JywgJ3snXSxcclxuICAgICAgICBbJ1xcdTAwZTAnLCAnMCcsICd9J10sXHJcbiAgICAgICAgWycpJywgJ1xcdTAwYjAnXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ14nLCAnXFx1MDBhOCcsICdbJ10sXHJcbiAgICAgICAgWyckJywgJyonLCAnXSddLFxyXG4gICAgICAgIFsnXFx1MDNiYycsICdcXHUwMGEzJywgJ2AnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJ1xcdTAwZjknLCAnJScsICdcXHUwMGI0J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnLCcsICc/J10sXHJcbiAgICAgICAgWyc7JywgJy4nXSxcclxuICAgICAgICBbJzonLCAnLyddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ34nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydubC1CRScsICdmci1CRSddXHJcbiAgfSxcclxuICAnXFx1MDQxMVxcdTA0NGFcXHUwNDNiXFx1MDQzM1xcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4IFxcdTA0MjRcXHUwNDNlXFx1MDQzZFxcdTA0MzVcXHUwNDQyXFx1MDQzOFxcdTA0NDdcXHUwNDM1XFx1MDQzZCc6IHtcclxuICAgICduYW1lJzogJ0J1bGdhcmlhbiBQaG9uZXRpYycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0QScsICdcXHUwNDJBJ10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXHJcbiAgICAgICAgWydcXHUwNDRFJywgJ1xcdTA0MkUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDRDJywgJ1xcdTA0MkMnXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydiZyddXHJcbiAgfSxcclxuICAnXFx1MDQxMVxcdTA0NGFcXHUwNDNiXFx1MDQzM1xcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4Jzoge1xyXG4gICAgJ25hbWUnOiAnQnVsZ2FyaWFuIEJEUycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnPyddLFxyXG4gICAgICAgIFsnMycsICcrJ10sXHJcbiAgICAgICAgWyc0JywgJ1wiJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnPSddLFxyXG4gICAgICAgIFsnNycsICc6J10sXHJcbiAgICAgICAgWyc4JywgJy8nXSxcclxuICAgICAgICBbJzknLCAnXyddLFxyXG4gICAgICAgIFsnMCcsICdcXHUyMTE2J10sXHJcbiAgICAgICAgWyctJywgJ1xcdTA0MDYnXSxcclxuICAgICAgICBbJz0nLCAnViddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnLCcsICdcXHUwNDRiJ10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxyXG4gICAgICAgIFsnXFx1MDQzYScsICdcXHUwNDFhJ10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJzsnLCAnXFx1MDBhNyddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQ0YycsICdcXHUwNDJjJ10sXHJcbiAgICAgICAgWydcXHUwNDRmJywgJ1xcdTA0MmYnXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQzZScsICdcXHUwNDFlJ10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDNkJywgJ1xcdTA0MWQnXSxcclxuICAgICAgICBbJ1xcdTA0MTInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzYycsICdcXHUwNDFjJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA0MmUnLCAnXFx1MDQ0ZSddLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNDRhJywgJ1xcdTA0MmEnXSxcclxuICAgICAgICBbJ1xcdTA0NGQnLCAnXFx1MDQyZCddLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0M2YnLCAnXFx1MDQxZiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNiJywgJ1xcdTA0MWInXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF1cclxuICB9LFxyXG4gICdcXHUwOWFjXFx1MDliZVxcdTA5ODJcXHUwOWIyXFx1MDliZSc6IHtcclxuICAgICduYW1lJzogJ0JlbmdhbGknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJyddLFxyXG4gICAgICAgIFsnMScsICcnLCAnXFx1MDlFNyddLFxyXG4gICAgICAgIFsnMicsICcnLCAnXFx1MDlFOCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwOUNEXFx1MDlCMCcsICdcXHUwOUU5J10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTA5QjBcXHUwOUNEJywgJ1xcdTA5RUEnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MDk5Q1xcdTA5Q0RcXHUwOUIwJywgJ1xcdTA5RUInXSxcclxuICAgICAgICBbJzYnLCAnXFx1MDlBNFxcdTA5Q0RcXHUwOUI3JywgJ1xcdTA5RUMnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MDk5NVxcdTA5Q0RcXHUwOUIwJywgJ1xcdTA5RUQnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MDlCNlxcdTA5Q0RcXHUwOUIwJywgJ1xcdTA5RUUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwOUVGJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDlFNiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwOTgzJ10sXHJcbiAgICAgICAgWydcXHUwOUMzJywgJ1xcdTA5OEInLCAnXFx1MDlFMicsICdcXHUwOUUwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwOUNDJywgJ1xcdTA5OTQnLCAnXFx1MDlENyddLFxyXG4gICAgICAgIFsnXFx1MDlDOCcsICdcXHUwOTkwJ10sXHJcbiAgICAgICAgWydcXHUwOUJFJywgJ1xcdTA5ODYnXSxcclxuICAgICAgICBbJ1xcdTA5QzAnLCAnXFx1MDk4OCcsICdcXHUwOUUzJywgJ1xcdTA5RTEnXSxcclxuICAgICAgICBbJ1xcdTA5QzInLCAnXFx1MDk4QSddLFxyXG4gICAgICAgIFsnXFx1MDlBQycsICdcXHUwOUFEJ10sXHJcbiAgICAgICAgWydcXHUwOUI5JywgJ1xcdTA5OTknXSxcclxuICAgICAgICBbJ1xcdTA5OTcnLCAnXFx1MDk5OCddLFxyXG4gICAgICAgIFsnXFx1MDlBNicsICdcXHUwOUE3J10sXHJcbiAgICAgICAgWydcXHUwOTlDJywgJ1xcdTA5OUQnXSxcclxuICAgICAgICBbJ1xcdTA5QTEnLCAnXFx1MDlBMicsICdcXHUwOURDJywgJ1xcdTA5REQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDlDQicsICdcXHUwOTkzJywgJ1xcdTA5RjQnLCAnXFx1MDlGNSddLFxyXG4gICAgICAgIFsnXFx1MDlDNycsICdcXHUwOThGJywgJ1xcdTA5RjYnLCAnXFx1MDlGNyddLFxyXG4gICAgICAgIFsnXFx1MDlDRCcsICdcXHUwOTg1JywgJ1xcdTA5RjgnLCAnXFx1MDlGOSddLFxyXG4gICAgICAgIFsnXFx1MDlCRicsICdcXHUwOTg3JywgJ1xcdTA5RTInLCAnXFx1MDk4QyddLFxyXG4gICAgICAgIFsnXFx1MDlDMScsICdcXHUwOTg5J10sXHJcbiAgICAgICAgWydcXHUwOUFBJywgJ1xcdTA5QUInXSxcclxuICAgICAgICBbJ1xcdTA5QjAnLCAnJywgJ1xcdTA5RjAnLCAnXFx1MDlGMSddLFxyXG4gICAgICAgIFsnXFx1MDk5NScsICdcXHUwOTk2J10sXHJcbiAgICAgICAgWydcXHUwOUE0JywgJ1xcdTA5QTUnXSxcclxuICAgICAgICBbJ1xcdTA5OUEnLCAnXFx1MDk5QiddLFxyXG4gICAgICAgIFsnXFx1MDk5RicsICdcXHUwOUEwJ10sXHJcbiAgICAgICAgWydcXHUwOUJDJywgJ1xcdTA5OUUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWydcXHUwOTgyJywgJ1xcdTA5ODEnLCAnXFx1MDlGQSddLFxyXG4gICAgICAgIFsnXFx1MDlBRScsICdcXHUwOUEzJ10sXHJcbiAgICAgICAgWydcXHUwOUE4J10sXHJcbiAgICAgICAgWydcXHUwOUFDJ10sXHJcbiAgICAgICAgWydcXHUwOUIyJ10sXHJcbiAgICAgICAgWydcXHUwOUI4JywgJ1xcdTA5QjYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MDlCNyddLFxyXG4gICAgICAgIFsnLicsICd7J10sXHJcbiAgICAgICAgWydcXHUwOUFGJywgJ1xcdTA5REYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydibiddXHJcbiAgfSxcclxuICAnQm9zYW5za2knOiB7XHJcbiAgICAnbmFtZSc6ICdCb3NuaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMEI4JywgJ1xcdTAwQTgnXSxcclxuICAgICAgICBbJzEnLCAnIScsICd+J10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAyQzcnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdeJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDJEOCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMkRCJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAnYCddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1xcdTAyRDknXSxcclxuICAgICAgICBbJzknLCAnKScsICdcXHUwMEI0J10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnXFx1MDJERCddLFxyXG4gICAgICAgIFsnXFwnJywgJz8nLCAnXFx1MDBBOCddLFxyXG4gICAgICAgIFsnKycsICcqJywgJ1xcdTAwQjgnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdcXFxcJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnLCAnfCddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDE2MScsICdcXHUwMTYwJywgJ1xcdTAwRjcnXSxcclxuICAgICAgICBbJ1xcdTAxMTEnLCAnXFx1MDExMCcsICdcXHUwMEQ3J10sXHJcbiAgICAgICAgWydcXHUwMTdFJywgJ1xcdTAxN0QnLCAnXFx1MDBBNCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRicsICdbJ10sXHJcbiAgICAgICAgWydnJywgJ0cnLCAnXSddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSycsICdcXHUwMTQyJ10sXHJcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDE0MSddLFxyXG4gICAgICAgIFsnXFx1MDEwRCcsICdcXHUwMTBDJ10sXHJcbiAgICAgICAgWydcXHUwMTA3JywgJ1xcdTAxMDYnLCAnXFx1MDBERiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAnQCddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcclxuICAgICAgICBbJ24nLCAnTicsICd9J10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBBOSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2JzJ11cclxuICB9LFxyXG4gICdDYW5hZGllbm5lLWZyYW5cXHUwMGU3YWlzZSc6IHtcclxuICAgICduYW1lJzogJ0NhbmFkaWFuIEZyZW5jaCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnIycsICd8JywgJ1xcXFwnXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMEIxJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnLycsICdcXHUwMEEzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDBBMiddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQTQnXSxcclxuICAgICAgICBbJzYnLCAnPycsICdcXHUwMEFDJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnXFx1MDBBNiddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAwQjInXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwMEIzJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDBCQyddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwQkQnXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMEJFJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJ3AnLCAnUCcsICdcXHUwMEI2J10sXHJcbiAgICAgICAgWydeJywgJ14nLCAnWyddLFxyXG4gICAgICAgIFsnXFx1MDBCOCcsICdcXHUwMEE4JywgJ10nXSxcclxuICAgICAgICBbJzwnLCAnPicsICd9J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6JywgJ34nXSxcclxuICAgICAgICBbJ2AnLCAnYCcsICd7J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwMEFCJywgJ1xcdTAwQkInLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwQjUnXSxcclxuICAgICAgICBbJywnLCAnXFwnJywgJ1xcdTAwQUYnXSxcclxuICAgICAgICBbJy4nLCAnLicsICdcXHUwMEFEJ10sXHJcbiAgICAgICAgWydcXHUwMEU5JywgJ1xcdTAwQzknLCAnXFx1MDBCNCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2ZyLUNBJ11cclxuICB9LFxyXG4gICdcXHUwMTBjZXNreSc6IHtcclxuICAgICduYW1lJzogJ0N6ZWNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWyc7JywgJ1xcdTAwYjAnLCAnYCcsICd+J10sXHJcbiAgICAgICAgWycrJywgJzEnLCAnISddLFxyXG4gICAgICAgIFsnXFx1MDExQicsICcyJywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTAxNjEnLCAnMycsICcjJ10sXHJcbiAgICAgICAgWydcXHUwMTBEJywgJzQnLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDE1OScsICc1JywgJyUnXSxcclxuICAgICAgICBbJ1xcdTAxN0UnLCAnNicsICdeJ10sXHJcbiAgICAgICAgWydcXHUwMEZEJywgJzcnLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDBFMScsICc4JywgJyonXSxcclxuICAgICAgICBbJ1xcdTAwRUQnLCAnOScsICcoJ10sXHJcbiAgICAgICAgWydcXHUwMEU5JywgJzAnLCAnKSddLFxyXG4gICAgICAgIFsnPScsICclJywgJy0nLCAnXyddLFxyXG4gICAgICAgIFsnXFx1MDBCNCcsICdcXHUwMmM3JywgJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRkEnLCAnLycsICdbJywgJ3snXSxcclxuICAgICAgICBbJyknLCAnKCcsICddJywgJ30nXSxcclxuICAgICAgICBbJ1xcdTAwQTgnLCAnXFwnJywgJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAxNkYnLCAnXCInLCAnOycsICc6J10sXHJcbiAgICAgICAgWydcXHUwMEE3JywgJyEnLCAnXFx1MDBhNCcsICdeJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnJywgJ1xcdTAyZGQnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc/JywgJzwnLCAnXFx1MDBkNyddLFxyXG4gICAgICAgIFsnLicsICc6JywgJz4nLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFsnLScsICdfJywgJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydjcyddXHJcbiAgfSxcclxuICAnRGFuc2snOiB7XHJcbiAgICAnbmFtZSc6ICdEYW5pc2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwYmQnLCAnXFx1MDBhNyddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTAwYTQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJysnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJywgJ3wnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMGU1JywgJ1xcdTAwYzUnXSxcclxuICAgICAgICBbJ1xcdTAwYTgnLCAnXicsICd+J10sXHJcbiAgICAgICAgWydcXCcnLCAnKiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwZTYnLCAnXFx1MDBjNiddLFxyXG4gICAgICAgIFsnXFx1MDBmOCcsICdcXHUwMGQ4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAzYmMnLCAnXFx1MDM5YyddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2RhJ11cclxuICB9LFxyXG4gICdEZXV0c2NoJzoge1xyXG4gICAgJ25hbWUnOiAnR2VybWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydeJywgJ1xcdTAwYjAnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTAwYTcnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJ1xcdTAwZGYnLCAnPycsICdcXFxcJ10sXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdAJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwZmMnLCAnXFx1MDBkYyddLFxyXG4gICAgICAgIFsnKycsICcqJywgJ34nXSxcclxuICAgICAgICBbJyMnLCAnXFwnJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBmNicsICdcXHUwMGQ2J10sXHJcbiAgICAgICAgWydcXHUwMGU0JywgJ1xcdTAwYzQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICdcXHUwMGE2J10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBiNSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZGUnXVxyXG4gIH0sXHJcbiAgJ0RpbmdiYXRzJzoge1xyXG4gICAgJ25hbWUnOiAnRGluZ2JhdHMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTI3NjQnLCAnXFx1Mjc2NScsICdcXHUyNzY2JywgJ1xcdTI3NjcnXSxcclxuICAgICAgICBbJ1xcdTI3OGEnLCAnXFx1Mjc4MCcsICdcXHUyNzc2JywgJ1xcdTI3NjgnXSxcclxuICAgICAgICBbJ1xcdTI3OGInLCAnXFx1Mjc4MScsICdcXHUyNzc3JywgJ1xcdTI3NjknXSxcclxuICAgICAgICBbJ1xcdTI3OGMnLCAnXFx1Mjc4MicsICdcXHUyNzc4JywgJ1xcdTI3NmEnXSxcclxuICAgICAgICBbJ1xcdTI3OGQnLCAnXFx1Mjc4MycsICdcXHUyNzc5JywgJ1xcdTI3NmInXSxcclxuICAgICAgICBbJ1xcdTI3OGUnLCAnXFx1Mjc4NCcsICdcXHUyNzdhJywgJ1xcdTI3NmMnXSxcclxuICAgICAgICBbJ1xcdTI3OGYnLCAnXFx1Mjc4NScsICdcXHUyNzdiJywgJ1xcdTI3NmQnXSxcclxuICAgICAgICBbJ1xcdTI3OTAnLCAnXFx1Mjc4NicsICdcXHUyNzdjJywgJ1xcdTI3NmUnXSxcclxuICAgICAgICBbJ1xcdTI3OTEnLCAnXFx1Mjc4NycsICdcXHUyNzdkJywgJ1xcdTI3NmYnXSxcclxuICAgICAgICBbJ1xcdTI3OTInLCAnXFx1Mjc4OCcsICdcXHUyNzdlJywgJ1xcdTI3NzAnXSxcclxuICAgICAgICBbJ1xcdTI3OTMnLCAnXFx1Mjc4OScsICdcXHUyNzdmJywgJ1xcdTI3NzEnXSxcclxuICAgICAgICBbJ1xcdTI3OTUnLCAnXFx1Mjc5NicsICdcXHUyNzRjJywgJ1xcdTI3OTcnXSxcclxuICAgICAgICBbJ1xcdTI3MDInLCAnXFx1MjcwNCcsICdcXHUyNzAxJywgJ1xcdTI3MDMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTI3MTQnLCAnXFx1MjcwNScsICdcXHUyNzEzJ10sXHJcbiAgICAgICAgWydcXHUyNzE4JywgJ1xcdTI3MTUnLCAnXFx1MjcxNycsICdcXHUyNzE2J10sXHJcbiAgICAgICAgWydcXHUyNzFhJywgJ1xcdTI3MTknLCAnXFx1MjcxYicsICdcXHUyNzFjJ10sXHJcbiAgICAgICAgWydcXHUyNzFkJywgJ1xcdTI3MWUnLCAnXFx1MjcxZicsICdcXHUyNzIwJ10sXHJcbiAgICAgICAgWydcXHUyNzIyJywgJ1xcdTI3MjMnLCAnXFx1MjcyNCcsICdcXHUyNzI1J10sXHJcbiAgICAgICAgWydcXHUyNzI2JywgJ1xcdTI3MjcnLCAnXFx1MjcyOCcsICdcXHUyNzU2J10sXHJcbiAgICAgICAgWydcXHUyNzI5JywgJ1xcdTI3MmEnLCAnXFx1MjcyZCcsICdcXHUyNzMwJ10sXHJcbiAgICAgICAgWydcXHUyNzJjJywgJ1xcdTI3MmInLCAnXFx1MjcyZScsICdcXHUyNzJmJ10sXHJcbiAgICAgICAgWydcXHUyNzM2JywgJ1xcdTI3MzEnLCAnXFx1MjczMicsICdcXHUyNzQ5J10sXHJcbiAgICAgICAgWydcXHUyNzNiJywgJ1xcdTI3M2MnLCAnXFx1MjczZCcsICdcXHUyNzNlJ10sXHJcbiAgICAgICAgWydcXHUyNzQ0JywgJ1xcdTI3NDUnLCAnXFx1Mjc0NicsICdcXHUyNzQzJ10sXHJcbiAgICAgICAgWydcXHUyNzMzJywgJ1xcdTI3MzQnLCAnXFx1MjczNScsICdcXHUyNzIxJ10sXHJcbiAgICAgICAgWydcXHUyNzM3JywgJ1xcdTI3MzgnLCAnXFx1MjczOScsICdcXHUyNzNhJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1Mjc5OScsICdcXHUyNzlhJywgJ1xcdTI3OTgnLCAnXFx1Mjc1OCddLFxyXG4gICAgICAgIFsnXFx1MjdiNScsICdcXHUyN2I2JywgJ1xcdTI3YjQnLCAnXFx1Mjc1OSddLFxyXG4gICAgICAgIFsnXFx1MjdiOCcsICdcXHUyN2I5JywgJ1xcdTI3YjcnLCAnXFx1Mjc1YSddLFxyXG4gICAgICAgIFsnXFx1Mjc5NCcsICdcXHUyNzljJywgJ1xcdTI3YmEnLCAnXFx1MjdiYiddLFxyXG4gICAgICAgIFsnXFx1Mjc5ZCcsICdcXHUyNzllJywgJ1xcdTI3YTEnLCAnXFx1Mjc3MiddLFxyXG4gICAgICAgIFsnXFx1MjdhOScsICdcXHUyN2FhJywgJ1xcdTI3YWInLCAnXFx1MjdhYyddLFxyXG4gICAgICAgIFsnXFx1MjdhNCcsICdcXHUyN2EzJywgJ1xcdTI3YTInLCAnXFx1Mjc5YiddLFxyXG4gICAgICAgIFsnXFx1MjdiMycsICdcXHUyN2JjJywgJ1xcdTI3YmQnLCAnXFx1Mjc3MyddLFxyXG4gICAgICAgIFsnXFx1MjdhZCcsICdcXHUyN2FlJywgJ1xcdTI3YWYnLCAnXFx1MjdiMSddLFxyXG4gICAgICAgIFsnXFx1MjdhOCcsICdcXHUyN2E2JywgJ1xcdTI3YTUnLCAnXFx1MjdhNyddLFxyXG4gICAgICAgIFsnXFx1Mjc5ZicsICdcXHUyN2EwJywgJ1xcdTI3YmUnLCAnXFx1MjdiMiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MjcwYycsICdcXHUyNzBiJywgJ1xcdTI3MGEnLCAnXFx1MjcwZCddLFxyXG4gICAgICAgIFsnXFx1Mjc0ZicsICdcXHUyNzUwJywgJ1xcdTI3NTEnLCAnXFx1Mjc1MiddLFxyXG4gICAgICAgIFsnXFx1MjczZicsICdcXHUyNzQwJywgJ1xcdTI3NDEnLCAnXFx1Mjc0MiddLFxyXG4gICAgICAgIFsnXFx1Mjc0NycsICdcXHUyNzQ4JywgJ1xcdTI3NGEnLCAnXFx1Mjc0YiddLFxyXG4gICAgICAgIFsnXFx1Mjc1NycsICdcXHUyNzU1JywgJ1xcdTI3NjInLCAnXFx1Mjc2MyddLFxyXG4gICAgICAgIFsnXFx1Mjc1MycsICdcXHUyNzU0JywgJ1xcdTI3YjAnLCAnXFx1MjdiZiddLFxyXG4gICAgICAgIFsnXFx1MjcwZicsICdcXHUyNzEwJywgJ1xcdTI3MGUnLCAnXFx1Mjc3NCddLFxyXG4gICAgICAgIFsnXFx1MjcxMicsICdcXHUyNzExJywgJ1xcdTI3NGQnLCAnXFx1Mjc0ZSddLFxyXG4gICAgICAgIFsnXFx1MjcwOScsICdcXHUyNzA2JywgJ1xcdTI3MDgnLCAnXFx1MjcwNyddLFxyXG4gICAgICAgIFsnXFx1Mjc1YicsICdcXHUyNzVkJywgJ1xcdTI3NjEnLCAnXFx1Mjc3NSddLFxyXG4gICAgICAgIFsnXFx1Mjc1YycsICdcXHUyNzVlJywgJ1xcdTI3NWYnLCAnXFx1Mjc2MCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGtdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1xcdTA3OGJcXHUwN2E4XFx1MDc4OFxcdTA3YWNcXHUwNzgwXFx1MDdhOFxcdTA3ODRcXHUwN2E2XFx1MDc5MFxcdTA3YjAnOiB7XHJcbiAgICAnbmFtZSc6ICdEaXZlaGknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICcoJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDdhYicsICdcXHUwMGQ3J10sXHJcbiAgICAgICAgWydcXHUwN2FlJywgJ1xcdTIwMTknXSxcclxuICAgICAgICBbJ1xcdTA3YTcnLCAnXFx1MjAxYyddLFxyXG4gICAgICAgIFsnXFx1MDdhOScsICcvJ10sXHJcbiAgICAgICAgWydcXHUwN2FkJywgJzonXSxcclxuICAgICAgICBbJ1xcdTA3OGUnLCAnXFx1MDdhNCddLFxyXG4gICAgICAgIFsnXFx1MDc4MycsICdcXHUwNzljJ10sXHJcbiAgICAgICAgWydcXHUwNzg5JywgJ1xcdTA3YTMnXSxcclxuICAgICAgICBbJ1xcdTA3OGMnLCAnXFx1MDdhMCddLFxyXG4gICAgICAgIFsnXFx1MDc4MCcsICdcXHUwNzk5J10sXHJcbiAgICAgICAgWydcXHUwNzhkJywgJ1xcdTAwZjcnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDdhOCcsICc8J10sXHJcbiAgICAgICAgWydcXHUwN2FhJywgJz4nXSxcclxuICAgICAgICBbJ1xcdTA3YjAnLCAnLicsICcsJywgJywnXSxcclxuICAgICAgICBbJ1xcdTA3YTYnLCAnXFx1MDYwYyddLFxyXG4gICAgICAgIFsnXFx1MDdhYycsICdcIiddLFxyXG4gICAgICAgIFsnXFx1MDc4OCcsICdcXHUwN2E1J10sXHJcbiAgICAgICAgWydcXHUwNzg3JywgJ1xcdTA3YTInXSxcclxuICAgICAgICBbJ1xcdTA3ODInLCAnXFx1MDc5OCddLFxyXG4gICAgICAgIFsnXFx1MDc4NicsICdcXHUwNzlhJ10sXHJcbiAgICAgICAgWydcXHUwNzhhJywgJ1xcdTA3YTEnXSxcclxuICAgICAgICBbJ1xcdWZkZjInLCAnXFx1MDYxYicsICc7JywgJzsnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsnXFx1MDc5MicsICdcXHUwNzk2J10sXHJcbiAgICAgICAgWydcXHUwNzkxJywgJ1xcdTA3OTUnXSxcclxuICAgICAgICBbJ1xcdTA3OTAnLCAnXFx1MDc4ZiddLFxyXG4gICAgICAgIFsnXFx1MDc5NCcsICdcXHUwNzk3JywgJ1xcdTIwMEQnXSxcclxuICAgICAgICBbJ1xcdTA3ODUnLCAnXFx1MDc5ZicsICdcXHUyMDBDJ10sXHJcbiAgICAgICAgWydcXHUwNzhiJywgJ1xcdTA3OWInLCAnXFx1MjAwRSddLFxyXG4gICAgICAgIFsnXFx1MDc4NCcsICdcXHUwNzlEJywgJ1xcdTIwMEYnXSxcclxuICAgICAgICBbJ1xcdTA3ODEnLCAnXFxcXCddLFxyXG4gICAgICAgIFsnXFx1MDc5MycsICdcXHUwNzllJ10sXHJcbiAgICAgICAgWydcXHUwN2FmJywgJ1xcdTA2MWYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydkdiddXHJcbiAgfSxcclxuICAnRHZvcmFrJzoge1xyXG4gICAgJ25hbWUnOiAnRHZvcmFrJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ14nXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFsnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydlJywgJ0UnXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdXHJcbiAgfSxcclxuICAnXFx1MDM5NVxcdTAzYmJcXHUwM2JiXFx1MDNiN1xcdTAzYmRcXHUwM2I5XFx1MDNiYVxcdTAzYWMnOiB7XHJcbiAgICAnbmFtZSc6ICdHcmVlaycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDBiNiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBhNCddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTAwYTYnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwMGJhJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBiMSddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDNjMicsICdeJ10sXHJcbiAgICAgICAgWydcXHUwM2I1JywgJ1xcdTAzOTUnXSxcclxuICAgICAgICBbJ1xcdTAzYzEnLCAnXFx1MDNhMSddLFxyXG4gICAgICAgIFsnXFx1MDNjNCcsICdcXHUwM2E0J10sXHJcbiAgICAgICAgWydcXHUwM2M1JywgJ1xcdTAzYTUnXSxcclxuICAgICAgICBbJ1xcdTAzYjgnLCAnXFx1MDM5OCddLFxyXG4gICAgICAgIFsnXFx1MDNiOScsICdcXHUwMzk5J10sXHJcbiAgICAgICAgWydcXHUwM2JmJywgJ1xcdTAzOWYnXSxcclxuICAgICAgICBbJ1xcdTAzYzAnLCAnXFx1MDNhMCddLFxyXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTIwMWMnXSxcclxuICAgICAgICBbJ10nLCAnfScsICdcXHUyMDFkJ10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnXFx1MDBhYyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTAzYjEnLCAnXFx1MDM5MSddLFxyXG4gICAgICAgIFsnXFx1MDNjMycsICdcXHUwM2EzJ10sXHJcbiAgICAgICAgWydcXHUwM2I0JywgJ1xcdTAzOTQnXSxcclxuICAgICAgICBbJ1xcdTAzYzYnLCAnXFx1MDNhNiddLFxyXG4gICAgICAgIFsnXFx1MDNiMycsICdcXHUwMzkzJ10sXHJcbiAgICAgICAgWydcXHUwM2I3JywgJ1xcdTAzOTcnXSxcclxuICAgICAgICBbJ1xcdTAzYmUnLCAnXFx1MDM5ZSddLFxyXG4gICAgICAgIFsnXFx1MDNiYScsICdcXHUwMzlhJ10sXHJcbiAgICAgICAgWydcXHUwM2JiJywgJ1xcdTAzOWInXSxcclxuICAgICAgICBbJ1xcdTAzODQnLCAnXFx1MDBhOCcsICdcXHUwMzg1J10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDNiNicsICdcXHUwMzk2J10sXHJcbiAgICAgICAgWydcXHUwM2M3JywgJ1xcdTAzYTcnXSxcclxuICAgICAgICBbJ1xcdTAzYzgnLCAnXFx1MDNhOCddLFxyXG4gICAgICAgIFsnXFx1MDNjOScsICdcXHUwM2E5J10sXHJcbiAgICAgICAgWydcXHUwM2IyJywgJ1xcdTAzOTInXSxcclxuICAgICAgICBbJ1xcdTAzYmQnLCAnXFx1MDM5ZCddLFxyXG4gICAgICAgIFsnXFx1MDNiYycsICdcXHUwMzljJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZWwnXVxyXG4gIH0sXHJcbiAgJ0Vlc3RpJzoge1xyXG4gICAgJ25hbWUnOiAnRXN0b25pYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAyQzcnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwQTMnLCAnXFx1MDBBMyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMEE0JywgJyQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snLCAnWyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ10nLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nLCAnfSddLFxyXG4gICAgICAgIFsnKycsICc/JywgJ1xcXFwnLCAnXFxcXCddLFxyXG4gICAgICAgIFsnXFx1MDBCNCcsICdgJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBGQycsICdcXHUwMERDJ10sXHJcbiAgICAgICAgWydcXHUwMEY1JywgJ1xcdTAwRDUnLCAnXFx1MDBBNycsICdcXHUwMEE3J10sXHJcbiAgICAgICAgWydcXCcnLCAnKicsICdcXHUwMEJEJywgJ1xcdTAwQkQnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTYxJywgJ1xcdTAxNjAnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBGNicsICdcXHUwMEQ2J10sXHJcbiAgICAgICAgWydcXHUwMEU0JywgJ1xcdTAwQzQnLCAnXicsICdeJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnfCcsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDE3RScsICdcXHUwMTdEJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZXQnXVxyXG4gIH0sXHJcbiAgJ0VzcGFcXHUwMGYxb2wnOiB7XHJcbiAgICAnbmFtZSc6ICdTcGFuaXNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMGJhJywgJ1xcdTAwYWEnLCAnXFxcXCddLFxyXG4gICAgICAgIFsnMScsICchJywgJ3wnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICdcXCcnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ34nXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDBhYyddLFxyXG4gICAgICAgIFsnNycsICcvJ10sXHJcbiAgICAgICAgWyc4JywgJygnXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICc9J10sXHJcbiAgICAgICAgWydcXCcnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MDBhMScsICdcXHUwMGJmJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ2AnLCAnXicsICdbJ10sXHJcbiAgICAgICAgWycrJywgJyonLCAnXSddLFxyXG4gICAgICAgIFsnXFx1MDBlNycsICdcXHUwMGM3JywgJ30nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMGYxJywgJ1xcdTAwZDEnXSxcclxuICAgICAgICBbJ1xcdTAwYjQnLCAnXFx1MDBhOCcsICd7J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2VzJ11cclxuICB9LFxyXG4gICdcXHUwNjJmXFx1MDYzMVxcdTA2Y2MnOiB7XHJcbiAgICAnbmFtZSc6ICdEYXJpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMDBEJywgJ1xcdTAwRjcnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDZGMScsICchJywgJ2AnXSxcclxuICAgICAgICBbJ1xcdTA2RjInLCAnXFx1MDY2QycsICdAJ10sXHJcbiAgICAgICAgWydcXHUwNkYzJywgJ1xcdTA2NkInLCAnIyddLFxyXG4gICAgICAgIFsnXFx1MDZGNCcsICdcXHUwNjBCJywgJyQnXSxcclxuICAgICAgICBbJ1xcdTA2RjUnLCAnXFx1MDY2QScsICclJ10sXHJcbiAgICAgICAgWydcXHUwNkY2JywgJ1xcdTAwRDcnLCAnXiddLFxyXG4gICAgICAgIFsnXFx1MDZGNycsICdcXHUwNjBDJywgJyYnXSxcclxuICAgICAgICBbJ1xcdTA2RjgnLCAnKicsICdcXHUyMDIyJ10sXHJcbiAgICAgICAgWydcXHUwNkY5JywgJyknLCAnXFx1MjAwRSddLFxyXG4gICAgICAgIFsnXFx1MDZGMCcsICcoJywgJ1xcdTIwMEYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDY0MCcsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA2MzYnLCAnXFx1MDY1MicsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWydcXHUwNjM1JywgJ1xcdTA2NEMnXSxcclxuICAgICAgICBbJ1xcdTA2MkInLCAnXFx1MDY0RCcsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydcXHUwNjQyJywgJ1xcdTA2NEInLCAnXFx1RkQzRSddLFxyXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjRGJywgJ1xcdUZEM0YnXSxcclxuICAgICAgICBbJ1xcdTA2M0EnLCAnXFx1MDY1MCcsICdcXHUwNjU2J10sXHJcbiAgICAgICAgWydcXHUwNjM5JywgJ1xcdTA2NEUnLCAnXFx1MDY1OSddLFxyXG4gICAgICAgIFsnXFx1MDY0NycsICdcXHUwNjUxJywgJ1xcdTA2NTUnXSxcclxuICAgICAgICBbJ1xcdTA2MkUnLCAnXScsICdcXCcnXSxcclxuICAgICAgICBbJ1xcdTA2MkQnLCAnWycsICdcIiddLFxyXG4gICAgICAgIFsnXFx1MDYyQycsICd9JywgJ1xcdTA2ODEnXSxcclxuICAgICAgICBbJ1xcdTA2ODYnLCAneycsICdcXHUwNjg1J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnPyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDYyNCcsICdcXHUwNjlBJ10sXHJcbiAgICAgICAgWydcXHUwNjMzJywgJ1xcdTA2MjYnLCAnXFx1MDZDRCddLFxyXG4gICAgICAgIFsnXFx1MDZDQycsICdcXHUwNjRBJywgJ1xcdTA2NDknXSxcclxuICAgICAgICBbJ1xcdTA2MjgnLCAnXFx1MDYyNScsICdcXHUwNkQwJ10sXHJcbiAgICAgICAgWydcXHUwNjQ0JywgJ1xcdTA2MjMnLCAnXFx1MDZCNyddLFxyXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIyJywgJ1xcdTA2NzEnXSxcclxuICAgICAgICBbJ1xcdTA2MkEnLCAnXFx1MDYyOScsICdcXHUwNjdDJ10sXHJcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTAwQkInLCAnXFx1MDZCQyddLFxyXG4gICAgICAgIFsnXFx1MDY0NScsICdcXHUwMEFCJywgJ1xcdTA2QkEnXSxcclxuICAgICAgICBbJ1xcdTA2QTknLCAnOicsICc7J10sXHJcbiAgICAgICAgWydcXHUwNkFGJywgJ1xcdTA2MUInLCAnXFx1MDZBQiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDYzOCcsICdcXHUwNjQzJywgJ1xcdTA2RDInXSxcclxuICAgICAgICBbJ1xcdTA2MzcnLCAnXFx1MDY1MycsICdcXHUwNjkxJ10sXHJcbiAgICAgICAgWydcXHUwNjMyJywgJ1xcdTA2OTgnLCAnXFx1MDY5NiddLFxyXG4gICAgICAgIFsnXFx1MDYzMScsICdcXHUwNjcwJywgJ1xcdTA2OTMnXSxcclxuICAgICAgICBbJ1xcdTA2MzAnLCAnXFx1MjAwQycsICdcXHUwNjg4J10sXHJcbiAgICAgICAgWydcXHUwNjJGJywgJ1xcdTA2NTQnLCAnXFx1MDY4OSddLFxyXG4gICAgICAgIFsnXFx1MDY3RScsICdcXHUwNjIxJywgJ1xcdTA2NzknXSxcclxuICAgICAgICBbJ1xcdTA2NDgnLCAnPicsICcsJ10sXHJcbiAgICAgICAgWycuJywgJzwnLCAnXFx1MDZDNyddLFxyXG4gICAgICAgIFsnLycsICdcXHUwNjFGJywgJ1xcdTA2QzknXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydmYS1BRiddXHJcbiAgfSxcclxuICAnXFx1MDY0MVxcdTA2MjdcXHUwNjMxXFx1MDYzM1xcdTA2Y2MnOiB7XHJcbiAgICAnbmFtZSc6ICdGYXJzaScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDY3ZScsICdcXHUwNjUxICddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwYTEnLCAnXFx1MDBiOSddLFxyXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAwYjInXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDBhNCcsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnNicsICdeJywgJ1xcdTAwYmMnXSxcclxuICAgICAgICBbJzcnLCAnJicsICdcXHUwMGJkJ10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBiZSddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUyMDE5J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBhNSddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTAwZDcnLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDYzNicsICdcXHUwNjRlJ10sXHJcbiAgICAgICAgWydcXHUwNjM1JywgJ1xcdTA2NGInXSxcclxuICAgICAgICBbJ1xcdTA2MmInLCAnXFx1MDY0ZiddLFxyXG4gICAgICAgIFsnXFx1MDY0MicsICdcXHUwNjRjJ10sXHJcbiAgICAgICAgWydcXHUwNjQxJywgJ1xcdTA2NDQnXSxcclxuICAgICAgICBbJ1xcdTA2M2EnLCAnXFx1MDYyNSddLFxyXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUyMDE4J10sXHJcbiAgICAgICAgWydcXHUwNjQ3JywgJ1xcdTAwZjcnXSxcclxuICAgICAgICBbJ1xcdTA2MmUnLCAnXFx1MDBkNyddLFxyXG4gICAgICAgIFsnXFx1MDYyZCcsICdcXHUwNjFiJ10sXHJcbiAgICAgICAgWydcXHUwNjJjJywgJzwnXSxcclxuICAgICAgICBbJ1xcdTA2ODYnLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDY5OCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDYzNCcsICdcXHUwNjUwJ10sXHJcbiAgICAgICAgWydcXHUwNjMzJywgJ1xcdTA2NGQnXSxcclxuICAgICAgICBbJ1xcdTA2NGEnLCAnXSddLFxyXG4gICAgICAgIFsnXFx1MDYyOCcsICdbJ10sXHJcbiAgICAgICAgWydcXHUwNjQ0JywgJ1xcdTA2NDQnXSxcclxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMyddLFxyXG4gICAgICAgIFsnXFx1MDYyYScsICdcXHUwNjQwJ10sXHJcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTA2MGMnXSxcclxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFxcXCddLFxyXG4gICAgICAgIFsnXFx1MDZhZicsICc6J10sXHJcbiAgICAgICAgWydcXHUwNjQzJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNjM4JywgJ34nXSxcclxuICAgICAgICBbJ1xcdTA2MzcnLCAnXFx1MDY1MiddLFxyXG4gICAgICAgIFsnXFx1MDYzMicsICd9J10sXHJcbiAgICAgICAgWydcXHUwNjMxJywgJ3snXSxcclxuICAgICAgICBbJ1xcdTA2MzAnLCAnXFx1MDY0NCddLFxyXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjIyJ10sXHJcbiAgICAgICAgWydcXHUwNjI2JywgJ1xcdTA2MjEnXSxcclxuICAgICAgICBbJ1xcdTA2NDgnLCAnLCddLFxyXG4gICAgICAgIFsnLicsICcuJ10sXHJcbiAgICAgICAgWycvJywgJ1xcdTA2MWYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZmEnXVxyXG4gIH0sXHJcbiAgJ0ZcXHUwMGY4cm95c2t0Jzoge1xyXG4gICAgJ25hbWUnOiAnRmFlcm9lc2UnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwQkQnLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMEEzJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTAwQTQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJysnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MDBCNCcsICdgJywgJ3wnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMEU1JywgJ1xcdTAwQzUnLCAnXFx1MDBBOCddLFxyXG4gICAgICAgIFsnXFx1MDBGMCcsICdcXHUwMEQwJywgJ34nXSxcclxuICAgICAgICBbJ1xcJycsICcqJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBFNicsICdcXHUwMEM2J10sXHJcbiAgICAgICAgWydcXHUwMEY4JywgJ1xcdTAwRDgnLCAnXiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEI1J10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZm8nXVxyXG4gIH0sXHJcbiAgJ0ZyYW5cXHUwMGU3YWlzJzoge1xyXG4gICAgJ25hbWUnOiAnRnJlbmNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMGIyJywgJ1xcdTAwYjMnXSxcclxuICAgICAgICBbJyYnLCAnMSddLFxyXG4gICAgICAgIFsnXFx1MDBlOScsICcyJywgJ34nXSxcclxuICAgICAgICBbJ1wiJywgJzMnLCAnIyddLFxyXG4gICAgICAgIFsnXFwnJywgJzQnLCAneyddLFxyXG4gICAgICAgIFsnKCcsICc1JywgJ1snXSxcclxuICAgICAgICBbJy0nLCAnNicsICd8J10sXHJcbiAgICAgICAgWydcXHUwMGU4JywgJzcnLCAnYCddLFxyXG4gICAgICAgIFsnXycsICc4JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ1xcdTAwZTcnLCAnOScsICdeJ10sXHJcbiAgICAgICAgWydcXHUwMGUwJywgJzAnLCAnQCddLFxyXG4gICAgICAgIFsnKScsICdcXHUwMGIwJywgJ10nXSxcclxuICAgICAgICBbJz0nLCAnKycsICd9J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXicsICdcXHUwMGE4J10sXHJcbiAgICAgICAgWyckJywgJ1xcdTAwYTMnLCAnXFx1MDBhNCddLFxyXG4gICAgICAgIFsnKicsICdcXHUwM2JjJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWydcXHUwMGY5JywgJyUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnLCcsICc/J10sXHJcbiAgICAgICAgWyc7JywgJy4nXSxcclxuICAgICAgICBbJzonLCAnLyddLFxyXG4gICAgICAgIFsnIScsICdcXHUwMGE3J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZnInXVxyXG4gIH0sXHJcbiAgJ0dhZWlsZ2UnOiB7XHJcbiAgICAnbmFtZSc6ICdJcmlzaCAvIEdhZWxpYycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICdcXHUwMEFDJywgJ1xcdTAwQTYnLCAnXFx1MDBBNiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTAwQTMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMEU5JywgJ1xcdTAwQzknXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knLCAnXFx1MDBGRCcsICdcXHUwMEREJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MDBGQScsICdcXHUwMERBJ10sXHJcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBFRCcsICdcXHUwMENEJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBGMycsICdcXHUwMEQzJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWycjJywgJ34nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBFMScsICdcXHUwMEMxJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnQCcsICdcXHUwMEI0JywgJ2AnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZ2EnLCAnZ2QnXVxyXG4gIH0sXHJcbiAgJ1xcdTBhOTdcXHUwYWMxXFx1MGE5Y1xcdTBhYjBcXHUwYWJlXFx1MGFhNFxcdTBhYzAnOiB7XHJcbiAgICAnbmFtZSc6ICdHdWphcmF0aScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWycxJywgJ1xcdTBBOEQnLCAnXFx1MEFFNyddLFxyXG4gICAgICAgIFsnMicsICdcXHUwQUM1JywgJ1xcdTBBRTgnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MEFDRFxcdTBBQjAnLCAnXFx1MEFFOSddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwQUIwXFx1MEFDRCcsICdcXHUwQUVBJ10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTBBOUNcXHUwQUNEXFx1MEE5RScsICdcXHUwQUVCJ10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTBBQTRcXHUwQUNEXFx1MEFCMCcsICdcXHUwQUVDJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTBBOTVcXHUwQUNEXFx1MEFCNycsICdcXHUwQUVEJ10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTBBQjZcXHUwQUNEXFx1MEFCMCcsICdcXHUwQUVFJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MEFFRiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTBBRTYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MEE4MyddLFxyXG4gICAgICAgIFsnXFx1MEFDMycsICdcXHUwQThCJywgJ1xcdTBBQzQnLCAnXFx1MEFFMCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MEFDQycsICdcXHUwQTk0J10sXHJcbiAgICAgICAgWydcXHUwQUM4JywgJ1xcdTBBOTAnXSxcclxuICAgICAgICBbJ1xcdTBBQkUnLCAnXFx1MEE4NiddLFxyXG4gICAgICAgIFsnXFx1MEFDMCcsICdcXHUwQTg4J10sXHJcbiAgICAgICAgWydcXHUwQUMyJywgJ1xcdTBBOEEnXSxcclxuICAgICAgICBbJ1xcdTBBQUMnLCAnXFx1MEFBRCddLFxyXG4gICAgICAgIFsnXFx1MEFCOScsICdcXHUwQTk5J10sXHJcbiAgICAgICAgWydcXHUwQTk3JywgJ1xcdTBBOTgnXSxcclxuICAgICAgICBbJ1xcdTBBQTYnLCAnXFx1MEFBNyddLFxyXG4gICAgICAgIFsnXFx1MEE5QycsICdcXHUwQTlEJ10sXHJcbiAgICAgICAgWydcXHUwQUExJywgJ1xcdTBBQTInXSxcclxuICAgICAgICBbJ1xcdTBBQkMnLCAnXFx1MEE5RSddLFxyXG4gICAgICAgIFsnXFx1MEFDOScsICdcXHUwQTkxJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MEFDQicsICdcXHUwQTkzJ10sXHJcbiAgICAgICAgWydcXHUwQUM3JywgJ1xcdTBBOEYnXSxcclxuICAgICAgICBbJ1xcdTBBQ0QnLCAnXFx1MEE4NSddLFxyXG4gICAgICAgIFsnXFx1MEFCRicsICdcXHUwQTg3J10sXHJcbiAgICAgICAgWydcXHUwQUMxJywgJ1xcdTBBODknXSxcclxuICAgICAgICBbJ1xcdTBBQUEnLCAnXFx1MEFBQiddLFxyXG4gICAgICAgIFsnXFx1MEFCMCddLFxyXG4gICAgICAgIFsnXFx1MEE5NScsICdcXHUwQTk2J10sXHJcbiAgICAgICAgWydcXHUwQUE0JywgJ1xcdTBBQTUnXSxcclxuICAgICAgICBbJ1xcdTBBOUEnLCAnXFx1MEE5QiddLFxyXG4gICAgICAgIFsnXFx1MEE5RicsICdcXHUwQUEwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbJ1xcdTBBODInLCAnXFx1MEE4MScsICcnLCAnXFx1MEFEMCddLFxyXG4gICAgICAgIFsnXFx1MEFBRScsICdcXHUwQUEzJ10sXHJcbiAgICAgICAgWydcXHUwQUE4J10sXHJcbiAgICAgICAgWydcXHUwQUI1J10sXHJcbiAgICAgICAgWydcXHUwQUIyJywgJ1xcdTBBQjMnXSxcclxuICAgICAgICBbJ1xcdTBBQjgnLCAnXFx1MEFCNiddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwQUI3J10sXHJcbiAgICAgICAgWycuJywgJ1xcdTA5NjQnLCAnXFx1MDk2NScsICdcXHUwQUJEJ10sXHJcbiAgICAgICAgWydcXHUwQUFGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZ3UnXVxyXG4gIH0sXHJcbiAgJ1xcdTA1ZTJcXHUwNWQxXFx1MDVlOFxcdTA1ZDlcXHUwNWVhJzoge1xyXG4gICAgJ25hbWUnOiAnSGVicmV3JyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWyd+JywgJ2AnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUyMGFhJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICcoJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnLycsICdRJ10sXHJcbiAgICAgICAgWydcXCcnLCAnVyddLFxyXG4gICAgICAgIFsnXFx1MDVlNycsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ1xcdTA1ZTgnLCAnUiddLFxyXG4gICAgICAgIFsnXFx1MDVkMCcsICdUJ10sXHJcbiAgICAgICAgWydcXHUwNWQ4JywgJ1knXSxcclxuICAgICAgICBbJ1xcdTA1ZDUnLCAnVScsICdcXHUwNWYwJ10sXHJcbiAgICAgICAgWydcXHUwNWRmJywgJ0knXSxcclxuICAgICAgICBbJ1xcdTA1ZGQnLCAnTyddLFxyXG4gICAgICAgIFsnXFx1MDVlNCcsICdQJ10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDVlOScsICdBJ10sXHJcbiAgICAgICAgWydcXHUwNWQzJywgJ1MnXSxcclxuICAgICAgICBbJ1xcdTA1ZDInLCAnRCddLFxyXG4gICAgICAgIFsnXFx1MDVkYicsICdGJ10sXHJcbiAgICAgICAgWydcXHUwNWUyJywgJ0cnXSxcclxuICAgICAgICBbJ1xcdTA1ZDknLCAnSCcsICdcXHUwNWYyJ10sXHJcbiAgICAgICAgWydcXHUwNWQ3JywgJ0onLCAnXFx1MDVmMSddLFxyXG4gICAgICAgIFsnXFx1MDVkYycsICdLJ10sXHJcbiAgICAgICAgWydcXHUwNWRhJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTA1ZTMnLCAnOiddLFxyXG4gICAgICAgIFsnLCcsICdcIiddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydbJywgJ3snXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDVkNicsICdaJ10sXHJcbiAgICAgICAgWydcXHUwNWUxJywgJ1gnXSxcclxuICAgICAgICBbJ1xcdTA1ZDEnLCAnQyddLFxyXG4gICAgICAgIFsnXFx1MDVkNCcsICdWJ10sXHJcbiAgICAgICAgWydcXHUwNWUwJywgJ0InXSxcclxuICAgICAgICBbJ1xcdTA1ZGUnLCAnTiddLFxyXG4gICAgICAgIFsnXFx1MDVlNicsICdNJ10sXHJcbiAgICAgICAgWydcXHUwNWVhJywgJz4nXSxcclxuICAgICAgICBbJ1xcdTA1ZTUnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaGUnXVxyXG4gIH0sXHJcbiAgJ1xcdTA5MjZcXHUwOTQ3XFx1MDkzNVxcdTA5MjhcXHUwOTNlXFx1MDkxN1xcdTA5MzBcXHUwOTQwJzoge1xyXG4gICAgJ25hbWUnOiAnRGV2YW5hZ2FyaScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDk0QScsICdcXHUwOTEyJ10sXHJcbiAgICAgICAgWycxJywgJ1xcdTA5MEQnLCAnXFx1MDk2NyddLFxyXG4gICAgICAgIFsnMicsICdcXHUwOTQ1JywgJ1xcdTA5NjgnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MDk0RFxcdTA5MzAnLCAnXFx1MDk2OSddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwOTMwXFx1MDk0RCcsICdcXHUwOTZBJ10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTA5MUNcXHUwOTREXFx1MDkxRScsICdcXHUwOTZCJ10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTA5MjRcXHUwOTREXFx1MDkzMCcsICdcXHUwOTZDJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTA5MTVcXHUwOTREXFx1MDkzNycsICdcXHUwOTZEJ10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTA5MzZcXHUwOTREXFx1MDkzMCcsICdcXHUwOTZFJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDk2RiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTA5NjYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDkwMyddLFxyXG4gICAgICAgIFsnXFx1MDk0MycsICdcXHUwOTBCJywgJ1xcdTA5NDQnLCAnXFx1MDk2MCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDk0QycsICdcXHUwOTE0J10sXHJcbiAgICAgICAgWydcXHUwOTQ4JywgJ1xcdTA5MTAnXSxcclxuICAgICAgICBbJ1xcdTA5M0UnLCAnXFx1MDkwNiddLFxyXG4gICAgICAgIFsnXFx1MDk0MCcsICdcXHUwOTA4JywgJ1xcdTA5NjMnLCAnXFx1MDk2MSddLFxyXG4gICAgICAgIFsnXFx1MDk0MicsICdcXHUwOTBBJ10sXHJcbiAgICAgICAgWydcXHUwOTJDJywgJ1xcdTA5MkQnXSxcclxuICAgICAgICBbJ1xcdTA5MzknLCAnXFx1MDkxOSddLFxyXG4gICAgICAgIFsnXFx1MDkxNycsICdcXHUwOTE4JywgJ1xcdTA5NUEnXSxcclxuICAgICAgICBbJ1xcdTA5MjYnLCAnXFx1MDkyNyddLFxyXG4gICAgICAgIFsnXFx1MDkxQycsICdcXHUwOTFEJywgJ1xcdTA5NUInXSxcclxuICAgICAgICBbJ1xcdTA5MjEnLCAnXFx1MDkyMicsICdcXHUwOTVDJywgJ1xcdTA5NUQnXSxcclxuICAgICAgICBbJ1xcdTA5M0MnLCAnXFx1MDkxRSddLFxyXG4gICAgICAgIFsnXFx1MDk0OScsICdcXHUwOTExJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDk0QicsICdcXHUwOTEzJ10sXHJcbiAgICAgICAgWydcXHUwOTQ3JywgJ1xcdTA5MEYnXSxcclxuICAgICAgICBbJ1xcdTA5NEQnLCAnXFx1MDkwNSddLFxyXG4gICAgICAgIFsnXFx1MDkzRicsICdcXHUwOTA3JywgJ1xcdTA5NjInLCAnXFx1MDkwQyddLFxyXG4gICAgICAgIFsnXFx1MDk0MScsICdcXHUwOTA5J10sXHJcbiAgICAgICAgWydcXHUwOTJBJywgJ1xcdTA5MkInLCAnJywgJ1xcdTA5NUUnXSxcclxuICAgICAgICBbJ1xcdTA5MzAnLCAnXFx1MDkzMSddLFxyXG4gICAgICAgIFsnXFx1MDkxNScsICdcXHUwOTE2JywgJ1xcdTA5NTgnLCAnXFx1MDk1OSddLFxyXG4gICAgICAgIFsnXFx1MDkyNCcsICdcXHUwOTI1J10sXHJcbiAgICAgICAgWydcXHUwOTFBJywgJ1xcdTA5MUInLCAnXFx1MDk1MiddLFxyXG4gICAgICAgIFsnXFx1MDkxRicsICdcXHUwOTIwJywgJycsICdcXHUwOTUxJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwOTQ2JywgJ1xcdTA5MEUnLCAnXFx1MDk1MyddLFxyXG4gICAgICAgIFsnXFx1MDkwMicsICdcXHUwOTAxJywgJycsICdcXHUwOTUwJ10sXHJcbiAgICAgICAgWydcXHUwOTJFJywgJ1xcdTA5MjMnLCAnXFx1MDk1NCddLFxyXG4gICAgICAgIFsnXFx1MDkyOCcsICdcXHUwOTI5J10sXHJcbiAgICAgICAgWydcXHUwOTM1JywgJ1xcdTA5MzQnXSxcclxuICAgICAgICBbJ1xcdTA5MzInLCAnXFx1MDkzMyddLFxyXG4gICAgICAgIFsnXFx1MDkzOCcsICdcXHUwOTM2J10sXHJcbiAgICAgICAgWycsJywgJ1xcdTA5MzcnLCAnXFx1MDk3MCddLFxyXG4gICAgICAgIFsnLicsICdcXHUwOTY0JywgJ1xcdTA5NjUnLCAnXFx1MDkzRCddLFxyXG4gICAgICAgIFsnXFx1MDkyRicsICdcXHUwOTVGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaGktREVWQSddXHJcbiAgfSxcclxuICAnXFx1MDkzOVxcdTA5M2ZcXHUwOTAyXFx1MDkyNlxcdTA5NDAnOiB7XHJcbiAgICAnbmFtZSc6ICdIaW5kaScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjAwZCcsICdcXHUyMDBjJywgJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICdcXHUwOTBEJywgJ1xcdTA5NjcnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcXHUwOTQ1JywgJ1xcdTA5NjgnLCAnQCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwOTREXFx1MDkzMCcsICdcXHUwOTY5JywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDkzMFxcdTA5NEQnLCAnXFx1MDk2QScsICckJ10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTA5MUNcXHUwOTREXFx1MDkxRScsICdcXHUwOTZCJywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXFx1MDkyNFxcdTA5NERcXHUwOTMwJywgJ1xcdTA5NkMnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICdcXHUwOTE1XFx1MDk0RFxcdTA5MzcnLCAnXFx1MDk2RCcsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTA5MzZcXHUwOTREXFx1MDkzMCcsICdcXHUwOTZFJywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwOTZGJywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwOTY2JywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDkwMycsICctJywgJ18nXSxcclxuICAgICAgICBbJ1xcdTA5NDMnLCAnXFx1MDkwQicsICc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA5NEMnLCAnXFx1MDkxNCddLFxyXG4gICAgICAgIFsnXFx1MDk0OCcsICdcXHUwOTEwJ10sXHJcbiAgICAgICAgWydcXHUwOTNFJywgJ1xcdTA5MDYnXSxcclxuICAgICAgICBbJ1xcdTA5NDAnLCAnXFx1MDkwOCddLFxyXG4gICAgICAgIFsnXFx1MDk0MicsICdcXHUwOTBBJ10sXHJcbiAgICAgICAgWydcXHUwOTJDJywgJ1xcdTA5MkQnXSxcclxuICAgICAgICBbJ1xcdTA5MzknLCAnXFx1MDkxOSddLFxyXG4gICAgICAgIFsnXFx1MDkxNycsICdcXHUwOTE4J10sXHJcbiAgICAgICAgWydcXHUwOTI2JywgJ1xcdTA5MjcnXSxcclxuICAgICAgICBbJ1xcdTA5MUMnLCAnXFx1MDkxRCddLFxyXG4gICAgICAgIFsnXFx1MDkyMScsICdcXHUwOTIyJywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnXFx1MDkzQycsICdcXHUwOTFFJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDk0OScsICdcXHUwOTExJywgJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA5NEInLCAnXFx1MDkxMyddLFxyXG4gICAgICAgIFsnXFx1MDk0NycsICdcXHUwOTBGJ10sXHJcbiAgICAgICAgWydcXHUwOTREJywgJ1xcdTA5MDUnXSxcclxuICAgICAgICBbJ1xcdTA5M0YnLCAnXFx1MDkwNyddLFxyXG4gICAgICAgIFsnXFx1MDk0MScsICdcXHUwOTA5J10sXHJcbiAgICAgICAgWydcXHUwOTJBJywgJ1xcdTA5MkInXSxcclxuICAgICAgICBbJ1xcdTA5MzAnLCAnXFx1MDkzMSddLFxyXG4gICAgICAgIFsnXFx1MDkxNScsICdcXHUwOTE2J10sXHJcbiAgICAgICAgWydcXHUwOTI0JywgJ1xcdTA5MjUnXSxcclxuICAgICAgICBbJ1xcdTA5MUEnLCAnXFx1MDkxQicsICc7JywgJzonXSxcclxuICAgICAgICBbJ1xcdTA5MUYnLCAnXFx1MDkyMCcsICdcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJyddLFxyXG4gICAgICAgIFsnXFx1MDkwMicsICdcXHUwOTAxJywgJycsICdcXHUwOTUwJ10sXHJcbiAgICAgICAgWydcXHUwOTJFJywgJ1xcdTA5MjMnXSxcclxuICAgICAgICBbJ1xcdTA5MjgnXSxcclxuICAgICAgICBbJ1xcdTA5MzUnXSxcclxuICAgICAgICBbJ1xcdTA5MzInLCAnXFx1MDkzMyddLFxyXG4gICAgICAgIFsnXFx1MDkzOCcsICdcXHUwOTM2J10sXHJcbiAgICAgICAgWycsJywgJ1xcdTA5MzcnLCAnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJ1xcdTA5NjQnLCAnLicsICc+J10sXHJcbiAgICAgICAgWydcXHUwOTJGJywgJ1xcdTA5NUYnLCAnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaGknXVxyXG4gIH0sXHJcbiAgJ1xcdTA1NDBcXHUwNTYxXFx1MDU3NVxcdTA1NjVcXHUwNTgwXFx1MDU2NVxcdTA1NzYgXFx1MDU2MVxcdTA1ODBcXHUwNTY1XFx1MDU4MlxcdTA1NzRcXHUwNTc4XFx1MDU4MlxcdTA1N2ZcXHUwNTg0Jzoge1xyXG4gICAgJ25hbWUnOiAnV2VzdGVybiBBcm1lbmlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDU1RCcsICdcXHUwNTVDJ10sXHJcbiAgICAgICAgWyc6JywgJzEnXSxcclxuICAgICAgICBbJ1xcdTA1NzEnLCAnXFx1MDU0MSddLFxyXG4gICAgICAgIFsnXFx1MDU3NScsICdcXHUwNTQ1J10sXHJcbiAgICAgICAgWydcXHUwNTVCJywgJzMnXSxcclxuICAgICAgICBbJywnLCAnNCddLFxyXG4gICAgICAgIFsnLScsICc5J10sXHJcbiAgICAgICAgWycuJywgJ1xcdTA1ODcnXSxcclxuICAgICAgICBbJ1xcdTAwQUInLCAnKCddLFxyXG4gICAgICAgIFsnXFx1MDBCQicsICcpJ10sXHJcbiAgICAgICAgWydcXHUwNTg1JywgJ1xcdTA1NTUnXSxcclxuICAgICAgICBbJ1xcdTA1N0MnLCAnXFx1MDU0QyddLFxyXG4gICAgICAgIFsnXFx1MDU2QScsICdcXHUwNTNBJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNTZEJywgJ1xcdTA1M0QnXSxcclxuICAgICAgICBbJ1xcdTA1N0UnLCAnXFx1MDU0RSddLFxyXG4gICAgICAgIFsnXFx1MDU2NycsICdcXHUwNTM3J10sXHJcbiAgICAgICAgWydcXHUwNTgwJywgJ1xcdTA1NTAnXSxcclxuICAgICAgICBbJ1xcdTA1NjQnLCAnXFx1MDUzNCddLFxyXG4gICAgICAgIFsnXFx1MDU2NScsICdcXHUwNTM1J10sXHJcbiAgICAgICAgWydcXHUwNTY4JywgJ1xcdTA1MzgnXSxcclxuICAgICAgICBbJ1xcdTA1NkInLCAnXFx1MDUzQiddLFxyXG4gICAgICAgIFsnXFx1MDU3OCcsICdcXHUwNTQ4J10sXHJcbiAgICAgICAgWydcXHUwNTYyJywgJ1xcdTA1MzInXSxcclxuICAgICAgICBbJ1xcdTA1NzknLCAnXFx1MDU0OSddLFxyXG4gICAgICAgIFsnXFx1MDU3QicsICdcXHUwNTRCJ10sXHJcbiAgICAgICAgWydcXCcnLCAnXFx1MDU1RSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA1NjEnLCAnXFx1MDUzMSddLFxyXG4gICAgICAgIFsnXFx1MDU3RCcsICdcXHUwNTREJ10sXHJcbiAgICAgICAgWydcXHUwNTdGJywgJ1xcdTA1NEYnXSxcclxuICAgICAgICBbJ1xcdTA1ODYnLCAnXFx1MDU1NiddLFxyXG4gICAgICAgIFsnXFx1MDU2RicsICdcXHUwNTNGJ10sXHJcbiAgICAgICAgWydcXHUwNTcwJywgJ1xcdTA1NDAnXSxcclxuICAgICAgICBbJ1xcdTA1NzMnLCAnXFx1MDU0MyddLFxyXG4gICAgICAgIFsnXFx1MDU4NCcsICdcXHUwNTU0J10sXHJcbiAgICAgICAgWydcXHUwNTZDJywgJ1xcdTA1M0MnXSxcclxuICAgICAgICBbJ1xcdTA1NjknLCAnXFx1MDUzOSddLFxyXG4gICAgICAgIFsnXFx1MDU4MycsICdcXHUwNTUzJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNTY2JywgJ1xcdTA1MzYnXSxcclxuICAgICAgICBbJ1xcdTA1ODEnLCAnXFx1MDU1MSddLFxyXG4gICAgICAgIFsnXFx1MDU2MycsICdcXHUwNTMzJ10sXHJcbiAgICAgICAgWydcXHUwNTgyJywgJ1xcdTA1NTInXSxcclxuICAgICAgICBbJ1xcdTA1N0EnLCAnXFx1MDU0QSddLFxyXG4gICAgICAgIFsnXFx1MDU3NicsICdcXHUwNTQ2J10sXHJcbiAgICAgICAgWydcXHUwNTc0JywgJ1xcdTA1NDQnXSxcclxuICAgICAgICBbJ1xcdTA1NzcnLCAnXFx1MDU0NyddLFxyXG4gICAgICAgIFsnXFx1MDU3MicsICdcXHUwNTQyJ10sXHJcbiAgICAgICAgWydcXHUwNTZFJywgJ1xcdTA1M0UnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2h5LUFSRVZNQVRBJ11cclxuICB9LFxyXG4gICdcXHUwNTQwXFx1MDU2MVxcdTA1NzVcXHUwNTY1XFx1MDU4MFxcdTA1NjVcXHUwNTc2IFxcdTA1NjFcXHUwNTgwXFx1MDU2NVxcdTA1ODJcXHUwNTY1XFx1MDU2Y1xcdTA1ODQnOiB7XHJcbiAgICAnbmFtZSc6ICdFYXN0ZXJuIEFybWVuaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNTVEJywgJ1xcdTA1NUMnXSxcclxuICAgICAgICBbJzonLCAnMSddLFxyXG4gICAgICAgIFsnXFx1MDU3MScsICdcXHUwNTQxJ10sXHJcbiAgICAgICAgWydcXHUwNTc1JywgJ1xcdTA1NDUnXSxcclxuICAgICAgICBbJ1xcdTA1NUInLCAnMyddLFxyXG4gICAgICAgIFsnLCcsICc0J10sXHJcbiAgICAgICAgWyctJywgJzknXSxcclxuICAgICAgICBbJy4nLCAnXFx1MDU4NyddLFxyXG4gICAgICAgIFsnXFx1MDBBQicsICcoJ10sXHJcbiAgICAgICAgWydcXHUwMEJCJywgJyknXSxcclxuICAgICAgICBbJ1xcdTA1ODUnLCAnXFx1MDU1NSddLFxyXG4gICAgICAgIFsnXFx1MDU3QycsICdcXHUwNTRDJ10sXHJcbiAgICAgICAgWydcXHUwNTZBJywgJ1xcdTA1M0EnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA1NkQnLCAnXFx1MDUzRCddLFxyXG4gICAgICAgIFsnXFx1MDU4MicsICdcXHUwNTUyJ10sXHJcbiAgICAgICAgWydcXHUwNTY3JywgJ1xcdTA1MzcnXSxcclxuICAgICAgICBbJ1xcdTA1ODAnLCAnXFx1MDU1MCddLFxyXG4gICAgICAgIFsnXFx1MDU3RicsICdcXHUwNTRGJ10sXHJcbiAgICAgICAgWydcXHUwNTY1JywgJ1xcdTA1MzUnXSxcclxuICAgICAgICBbJ1xcdTA1NjgnLCAnXFx1MDUzOCddLFxyXG4gICAgICAgIFsnXFx1MDU2QicsICdcXHUwNTNCJ10sXHJcbiAgICAgICAgWydcXHUwNTc4JywgJ1xcdTA1NDgnXSxcclxuICAgICAgICBbJ1xcdTA1N0EnLCAnXFx1MDU0QSddLFxyXG4gICAgICAgIFsnXFx1MDU3OScsICdcXHUwNTQ5J10sXHJcbiAgICAgICAgWydcXHUwNTdCJywgJ1xcdTA1NEInXSxcclxuICAgICAgICBbJ1xcJycsICdcXHUwNTVFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDU2MScsICdcXHUwNTMxJ10sXHJcbiAgICAgICAgWydcXHUwNTdEJywgJ1xcdTA1NEQnXSxcclxuICAgICAgICBbJ1xcdTA1NjQnLCAnXFx1MDUzNCddLFxyXG4gICAgICAgIFsnXFx1MDU4NicsICdcXHUwNTU2J10sXHJcbiAgICAgICAgWydcXHUwNTg0JywgJ1xcdTA1NTQnXSxcclxuICAgICAgICBbJ1xcdTA1NzAnLCAnXFx1MDU0MCddLFxyXG4gICAgICAgIFsnXFx1MDU3MycsICdcXHUwNTQzJ10sXHJcbiAgICAgICAgWydcXHUwNTZGJywgJ1xcdTA1M0YnXSxcclxuICAgICAgICBbJ1xcdTA1NkMnLCAnXFx1MDUzQyddLFxyXG4gICAgICAgIFsnXFx1MDU2OScsICdcXHUwNTM5J10sXHJcbiAgICAgICAgWydcXHUwNTgzJywgJ1xcdTA1NTMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA1NjYnLCAnXFx1MDUzNiddLFxyXG4gICAgICAgIFsnXFx1MDU4MScsICdcXHUwNTUxJ10sXHJcbiAgICAgICAgWydcXHUwNTYzJywgJ1xcdTA1MzMnXSxcclxuICAgICAgICBbJ1xcdTA1N0UnLCAnXFx1MDU0RSddLFxyXG4gICAgICAgIFsnXFx1MDU2MicsICdcXHUwNTMyJ10sXHJcbiAgICAgICAgWydcXHUwNTc2JywgJ1xcdTA1NDYnXSxcclxuICAgICAgICBbJ1xcdTA1NzQnLCAnXFx1MDU0NCddLFxyXG4gICAgICAgIFsnXFx1MDU3NycsICdcXHUwNTQ3J10sXHJcbiAgICAgICAgWydcXHUwNTcyJywgJ1xcdTA1NDInXSxcclxuICAgICAgICBbJ1xcdTA1NkUnLCAnXFx1MDUzRSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaHknXVxyXG4gIH0sXHJcbiAgJ1xcdTAwY2RzbGVuc2thJzoge1xyXG4gICAgJ25hbWUnOiAnSWNlbGFuZGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMEIwJywgJ1xcdTAwQTgnLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJ1xcdTAwRjYnLCAnXFx1MDBENicsICdcXFxcJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdAJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRjAnLCAnXFx1MDBEMCddLFxyXG4gICAgICAgIFsnXFwnJywgJz8nLCAnfiddLFxyXG4gICAgICAgIFsnKycsICcqJywgJ2AnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMEU2JywgJ1xcdTAwQzYnXSxcclxuICAgICAgICBbJ1xcdTAwQjQnLCAnXFwnJywgJ14nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBCNSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJ1xcdTAwRkUnLCAnXFx1MDBERSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2lzJ11cclxuICB9LFxyXG4gICdJdGFsaWFubyc6IHtcclxuICAgICduYW1lJzogJ0l0YWxpYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJ10sXHJcbiAgICAgICAgWyc4JywgJygnXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICc9J10sXHJcbiAgICAgICAgWydcXCcnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MDBlYycsICdeJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBlOCcsICdcXHUwMGU5JywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnKycsICcqJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDBmOScsICdcXHUwMGE3J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBmMicsICdcXHUwMGU3JywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTAwZTAnLCAnXFx1MDBiMCcsICcjJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2l0J11cclxuICB9LFxyXG4gICdcXHU2NWU1XFx1NjcyY1xcdThhOWUnOiB7XHJcbiAgICAnbmFtZSc6ICdKYXBhbmVzZSBIaXJhZ2FuYS9LYXRha2FuYScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1ZmY1ZSddLFxyXG4gICAgICAgIFsnXFx1MzA2YycsICdcXHUzMGNjJ10sXHJcbiAgICAgICAgWydcXHUzMDc1JywgJ1xcdTMwZDUnXSxcclxuICAgICAgICBbJ1xcdTMwNDInLCAnXFx1MzBhMicsICdcXHUzMDQxJywgJ1xcdTMwYTEnXSxcclxuICAgICAgICBbJ1xcdTMwNDYnLCAnXFx1MzBhNicsICdcXHUzMDQ1JywgJ1xcdTMwYTUnXSxcclxuICAgICAgICBbJ1xcdTMwNDgnLCAnXFx1MzBhOCcsICdcXHUzMDQ3JywgJ1xcdTMwYTcnXSxcclxuICAgICAgICBbJ1xcdTMwNGEnLCAnXFx1MzBhYScsICdcXHUzMDQ5JywgJ1xcdTMwYTknXSxcclxuICAgICAgICBbJ1xcdTMwODQnLCAnXFx1MzBlNCcsICdcXHUzMDgzJywgJ1xcdTMwZTMnXSxcclxuICAgICAgICBbJ1xcdTMwODYnLCAnXFx1MzBlNicsICdcXHUzMDg1JywgJ1xcdTMwZTUnXSxcclxuICAgICAgICBbJ1xcdTMwODgnLCAnXFx1MzBlOCcsICdcXHUzMDg3JywgJ1xcdTMwZTcnXSxcclxuICAgICAgICBbJ1xcdTMwOGYnLCAnXFx1MzBlZicsICdcXHUzMDkyJywgJ1xcdTMwZjInXSxcclxuICAgICAgICBbJ1xcdTMwN2InLCAnXFx1MzBkYicsICdcXHUzMGZjJywgJ1xcdWZmMWQnXSxcclxuICAgICAgICBbJ1xcdTMwNzgnLCAnXFx1MzBkOCcsICdcXHVmZjNlJywgJ1xcdWZmNWUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTMwNWYnLCAnXFx1MzBiZiddLFxyXG4gICAgICAgIFsnXFx1MzA2NicsICdcXHUzMGM2J10sXHJcbiAgICAgICAgWydcXHUzMDQ0JywgJ1xcdTMwYTQnLCAnXFx1MzA0MycsICdcXHUzMGEzJ10sXHJcbiAgICAgICAgWydcXHUzMDU5JywgJ1xcdTMwYjknXSxcclxuICAgICAgICBbJ1xcdTMwNGInLCAnXFx1MzBhYiddLFxyXG4gICAgICAgIFsnXFx1MzA5MycsICdcXHUzMGYzJ10sXHJcbiAgICAgICAgWydcXHUzMDZhJywgJ1xcdTMwY2EnXSxcclxuICAgICAgICBbJ1xcdTMwNmInLCAnXFx1MzBjYiddLFxyXG4gICAgICAgIFsnXFx1MzA4OScsICdcXHUzMGU5J10sXHJcbiAgICAgICAgWydcXHUzMDViJywgJ1xcdTMwYmInXSxcclxuICAgICAgICBbJ1xcdTMwMDEnLCAnXFx1MzAwMScsICdcXHVmZjIwJywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJ1xcdTMwMDInLCAnXFx1MzAwMicsICdcXHUzMDBjJywgJ1xcdWZmNWInXSxcclxuICAgICAgICBbJ1xcdWZmZTUnLCAnJywgJycsICdcXHVmZjBhJ10sXHJcbiAgICAgICAgWydcXHUzMDlCJywgJ1wiJywgJ1xcdWZmZTUnLCAnXFx1ZmY1YyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTMwNjEnLCAnXFx1MzBjMSddLFxyXG4gICAgICAgIFsnXFx1MzA2OCcsICdcXHUzMGM4J10sXHJcbiAgICAgICAgWydcXHUzMDU3JywgJ1xcdTMwYjcnXSxcclxuICAgICAgICBbJ1xcdTMwNmYnLCAnXFx1MzBjZiddLFxyXG4gICAgICAgIFsnXFx1MzA0ZCcsICdcXHUzMGFkJ10sXHJcbiAgICAgICAgWydcXHUzMDRmJywgJ1xcdTMwYWYnXSxcclxuICAgICAgICBbJ1xcdTMwN2UnLCAnXFx1MzBkZSddLFxyXG4gICAgICAgIFsnXFx1MzA2ZScsICdcXHUzMGNlJ10sXHJcbiAgICAgICAgWydcXHUzMDhjJywgJ1xcdTMwZWMnLCAnXFx1ZmYxYicsICdcXHVmZjBiJ10sXHJcbiAgICAgICAgWydcXHUzMDUxJywgJ1xcdTMwYjEnLCAnXFx1ZmYxYScsICdcXHUzMGY2J10sXHJcbiAgICAgICAgWydcXHUzMDgwJywgJ1xcdTMwZTAnLCAnXFx1MzAwZCcsICdcXHVmZjVkJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUzMDY0JywgJ1xcdTMwYzQnXSxcclxuICAgICAgICBbJ1xcdTMwNTUnLCAnXFx1MzBiNSddLFxyXG4gICAgICAgIFsnXFx1MzA1ZCcsICdcXHUzMGJkJ10sXHJcbiAgICAgICAgWydcXHUzMDcyJywgJ1xcdTMwZDInXSxcclxuICAgICAgICBbJ1xcdTMwNTMnLCAnXFx1MzBiMyddLFxyXG4gICAgICAgIFsnXFx1MzA3ZicsICdcXHUzMGRmJ10sXHJcbiAgICAgICAgWydcXHUzMDgyJywgJ1xcdTMwZTInXSxcclxuICAgICAgICBbJ1xcdTMwNmQnLCAnXFx1MzBjZCcsICdcXHUzMDAxJywgJ1xcdWZmMWMnXSxcclxuICAgICAgICBbJ1xcdTMwOGInLCAnXFx1MzBlYicsICdcXHUzMDAyJywgJ1xcdWZmMWUnXSxcclxuICAgICAgICBbJ1xcdTMwODEnLCAnXFx1MzBlMScsICdcXHUzMGZiJywgJ1xcdWZmMWYnXSxcclxuICAgICAgICBbJ1xcdTMwOGQnLCAnXFx1MzBlZCcsICcnLCAnXFx1ZmYzZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGtdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnamEnXVxyXG4gIH0sXHJcbiAgJ1xcdTEwZTVcXHUxMGQwXFx1MTBlMFxcdTEwZDdcXHUxMGUzXFx1MTBkYVxcdTEwZDgnOiB7XHJcbiAgICAnbmFtZSc6ICdHZW9yZ2lhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjAxRScsICdcXHUyMDFDJ10sXHJcbiAgICAgICAgWychJywgJzEnXSxcclxuICAgICAgICBbJz8nLCAnMiddLFxyXG4gICAgICAgIFsnXFx1MjExNicsICczJ10sXHJcbiAgICAgICAgWydcXHUwMEE3JywgJzQnXSxcclxuICAgICAgICBbJyUnLCAnNSddLFxyXG4gICAgICAgIFsnOicsICc2J10sXHJcbiAgICAgICAgWycuJywgJzcnXSxcclxuICAgICAgICBbJzsnLCAnOCddLFxyXG4gICAgICAgIFsnLCcsICc5J10sXHJcbiAgICAgICAgWycvJywgJzAnXSxcclxuICAgICAgICBbJ1xcdTIwMTMnLCAnLSddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUxMEU2JywgJ1xcdTEwRTYnXSxcclxuICAgICAgICBbJ1xcdTEwRUYnLCAnXFx1MTBFRiddLFxyXG4gICAgICAgIFsnXFx1MTBFMycsICdcXHUxMEUzJ10sXHJcbiAgICAgICAgWydcXHUxMEQ5JywgJ1xcdTEwRDknXSxcclxuICAgICAgICBbJ1xcdTEwRDQnLCAnXFx1MTBENCcsICdcXHUxMEYxJ10sXHJcbiAgICAgICAgWydcXHUxMERDJywgJ1xcdTEwREMnXSxcclxuICAgICAgICBbJ1xcdTEwRDInLCAnXFx1MTBEMiddLFxyXG4gICAgICAgIFsnXFx1MTBFOCcsICdcXHUxMEU4J10sXHJcbiAgICAgICAgWydcXHUxMEVDJywgJ1xcdTEwRUMnXSxcclxuICAgICAgICBbJ1xcdTEwRDYnLCAnXFx1MTBENiddLFxyXG4gICAgICAgIFsnXFx1MTBFRScsICdcXHUxMEVFJywgJ1xcdTEwRjQnXSxcclxuICAgICAgICBbJ1xcdTEwRUEnLCAnXFx1MTBFQSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MTBFNCcsICdcXHUxMEU0JywgJ1xcdTEwRjYnXSxcclxuICAgICAgICBbJ1xcdTEwRUInLCAnXFx1MTBFQiddLFxyXG4gICAgICAgIFsnXFx1MTBENScsICdcXHUxMEQ1JywgJ1xcdTEwRjMnXSxcclxuICAgICAgICBbJ1xcdTEwRDcnLCAnXFx1MTBENyddLFxyXG4gICAgICAgIFsnXFx1MTBEMCcsICdcXHUxMEQwJ10sXHJcbiAgICAgICAgWydcXHUxMERFJywgJ1xcdTEwREUnXSxcclxuICAgICAgICBbJ1xcdTEwRTAnLCAnXFx1MTBFMCddLFxyXG4gICAgICAgIFsnXFx1MTBERCcsICdcXHUxMEREJ10sXHJcbiAgICAgICAgWydcXHUxMERBJywgJ1xcdTEwREEnXSxcclxuICAgICAgICBbJ1xcdTEwRDMnLCAnXFx1MTBEMyddLFxyXG4gICAgICAgIFsnXFx1MTBERicsICdcXHUxMERGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUxMEVEJywgJ1xcdTEwRUQnXSxcclxuICAgICAgICBbJ1xcdTEwRTknLCAnXFx1MTBFOSddLFxyXG4gICAgICAgIFsnXFx1MTBFNycsICdcXHUxMEU3J10sXHJcbiAgICAgICAgWydcXHUxMEUxJywgJ1xcdTEwRTEnXSxcclxuICAgICAgICBbJ1xcdTEwREInLCAnXFx1MTBEQiddLFxyXG4gICAgICAgIFsnXFx1MTBEOCcsICdcXHUxMEQ4JywgJ1xcdTEwRjInXSxcclxuICAgICAgICBbJ1xcdTEwRTInLCAnXFx1MTBFMiddLFxyXG4gICAgICAgIFsnXFx1MTBFNScsICdcXHUxMEU1J10sXHJcbiAgICAgICAgWydcXHUxMEQxJywgJ1xcdTEwRDEnXSxcclxuICAgICAgICBbJ1xcdTEwRjAnLCAnXFx1MTBGMCcsICdcXHUxMEY1J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsna2EnXVxyXG4gIH0sXHJcbiAgJ1xcdTA0OWFcXHUwNDMwXFx1MDQzN1xcdTA0MzBcXHUwNDliXFx1MDQ0OFxcdTA0MzAnOiB7XHJcbiAgICAnbmFtZSc6ICdLYXpha2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJygnLCAnKSddLFxyXG4gICAgICAgIFsnXCInLCAnISddLFxyXG4gICAgICAgIFsnXFx1MDRkOScsICdcXHUwNGQ4J10sXHJcbiAgICAgICAgWydcXHUwNDU2JywgJ1xcdTA0MDYnXSxcclxuICAgICAgICBbJ1xcdTA0YTMnLCAnXFx1MDRhMiddLFxyXG4gICAgICAgIFsnXFx1MDQ5MycsICdcXHUwNDkyJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDRhZicsICdcXHUwNGFlJ10sXHJcbiAgICAgICAgWydcXHUwNGIxJywgJ1xcdTA0YjAnXSxcclxuICAgICAgICBbJ1xcdTA0OWInLCAnXFx1MDQ5YSddLFxyXG4gICAgICAgIFsnXFx1MDRlOScsICdcXHUwNGU4J10sXHJcbiAgICAgICAgWydcXHUwNGJiJywgJ1xcdTA0YmEnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxyXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDNEJywgJ1xcdTA0MUQnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNDQ5JywgJ1xcdTA0MjknXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNDRBJywgJ1xcdTA0MkEnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnLyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQ0QicsICdcXHUwNDJCJ10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRSddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0RCcsICdcXHUwNDJEJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcclxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgWydcXHUwNDRFJywgJ1xcdTA0MkUnXSxcclxuICAgICAgICBbJ1xcdTIxMTYnLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsna2snXVxyXG4gIH0sXHJcbiAgJ1xcdTE3OTdcXHUxN2I2XFx1MTc5ZlxcdTE3YjZcXHUxNzgxXFx1MTdkMlxcdTE3OThcXHUxN2MyXFx1MTc5YSc6IHtcclxuICAgICduYW1lJzogJ0tobWVyJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMEFCJywgJ1xcdTAwQkInLCAnXFx1MjAwRCddLFxyXG4gICAgICAgIFsnXFx1MTdFMScsICchJywgJ1xcdTIwMEMnLCAnXFx1MTdGMSddLFxyXG4gICAgICAgIFsnXFx1MTdFMicsICdcXHUxN0Q3JywgJ0AnLCAnXFx1MTdGMiddLFxyXG4gICAgICAgIFsnXFx1MTdFMycsICdcIicsICdcXHUxN0QxJywgJ1xcdTE3RjMnXSxcclxuICAgICAgICBbJ1xcdTE3RTQnLCAnXFx1MTdEQicsICckJywgJ1xcdTE3RjQnXSxcclxuICAgICAgICBbJ1xcdTE3RTUnLCAnJScsICdcXHUyMEFDJywgJ1xcdTE3RjUnXSxcclxuICAgICAgICBbJ1xcdTE3RTYnLCAnXFx1MTdDRCcsICdcXHUxN0Q5JywgJ1xcdTE3RjYnXSxcclxuICAgICAgICBbJ1xcdTE3RTcnLCAnXFx1MTdEMCcsICdcXHUxN0RBJywgJ1xcdTE3RjcnXSxcclxuICAgICAgICBbJ1xcdTE3RTgnLCAnXFx1MTdDRicsICcqJywgJ1xcdTE3RjgnXSxcclxuICAgICAgICBbJ1xcdTE3RTknLCAnKCcsICd7JywgJ1xcdTE3RjknXSxcclxuICAgICAgICBbJ1xcdTE3RTAnLCAnKScsICd9JywgJ1xcdTE3RjAnXSxcclxuICAgICAgICBbJ1xcdTE3QTUnLCAnXFx1MTdDQycsICd4J10sXHJcbiAgICAgICAgWydcXHUxN0IyJywgJz0nLCAnXFx1MTdDRSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MTc4NicsICdcXHUxNzg4JywgJ1xcdTE3REMnLCAnXFx1MTlFMCddLFxyXG4gICAgICAgIFsnXFx1MTdCOScsICdcXHUxN0JBJywgJ1xcdTE3REQnLCAnXFx1MTlFMSddLFxyXG4gICAgICAgIFsnXFx1MTdDMScsICdcXHUxN0MyJywgJ1xcdTE3QUYnLCAnXFx1MTlFMiddLFxyXG4gICAgICAgIFsnXFx1MTc5QScsICdcXHUxN0FDJywgJ1xcdTE3QUInLCAnXFx1MTlFMyddLFxyXG4gICAgICAgIFsnXFx1MTc4RicsICdcXHUxNzkxJywgJ1xcdTE3QTgnLCAnXFx1MTlFNCddLFxyXG4gICAgICAgIFsnXFx1MTc5OScsICdcXHUxN0JEJywgJ1xcdTE3OTlcXHUxN0JFXFx1MTc4NCcsICdcXHUxOUU1J10sXHJcbiAgICAgICAgWydcXHUxN0JCJywgJ1xcdTE3QkMnLCAnJywgJ1xcdTE5RTYnXSxcclxuICAgICAgICBbJ1xcdTE3QjcnLCAnXFx1MTdCOCcsICdcXHUxN0E2JywgJ1xcdTE5RTcnXSxcclxuICAgICAgICBbJ1xcdTE3QzQnLCAnXFx1MTdDNScsICdcXHUxN0IxJywgJ1xcdTE5RTgnXSxcclxuICAgICAgICBbJ1xcdTE3OTUnLCAnXFx1MTc5NycsICdcXHUxN0IwJywgJ1xcdTE5RTknXSxcclxuICAgICAgICBbJ1xcdTE3QzAnLCAnXFx1MTdCRicsICdcXHUxN0E5JywgJ1xcdTE5RUEnXSxcclxuICAgICAgICBbJ1xcdTE3QUEnLCAnXFx1MTdBNycsICdcXHUxN0IzJywgJ1xcdTE5RUInXSxcclxuICAgICAgICBbJ1xcdTE3QUUnLCAnXFx1MTdBRCcsICdcXFxcJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MTdCNicsICdcXHUxN0I2XFx1MTdDNicsICdcXHUxN0I1JywgJ1xcdTE5RUMnXSxcclxuICAgICAgICBbJ1xcdTE3OUYnLCAnXFx1MTdDMycsICcnLCAnXFx1MTlFRCddLFxyXG4gICAgICAgIFsnXFx1MTc4QScsICdcXHUxNzhDJywgJ1xcdTE3RDMnLCAnXFx1MTlFRSddLFxyXG4gICAgICAgIFsnXFx1MTc5MCcsICdcXHUxNzkyJywgJycsICdcXHUxOUVGJ10sXHJcbiAgICAgICAgWydcXHUxNzg0JywgJ1xcdTE3QTInLCAnXFx1MTdBNCcsICdcXHUxOUYwJ10sXHJcbiAgICAgICAgWydcXHUxN0EwJywgJ1xcdTE3QzcnLCAnXFx1MTdBMycsICdcXHUxOUYxJ10sXHJcbiAgICAgICAgWydcXHUxN0QyJywgJ1xcdTE3ODknLCAnXFx1MTdCNCcsICdcXHUxOUYyJ10sXHJcbiAgICAgICAgWydcXHUxNzgwJywgJ1xcdTE3ODInLCAnXFx1MTc5RCcsICdcXHUxOUYzJ10sXHJcbiAgICAgICAgWydcXHUxNzlCJywgJ1xcdTE3QTEnLCAnXFx1MTdEOCcsICdcXHUxOUY0J10sXHJcbiAgICAgICAgWydcXHUxN0JFJywgJ1xcdTE3QzRcXHUxN0M3JywgJ1xcdTE3RDYnLCAnXFx1MTlGNSddLFxyXG4gICAgICAgIFsnXFx1MTdDQicsICdcXHUxN0M5JywgJ1xcdTE3QzgnLCAnXFx1MTlGNiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MTc4QicsICdcXHUxNzhEJywgJ3wnLCAnXFx1MTlGNyddLFxyXG4gICAgICAgIFsnXFx1MTc4MScsICdcXHUxNzgzJywgJ1xcdTE3ODFcXHUxN0QyXFx1MTc4OVxcdTE3QkJcXHUxN0M2JywgJ1xcdTE5RjgnXSxcclxuICAgICAgICBbJ1xcdTE3ODUnLCAnXFx1MTc4NycsICctJywgJ1xcdTE5RjknXSxcclxuICAgICAgICBbJ1xcdTE3OUMnLCAnXFx1MTdDMVxcdTE3QzcnLCAnKycsICdcXHUxOUZBJ10sXHJcbiAgICAgICAgWydcXHUxNzk0JywgJ1xcdTE3OTYnLCAnXFx1MTc5RScsICdcXHUxOUZCJ10sXHJcbiAgICAgICAgWydcXHUxNzkzJywgJ1xcdTE3OEUnLCAnWycsICdcXHUxOUZDJ10sXHJcbiAgICAgICAgWydcXHUxNzk4JywgJ1xcdTE3QzYnLCAnXScsICdcXHUxOUZEJ10sXHJcbiAgICAgICAgWydcXHUxN0JCXFx1MTdDNicsICdcXHUxN0JCXFx1MTdDNycsICcsJywgJ1xcdTE5RkUnXSxcclxuICAgICAgICBbJ1xcdTE3RDQnLCAnXFx1MTdENScsICcuJywgJ1xcdTE5RkYnXSxcclxuICAgICAgICBbJ1xcdTE3Q0EnLCAnPycsICcvJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTIwMEInLCAnICcsICdcXHUwMEEwJywgJyAnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydrbSddXHJcbiAgfSxcclxuICAnXFx1MGM5NVxcdTBjYThcXHUwY2NkXFx1MGNhOFxcdTBjYTEnOiB7XHJcbiAgICAnbmFtZSc6ICdLYW5uYWRhJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwQ0NBJywgJ1xcdTBDOTInXSxcclxuICAgICAgICBbJzEnLCAnJywgJ1xcdTBDRTcnXSxcclxuICAgICAgICBbJzInLCAnJywgJ1xcdTBDRTgnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MENDRFxcdTBDQjAnLCAnXFx1MENFOSddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwQ0IwXFx1MENDRCcsICdcXHUwQ0VBJ10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTBDOUNcXHUwQ0NEXFx1MEM5RScsICdcXHUwQ0VCJ10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTBDQTRcXHUwQ0NEXFx1MENCMCcsICdcXHUwQ0VDJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTBDOTVcXHUwQ0NEXFx1MENCNycsICdcXHUwQ0VEJ10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTBDQjZcXHUwQ0NEXFx1MENCMCcsICdcXHUwQ0VFJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MENFRiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTBDRTYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MEM4MyddLFxyXG4gICAgICAgIFsnXFx1MENDMycsICdcXHUwQzhCJywgJ1xcdTBDQzQnLCAnXFx1MENFMCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MENDQycsICdcXHUwQzk0J10sXHJcbiAgICAgICAgWydcXHUwQ0M4JywgJ1xcdTBDOTAnLCAnXFx1MENENiddLFxyXG4gICAgICAgIFsnXFx1MENCRScsICdcXHUwQzg2J10sXHJcbiAgICAgICAgWydcXHUwQ0MwJywgJ1xcdTBDODgnLCAnJywgJ1xcdTBDRTEnXSxcclxuICAgICAgICBbJ1xcdTBDQzInLCAnXFx1MEM4QSddLFxyXG4gICAgICAgIFsnXFx1MENBQycsICdcXHUwQ0FEJ10sXHJcbiAgICAgICAgWydcXHUwQ0I5JywgJ1xcdTBDOTknXSxcclxuICAgICAgICBbJ1xcdTBDOTcnLCAnXFx1MEM5OCddLFxyXG4gICAgICAgIFsnXFx1MENBNicsICdcXHUwQ0E3J10sXHJcbiAgICAgICAgWydcXHUwQzlDJywgJ1xcdTBDOUQnXSxcclxuICAgICAgICBbJ1xcdTBDQTEnLCAnXFx1MENBMiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwQ0NCJywgJ1xcdTBDOTMnXSxcclxuICAgICAgICBbJ1xcdTBDQzcnLCAnXFx1MEM4RicsICdcXHUwQ0Q1J10sXHJcbiAgICAgICAgWydcXHUwQ0NEJywgJ1xcdTBDODUnXSxcclxuICAgICAgICBbJ1xcdTBDQkYnLCAnXFx1MEM4NycsICcnLCAnXFx1MEM4QyddLFxyXG4gICAgICAgIFsnXFx1MENDMScsICdcXHUwQzg5J10sXHJcbiAgICAgICAgWydcXHUwQ0FBJywgJ1xcdTBDQUInLCAnJywgJ1xcdTBDREUnXSxcclxuICAgICAgICBbJ1xcdTBDQjAnLCAnXFx1MENCMSddLFxyXG4gICAgICAgIFsnXFx1MEM5NScsICdcXHUwQzk2J10sXHJcbiAgICAgICAgWydcXHUwQ0E0JywgJ1xcdTBDQTUnXSxcclxuICAgICAgICBbJ1xcdTBDOUEnLCAnXFx1MEM5QiddLFxyXG4gICAgICAgIFsnXFx1MEM5RicsICdcXHUwQ0EwJ10sXHJcbiAgICAgICAgWycnLCAnXFx1MEM5RSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwQ0M2JywgJ1xcdTBDOEYnXSxcclxuICAgICAgICBbJ1xcdTBDODInXSxcclxuICAgICAgICBbJ1xcdTBDQUUnLCAnXFx1MENBMyddLFxyXG4gICAgICAgIFsnXFx1MENBOCddLFxyXG4gICAgICAgIFsnXFx1MENCNSddLFxyXG4gICAgICAgIFsnXFx1MENCMicsICdcXHUwQ0IzJ10sXHJcbiAgICAgICAgWydcXHUwQ0I4JywgJ1xcdTBDQjYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MENCNyddLFxyXG4gICAgICAgIFsnLicsICd8J10sXHJcbiAgICAgICAgWydcXHUwQ0FGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsna24nXVxyXG4gIH0sXHJcbiAgJ1xcdWQ1NWNcXHVhZDZkXFx1YzViNCc6IHtcclxuICAgICduYW1lJzogJ0tvcmVhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+JywgJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJywgJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdAJywgJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJywgJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJzQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJywgJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJywgJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcpJywgJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICcoJywgJzAnLCAnKCddLFxyXG4gICAgICAgIFsnLScsICdfJywgJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJywgJz0nLCAnKyddLFxyXG4gICAgICAgIFsnXFx1MjBBOScsICd8JywgJ1xcdTIwQTknLCAnfCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MTEwNycsICdcXHUxMTA4JywgJ3EnLCAnUSddLFxyXG4gICAgICAgIFsnXFx1MTEwQycsICdcXHUxMTBEJywgJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnXFx1MTEwMycsICdcXHUxMTA0JywgJ2UnLCAnRSddLFxyXG4gICAgICAgIFsnXFx1MTEwMCcsICdcXHUxMTAxJywgJ3InLCAnUiddLFxyXG4gICAgICAgIFsnXFx1MTEwOScsICdcXHUxMTBBJywgJ3QnLCAnVCddLFxyXG4gICAgICAgIFsnXFx1MTE2RCcsICcnLCAneScsICdZJ10sXHJcbiAgICAgICAgWydcXHUxMTY3JywgJycsICd1JywgJ1UnXSxcclxuICAgICAgICBbJ1xcdTExNjMnLCAnJywgJ2knLCAnSSddLFxyXG4gICAgICAgIFsnXFx1MTE2MicsICdcXHUxMTY0JywgJ28nLCAnTyddLFxyXG4gICAgICAgIFsnXFx1MTE2NicsICdcXHUxMTY4JywgJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnWycsICd7JywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9JywgJ10nLCAnfSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTExMDYnLCAnJywgJ2EnLCAnQSddLFxyXG4gICAgICAgIFsnXFx1MTEwMicsICcnLCAncycsICdTJ10sXHJcbiAgICAgICAgWydcXHUxMTBCJywgJycsICdkJywgJ0QnXSxcclxuICAgICAgICBbJ1xcdTExMDUnLCAnJywgJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnXFx1MTExMicsICcnLCAnZycsICdHJ10sXHJcbiAgICAgICAgWydcXHUxMTY5JywgJycsICdoJywgJ0gnXSxcclxuICAgICAgICBbJ1xcdTExNjUnLCAnJywgJ2onLCAnSiddLFxyXG4gICAgICAgIFsnXFx1MTE2MScsICcnLCAnaycsICdLJ10sXHJcbiAgICAgICAgWydcXHUxMTc1JywgJycsICdsJywgJ0wnXSxcclxuICAgICAgICBbJzsnLCAnOicsICc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIicsICdcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTExMEYnLCAnJywgJ3onLCAnWiddLFxyXG4gICAgICAgIFsnXFx1MTExMCcsICcnLCAneCcsICdYJ10sXHJcbiAgICAgICAgWydcXHUxMTBFJywgJycsICdjJywgJ0MnXSxcclxuICAgICAgICBbJ1xcdTExMTEnLCAnJywgJ3YnLCAnViddLFxyXG4gICAgICAgIFsnXFx1MTE3MicsICcnLCAnYicsICdCJ10sXHJcbiAgICAgICAgWydcXHUxMTZFJywgJycsICduJywgJ04nXSxcclxuICAgICAgICBbJ1xcdTExNzMnLCAnJywgJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8JywgJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+JywgJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/JywgJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFsnS29yJywgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsna28nXVxyXG4gIH0sXHJcbiAgJ0t1cmRcXHUwMGVlJzoge1xyXG4gICAgJ25hbWUnOiAnS3VyZGlzaCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjBhYycsICd+J10sXHJcbiAgICAgICAgWydcXHUwNjYxJywgJyEnXSxcclxuICAgICAgICBbJ1xcdTA2NjInLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDY2MycsICcjJ10sXHJcbiAgICAgICAgWydcXHUwNjY0JywgJyQnXSxcclxuICAgICAgICBbJ1xcdTA2NjUnLCAnJSddLFxyXG4gICAgICAgIFsnXFx1MDY2NicsICdeJ10sXHJcbiAgICAgICAgWydcXHUwNjY3JywgJyYnXSxcclxuICAgICAgICBbJ1xcdTA2NjgnLCAnKiddLFxyXG4gICAgICAgIFsnXFx1MDY2OScsICcoJ10sXHJcbiAgICAgICAgWydcXHUwNjYwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNjQyJywgJ2AnXSxcclxuICAgICAgICBbJ1xcdTA2NDgnLCAnXFx1MDY0OFxcdTA2NDgnXSxcclxuICAgICAgICBbJ1xcdTA2ZDUnLCAnXFx1MDY0YSddLFxyXG4gICAgICAgIFsnXFx1MDYzMScsICdcXHUwNjk1J10sXHJcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2MzcnXSxcclxuICAgICAgICBbJ1xcdTA2Y2MnLCAnXFx1MDZjZSddLFxyXG4gICAgICAgIFsnXFx1MDYyNicsICdcXHUwNjIxJ10sXHJcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2MzknXSxcclxuICAgICAgICBbJ1xcdTA2YzYnLCAnXFx1MDYyNCddLFxyXG4gICAgICAgIFsnXFx1MDY3ZScsICdcXHUwNjJiJ10sXHJcbiAgICAgICAgWydbJywgJ3snXSxcclxuICAgICAgICBbJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIyJ10sXHJcbiAgICAgICAgWydcXHUwNjMzJywgJ1xcdTA2MzQnXSxcclxuICAgICAgICBbJ1xcdTA2MmYnLCAnXFx1MDYzMCddLFxyXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjI1J10sXHJcbiAgICAgICAgWydcXHUwNmFmJywgJ1xcdTA2M2EnXSxcclxuICAgICAgICBbJ1xcdTA2NDcnLCAnXFx1MjAwYyddLFxyXG4gICAgICAgIFsnXFx1MDY5OCcsICdcXHUwNjIzJ10sXHJcbiAgICAgICAgWydcXHUwNmE5JywgJ1xcdTA2NDMnXSxcclxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDZiNSddLFxyXG4gICAgICAgIFsnXFx1MDYxYicsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA2MzInLCAnXFx1MDYzNiddLFxyXG4gICAgICAgIFsnXFx1MDYyZScsICdcXHUwNjM1J10sXHJcbiAgICAgICAgWydcXHUwNjJjJywgJ1xcdTA2ODYnXSxcclxuICAgICAgICBbJ1xcdTA2YTQnLCAnXFx1MDYzOCddLFxyXG4gICAgICAgIFsnXFx1MDYyOCcsICdcXHUwNjQ5J10sXHJcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTA2MjknXSxcclxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFx1MDY0MCddLFxyXG4gICAgICAgIFsnXFx1MDYwYycsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnXFx1MDYxZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsna3UnXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MWFcXHUwNDRiXFx1MDQ0MFxcdTA0MzNcXHUwNDRiXFx1MDQzN1xcdTA0NDdcXHUwNDMwJzoge1xyXG4gICAgJ25hbWUnOiAnS3lyZ3l6JyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXHJcbiAgICAgICAgWyc0JywgJzsnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc6J10sXHJcbiAgICAgICAgWyc3JywgJz8nXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJywgJ1xcdTA0QUYnLCAnXFx1MDRBRSddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCcsICdcXHUwNEEzJywgJ1xcdTA0QTInXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNDQ5JywgJ1xcdTA0MjknXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNDRBJywgJ1xcdTA0MkEnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnLyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQ0QicsICdcXHUwNDJCJ10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRScsICdcXHUwNEU5JywgJ1xcdTA0RTgnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0NEQnLCAnXFx1MDQyRCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxyXG4gICAgICAgIFsnLicsICcsJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsna3knXVxyXG4gIH0sXHJcbiAgJ0xhdHZpZVxcdTAxNjF1Jzoge1xyXG4gICAgJ25hbWUnOiAnTGF0dmlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBBRCcsICc/J10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBBQiddLFxyXG4gICAgICAgIFsnMicsICdcXHUwMEFCJywgJycsICdAJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTAwQkInLCAnJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUyMEFDJywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcIicsICd+J10sXHJcbiAgICAgICAgWyc2JywgJy8nLCAnXFx1MjAxOScsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnJywgJ1xcdTAwQjEnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MDBENycsICc6J10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTIwMTMnLCAnXFx1MjAxNCddLFxyXG4gICAgICAgIFsnZicsICdGJywgJz0nLCAnOyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDE2QicsICdcXHUwMTZBJywgJ3EnLCAnUSddLFxyXG4gICAgICAgIFsnZycsICdHJywgJ1xcdTAxMjMnLCAnXFx1MDEyMiddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydyJywgJ1InLCAnXFx1MDE1NycsICdcXHUwMTU2J10sXHJcbiAgICAgICAgWydtJywgJ00nLCAndycsICdXJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAneScsICdZJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsnXFx1MDExMycsICdcXHUwMTEyJ10sXHJcbiAgICAgICAgWydcXHUwMTBEJywgJ1xcdTAxMEMnXSxcclxuICAgICAgICBbJ1xcdTAxN0UnLCAnXFx1MDE3RCcsICdbJywgJ3snXSxcclxuICAgICAgICBbJ2gnLCAnSCcsICddJywgJ30nXSxcclxuICAgICAgICBbJ1xcdTAxMzcnLCAnXFx1MDEzNiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTAxNjEnLCAnXFx1MDE2MCddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWydcXHUwMEI0JywgJ1xcdTAwQjAnLCAnXFx1MDBCNCcsICdcXHUwMEE4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwMTQ2JywgJ1xcdTAxNDUnXSxcclxuICAgICAgICBbJ2InLCAnQicsICd4JywgJ1gnXSxcclxuICAgICAgICBbJ1xcdTAxMkInLCAnXFx1MDEyQSddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxMzcnLCAnXFx1MDEzNiddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBGNScsICdcXHUwMEQ1J10sXHJcbiAgICAgICAgWydcXHUwMTAxJywgJ1xcdTAxMDAnXSxcclxuICAgICAgICBbJywnLCAnOycsICc8J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDEzQycsICdcXHUwMTNCJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbHYnXVxyXG4gIH0sXHJcbiAgJ0xpZXR1dmlcXHUwMTczJzoge1xyXG4gICAgJ25hbWUnOiAnTGl0aHVhbmlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWydcXHUwMTA1JywgJ1xcdTAxMDQnXSxcclxuICAgICAgICBbJ1xcdTAxMEQnLCAnXFx1MDEwQyddLFxyXG4gICAgICAgIFsnXFx1MDExOScsICdcXHUwMTE4J10sXHJcbiAgICAgICAgWydcXHUwMTE3JywgJ1xcdTAxMTYnXSxcclxuICAgICAgICBbJ1xcdTAxMkYnLCAnXFx1MDEyRSddLFxyXG4gICAgICAgIFsnXFx1MDE2MScsICdcXHUwMTYwJ10sXHJcbiAgICAgICAgWydcXHUwMTczJywgJ1xcdTAxNzInXSxcclxuICAgICAgICBbJ1xcdTAxNkInLCAnXFx1MDE2QSddLFxyXG4gICAgICAgIFsnXFx1MjAxRScsICcoJ10sXHJcbiAgICAgICAgWydcXHUyMDFDJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnXFx1MDE3RScsICdcXHUwMTdEJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MjAxMycsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2x0J11cclxuICB9LFxyXG4gICdNYWd5YXInOiB7XHJcbiAgICAnbmFtZSc6ICdIdW5nYXJpYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJzAnLCAnXFx1MDBhNyddLFxyXG4gICAgICAgIFsnMScsICdcXCcnLCAnfiddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMmM3J10sXHJcbiAgICAgICAgWyczJywgJysnLCAnXFx1MDJjNiddLFxyXG4gICAgICAgIFsnNCcsICchJywgJ1xcdTAyZDgnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMGIwJ10sXHJcbiAgICAgICAgWyc2JywgJy8nLCAnXFx1MDJkYiddLFxyXG4gICAgICAgIFsnNycsICc9JywgJ2AnXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMmQ5J10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXFx1MDBiNCddLFxyXG4gICAgICAgIFsnXFx1MDBmNicsICdcXHUwMGQ2JywgJ1xcdTAyZGQnXSxcclxuICAgICAgICBbJ1xcdTAwZmMnLCAnXFx1MDBkYycsICdcXHUwMGE4J10sXHJcbiAgICAgICAgWydcXHUwMGYzJywgJ1xcdTAwZDMnLCAnXFx1MDBiOCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICd8J10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDBjNCddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMGNkJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDE1MScsICdcXHUwMTUwJywgJ1xcdTAwZjcnXSxcclxuICAgICAgICBbJ1xcdTAwZmEnLCAnXFx1MDBkYScsICdcXHUwMGQ3J10sXHJcbiAgICAgICAgWydcXHUwMTcxJywgJ1xcdTAxNzAnLCAnXFx1MDBhNCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMGU0J10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDExMSddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcclxuICAgICAgICBbJ2YnLCAnRicsICdbJ10sXHJcbiAgICAgICAgWydnJywgJ0cnLCAnXSddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onLCAnXFx1MDBlZCddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxNDEnXSxcclxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQyJ10sXHJcbiAgICAgICAgWydcXHUwMGU5JywgJ1xcdTAwYzknLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDBlMScsICdcXHUwMGMxJywgJ1xcdTAwZGYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTAwZWQnLCAnXFx1MDBjZCcsICc8J10sXHJcbiAgICAgICAgWyd5JywgJ1knLCAnPiddLFxyXG4gICAgICAgIFsneCcsICdYJywgJyMnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICcmJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAnQCddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcclxuICAgICAgICBbJ24nLCAnTicsICd9J10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnPCddLFxyXG4gICAgICAgIFsnLCcsICc/JywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnKiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2h1J11cclxuICB9LFxyXG4gICdNYWx0aSc6IHtcclxuICAgICduYW1lJzogJ01hbHRlc2UgNDgnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAxMEInLCAnXFx1MDEwQScsICdgJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MjBhYycsICdcXHUwMEEzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTAwRTgnLCAnXFx1MDBDOCddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJywgJ1xcdTAwRjknLCAnXFx1MDBEOSddLFxyXG4gICAgICAgIFsnaScsICdJJywgJ1xcdTAwRUMnLCAnXFx1MDBjYyddLFxyXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAwRjInLCAnXFx1MDBEMiddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMTIxJywgJ1xcdTAxMjAnLCAnWycsICd7J10sXHJcbiAgICAgICAgWydcXHUwMTI3JywgJ1xcdTAxMjYnLCAnXScsICd9J10sXHJcbiAgICAgICAgWycjJywgJ1xcdTAxN2UnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBFMCcsICdcXHUwMEMwJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnQCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDE3YycsICdcXHUwMTdiJywgJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/JywgJycsICdgJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbXQnXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MWNcXHUwNDMwXFx1MDQzYVxcdTA0MzVcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzgnOiB7XHJcbiAgICAnbmFtZSc6ICdNYWNlZG9uaWFuIEN5cmlsbGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcXHUyMDFFJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTIwMUMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MjAxOSddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0NTknLCAnXFx1MDQwOSddLFxyXG4gICAgICAgIFsnXFx1MDQ1QScsICdcXHUwNDBBJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0NTUnLCAnXFx1MDQwNSddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRSddLFxyXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnLCAnXFx1MDQwMiddLFxyXG4gICAgICAgIFsnXFx1MDQ1MycsICdcXHUwNDAzJywgJ1xcdTA0NTInXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCcsICdbJ10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnLCAnXSddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNDU4JywgJ1xcdTA0MDgnXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnLCAnXFx1MDQwQiddLFxyXG4gICAgICAgIFsnXFx1MDQ1QycsICdcXHUwNDBDJywgJ1xcdTA0NUInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA0NTEnLCAnXFx1MDQwMSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDVGJywgJ1xcdTA0MEYnXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMScsICd7J10sXHJcbiAgICAgICAgWydcXHUwNDNEJywgJ1xcdTA0MUQnLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJywnLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydtayddXHJcbiAgfSxcclxuICAnXFx1MGQyZVxcdTBkMzJcXHUwZDJmXFx1MGQzZVxcdTBkMzNcXHUwZDAyJzoge1xyXG4gICAgJ25hbWUnOiAnTWFsYXlhbGFtJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwRDRBJywgJ1xcdTBEMTInXSxcclxuICAgICAgICBbJzEnLCAnJywgJ1xcdTBENjcnXSxcclxuICAgICAgICBbJzInLCAnJywgJ1xcdTBENjgnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MEQ0RFxcdTBEMzAnLCAnXFx1MEQ2OSddLFxyXG4gICAgICAgIFsnNCcsICcnLCAnXFx1MEQ2QSddLFxyXG4gICAgICAgIFsnNScsICcnLCAnXFx1MEQ2QiddLFxyXG4gICAgICAgIFsnNicsICcnLCAnXFx1MEQ2QyddLFxyXG4gICAgICAgIFsnNycsICdcXHUwRDE1XFx1MEQ0RFxcdTBEMzcnLCAnXFx1MEQ2RCddLFxyXG4gICAgICAgIFsnOCcsICcnLCAnXFx1MEQ2RSddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTBENkYnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwRDY2J10sXHJcbiAgICAgICAgWyctJywgJ1xcdTBEMDMnXSxcclxuICAgICAgICBbJ1xcdTBENDMnLCAnXFx1MEQwQicsICcnLCAnXFx1MEQ2MCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MEQ0QycsICdcXHUwRDE0JywgJ1xcdTBENTcnXSxcclxuICAgICAgICBbJ1xcdTBENDgnLCAnXFx1MEQxMCddLFxyXG4gICAgICAgIFsnXFx1MEQzRScsICdcXHUwRDA2J10sXHJcbiAgICAgICAgWydcXHUwRDQwJywgJ1xcdTBEMDgnLCAnJywgJ1xcdTBENjEnXSxcclxuICAgICAgICBbJ1xcdTBENDInLCAnXFx1MEQwQSddLFxyXG4gICAgICAgIFsnXFx1MEQyQycsICdcXHUwRDJEJ10sXHJcbiAgICAgICAgWydcXHUwRDM5JywgJ1xcdTBEMTknXSxcclxuICAgICAgICBbJ1xcdTBEMTcnLCAnXFx1MEQxOCddLFxyXG4gICAgICAgIFsnXFx1MEQyNicsICdcXHUwRDI3J10sXHJcbiAgICAgICAgWydcXHUwRDFDJywgJ1xcdTBEMUQnXSxcclxuICAgICAgICBbJ1xcdTBEMjEnLCAnXFx1MEQyMiddLFxyXG4gICAgICAgIFsnJywgJ1xcdTBEMUUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwRDRCJywgJ1xcdTBEMTMnXSxcclxuICAgICAgICBbJ1xcdTBENDcnLCAnXFx1MEQwRiddLFxyXG4gICAgICAgIFsnXFx1MEQ0RCcsICdcXHUwRDA1JywgJycsICdcXHUwRDBDJ10sXHJcbiAgICAgICAgWydcXHUwRDNGJywgJ1xcdTBEMDcnXSxcclxuICAgICAgICBbJ1xcdTBENDEnLCAnXFx1MEQwOSddLFxyXG4gICAgICAgIFsnXFx1MEQyQScsICdcXHUwRDJCJ10sXHJcbiAgICAgICAgWydcXHUwRDMwJywgJ1xcdTBEMzEnXSxcclxuICAgICAgICBbJ1xcdTBEMTUnLCAnXFx1MEQxNiddLFxyXG4gICAgICAgIFsnXFx1MEQyNCcsICdcXHUwRDI1J10sXHJcbiAgICAgICAgWydcXHUwRDFBJywgJ1xcdTBEMUInXSxcclxuICAgICAgICBbJ1xcdTBEMUYnLCAnXFx1MEQyMCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MEQ0NicsICdcXHUwRDBGJ10sXHJcbiAgICAgICAgWydcXHUwRDAyJ10sXHJcbiAgICAgICAgWydcXHUwRDJFJywgJ1xcdTBEMjMnXSxcclxuICAgICAgICBbJ1xcdTBEMjgnXSxcclxuICAgICAgICBbJ1xcdTBEMzUnLCAnXFx1MEQzNCddLFxyXG4gICAgICAgIFsnXFx1MEQzMicsICdcXHUwRDMzJ10sXHJcbiAgICAgICAgWydcXHUwRDM4JywgJ1xcdTBEMzYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MEQzNyddLFxyXG4gICAgICAgIFsnLiddLFxyXG4gICAgICAgIFsnXFx1MEQyRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ21sJ11cclxuICB9LFxyXG4gICdNaXNjLiBTeW1ib2xzJzoge1xyXG4gICAgJ25hbWUnOiAnTWlzYy4gU3ltYm9scycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjYwNScsICdcXHUyNjA2JywgJ1xcdTI2MGUnLCAnXFx1MjYwZiddLFxyXG4gICAgICAgIFsnXFx1MjY0OCcsICdcXHUyNjczJywgJ1xcdTI2NTknLCAnXFx1MjYzMCddLFxyXG4gICAgICAgIFsnXFx1MjY0OScsICdcXHUyNjc0JywgJ1xcdTI2NTgnLCAnXFx1MjYzMSddLFxyXG4gICAgICAgIFsnXFx1MjY0YScsICdcXHUyNjc1JywgJ1xcdTI2NTcnLCAnXFx1MjYzMiddLFxyXG4gICAgICAgIFsnXFx1MjY0YicsICdcXHUyNjc2JywgJ1xcdTI2NTYnLCAnXFx1MjYzMyddLFxyXG4gICAgICAgIFsnXFx1MjY0YycsICdcXHUyNjc3JywgJ1xcdTI2NTUnLCAnXFx1MjYzNCddLFxyXG4gICAgICAgIFsnXFx1MjY0ZCcsICdcXHUyNjc4JywgJ1xcdTI2NTQnLCAnXFx1MjYzNSddLFxyXG4gICAgICAgIFsnXFx1MjY0ZScsICdcXHUyNjc5JywgJ1xcdTI2NWYnLCAnXFx1MjYzNiddLFxyXG4gICAgICAgIFsnXFx1MjY0ZicsICdcXHUyNjdhJywgJ1xcdTI2NWUnLCAnXFx1MjYzNyddLFxyXG4gICAgICAgIFsnXFx1MjY1MCcsICdcXHUyNjdiJywgJ1xcdTI2NWQnLCAnXFx1MjY4NiddLFxyXG4gICAgICAgIFsnXFx1MjY1MScsICdcXHUyNjdjJywgJ1xcdTI2NWMnLCAnXFx1MjY4NyddLFxyXG4gICAgICAgIFsnXFx1MjY1MicsICdcXHUyNjdkJywgJ1xcdTI2NWInLCAnXFx1MjY4OCddLFxyXG4gICAgICAgIFsnXFx1MjY1MycsICdcXHUyNjcyJywgJ1xcdTI2NWEnLCAnXFx1MjY4OSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTI2M2YnLCAnXFx1MjY4MCcsICdcXHUyNjhhJywgJ1xcdTI2YTInXSxcclxuICAgICAgICBbJ1xcdTI2NDAnLCAnXFx1MjY4MScsICdcXHUyNjhiJywgJ1xcdTI2YTMnXSxcclxuICAgICAgICBbJ1xcdTI2NDEnLCAnXFx1MjY4MicsICdcXHUyNjhjJywgJ1xcdTI2YTQnXSxcclxuICAgICAgICBbJ1xcdTI2NDInLCAnXFx1MjY4MycsICdcXHUyNjhkJywgJ1xcdTI2YTUnXSxcclxuICAgICAgICBbJ1xcdTI2NDMnLCAnXFx1MjY4NCcsICdcXHUyNjhlJywgJ1xcdTI2YTYnXSxcclxuICAgICAgICBbJ1xcdTI2NDQnLCAnXFx1MjY4NScsICdcXHUyNjhmJywgJ1xcdTI2YTcnXSxcclxuICAgICAgICBbJ1xcdTI2NDUnLCAnXFx1MjYyMCcsICdcXHUyNmZmJywgJ1xcdTI2YTgnXSxcclxuICAgICAgICBbJ1xcdTI2NDYnLCAnXFx1MjYyMicsICdcXHUyNjkyJywgJ1xcdTI2YTknXSxcclxuICAgICAgICBbJ1xcdTI2NDcnLCAnXFx1MjYyMycsICdcXHUyNjkzJywgJ1xcdTI2YjInXSxcclxuICAgICAgICBbJ1xcdTI2NjknLCAnXFx1MjY2ZCcsICdcXHUyNjk0JywgJ1xcdTI2YWMnXSxcclxuICAgICAgICBbJ1xcdTI2NmEnLCAnXFx1MjY2ZScsICdcXHUyNjk1JywgJ1xcdTI2YWQnXSxcclxuICAgICAgICBbJ1xcdTI2NmInLCAnXFx1MjY2ZicsICdcXHUyNjk2JywgJ1xcdTI2YWUnXSxcclxuICAgICAgICBbJ1xcdTI2NmMnLCAnXFx1MjYwNycsICdcXHUyNjk3JywgJ1xcdTI2YWYnXSxcclxuICAgICAgICBbJ1xcdTI2ZjknLCAnXFx1MjYwOCcsICdcXHUyNjk4JywgJ1xcdTI2YjAnXSxcclxuICAgICAgICBbJ1xcdTI2N2YnLCAnXFx1MjYyZScsICdcXHUyNjM4JywgJ1xcdTI2MDknXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTI2MWUnLCAnXFx1MjYxYycsICdcXHUyNjFkJywgJ1xcdTI2MWYnXSxcclxuICAgICAgICBbJ1xcdTI2MWInLCAnXFx1MjYxYScsICdcXHUyNjE4JywgJ1xcdTI2MTknXSxcclxuICAgICAgICBbJ1xcdTI2MDInLCAnXFx1MjYxNCcsICdcXHUyNmYxJywgJ1xcdTI2ZDknXSxcclxuICAgICAgICBbJ1xcdTI2MTUnLCAnXFx1MjY2OCcsICdcXHUyNmZlJywgJ1xcdTI2ZDgnXSxcclxuICAgICAgICBbJ1xcdTI2M2EnLCAnXFx1MjYzOScsICdcXHUyNjNiJywgJ1xcdTI2ZGMnXSxcclxuICAgICAgICBbJ1xcdTI2MTcnLCAnXFx1MjYxNicsICdcXHUyNmNhJywgJ1xcdTI2YzknXSxcclxuICAgICAgICBbJ1xcdTI2NjAnLCAnXFx1MjY2MycsICdcXHUyNjY1JywgJ1xcdTI2NjYnXSxcclxuICAgICAgICBbJ1xcdTI2NjQnLCAnXFx1MjY2NycsICdcXHUyNjYxJywgJ1xcdTI2NjInXSxcclxuICAgICAgICBbJ1xcdTI2YzInLCAnXFx1MjZjMCcsICdcXHUyNmMzJywgJ1xcdTI2YzEnXSxcclxuICAgICAgICBbJ1xcdTI2MjQnLCAnXFx1MjYyNScsICdcXHUyNjlhJywgJ1xcdTI2YjEnXSxcclxuICAgICAgICBbJ1xcdTI2MTAnLCAnXFx1MjYxMScsICdcXHUyNjEyJywgJ1xcdTI2MTMnXSxcclxuICAgICAgICBbJ1xcdTI2MjgnLCAnXFx1MjYyNicsICdcXHUyNjI3JywgJ1xcdTI2MjknXSxcclxuICAgICAgICBbJ1xcdTI2MmEnLCAnXFx1MjYyYicsICdcXHUyNjJjJywgJ1xcdTI2MmQnXSxcclxuICAgICAgICBbJ1xcdTI2ZmEnLCAnXFx1MjZmYicsICdcXHUyNmZjJywgJ1xcdTI2ZmQnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUyNjJmJywgJ1xcdTI2NzAnLCAnXFx1MjY3MScsICdcXHUyNjdlJ10sXHJcbiAgICAgICAgWydcXHUyNjNjJywgJ1xcdTI2OTknLCAnXFx1MjYzZCcsICdcXHUyNjNlJ10sXHJcbiAgICAgICAgWydcXHUyNmM0JywgJ1xcdTI2MDMnLCAnXFx1MjZjNycsICdcXHUyNmM2J10sXHJcbiAgICAgICAgWydcXHUyNmEwJywgJ1xcdTI2YTEnLCAnXFx1MjYyMScsICdcXHUyNmQ0J10sXHJcbiAgICAgICAgWydcXHUyNmU0JywgJ1xcdTI2ZTUnLCAnXFx1MjZlNicsICdcXHUyNmU3J10sXHJcbiAgICAgICAgWydcXHUyNjBhJywgJ1xcdTI2MGInLCAnXFx1MjYwYycsICdcXHUyNjBkJ10sXHJcbiAgICAgICAgWydcXHUyNjljJywgJ1xcdTI2OWInLCAnXFx1MjY5ZCcsICdcXHUyNjA0J10sXHJcbiAgICAgICAgWydcXHUyNmIzJywgJ1xcdTI2YjQnLCAnXFx1MjZiNScsICdcXHUyNmI2J10sXHJcbiAgICAgICAgWydcXHUyNmI3JywgJ1xcdTI2YmYnLCAnXFx1MjZiOCcsICdcXHUyNmY4J10sXHJcbiAgICAgICAgWydcXHUyNmI5JywgJ1xcdTI2YmEnLCAnXFx1MjZiYicsICdcXHUyNmJjJ10sXHJcbiAgICAgICAgWydcXHUyNmJkJywgJ1xcdTI2YmUnLCAnXFx1MjY5ZicsICdcXHUyNjllJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUyNjAwJywgJ1xcdTI2MDEnLCAnXFx1MjZjNScsICdcXHUyNmM4J10sXHJcbiAgICAgICAgWydcXHUyNjkxJywgJ1xcdTI2OTAnLCAnXFx1MjZhYicsICdcXHUyNmFhJ10sXHJcbiAgICAgICAgWydcXHUyNmNiJywgJ1xcdTI2Y2MnLCAnXFx1MjZjZCcsICdcXHUyNmNlJ10sXHJcbiAgICAgICAgWydcXHUyNmNmJywgJ1xcdTI2ZDAnLCAnXFx1MjZkMScsICdcXHUyNmQyJ10sXHJcbiAgICAgICAgWydcXHUyNmQzJywgJ1xcdTI2ZDUnLCAnXFx1MjZkNicsICdcXHUyNmQ3J10sXHJcbiAgICAgICAgWydcXHUyNmRhJywgJ1xcdTI2ZGInLCAnXFx1MjZkZCcsICdcXHUyNmRlJ10sXHJcbiAgICAgICAgWydcXHUyNmRmJywgJ1xcdTI2ZTAnLCAnXFx1MjZlMScsICdcXHUyNmUyJ10sXHJcbiAgICAgICAgWydcXHUyNmUzJywgJ1xcdTI2ZTgnLCAnXFx1MjZlOScsICdcXHUyNmVhJ10sXHJcbiAgICAgICAgWydcXHUyNmViJywgJ1xcdTI2ZWMnLCAnXFx1MjZlZCcsICdcXHUyNmVlJ10sXHJcbiAgICAgICAgWydcXHUyNmVmJywgJ1xcdTI2ZjAnLCAnXFx1MjZmMicsICdcXHUyNmYzJ10sXHJcbiAgICAgICAgWydcXHUyNmY0JywgJ1xcdTI2ZjUnLCAnXFx1MjZmNicsICdcXHUyNmY3J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMa10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MWNcXHUwNDNlXFx1MDQzZFxcdTA0MzNcXHUwNDNlXFx1MDQzYic6IHtcclxuICAgICduYW1lJzogJ01vbmdvbGlhbiBDeXJpbGxpYycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgWydcXHUyMTE2JywgJzEnXSxcclxuICAgICAgICBbJy0nLCAnMiddLFxyXG4gICAgICAgIFsnXCInLCAnMyddLFxyXG4gICAgICAgIFsnXFx1MjBBRScsICc0J10sXHJcbiAgICAgICAgWyc6JywgJzUnXSxcclxuICAgICAgICBbJy4nLCAnNiddLFxyXG4gICAgICAgIFsnXycsICc3J10sXHJcbiAgICAgICAgWycsJywgJzgnXSxcclxuICAgICAgICBbJyUnLCAnOSddLFxyXG4gICAgICAgIFsnPycsICcwJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXHJcbiAgICAgICAgWydcXHUwNDRkJywgJ1xcdTA0MmQnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0YWYnLCAnXFx1MDRBRSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MWEnXSxcclxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDRlOScsICdcXHUwNGU4J10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNlJywgJ1xcdTA0MWUnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxYiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDNmJywgJ1xcdTA0MWYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzYycsICdcXHUwNDFjJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0YycsICdcXHUwNDJjJ10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcclxuICAgICAgICBbJ1xcdTA0NGUnLCAnXFx1MDQyZSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbW4nXVxyXG4gIH0sXHJcbiAgJ1xcdTA5MmVcXHUwOTMwXFx1MDkzZVxcdTA5MjBcXHUwOTQwJzoge1xyXG4gICAgJ25hbWUnOiAnTWFyYXRoaScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnJywgJycsICdgJywgJ34nXSxcclxuICAgICAgICBbJ1xcdTA5NjcnLCAnXFx1MDkwRCcsICcxJywgJyEnXSxcclxuICAgICAgICBbJ1xcdTA5NjgnLCAnXFx1MDk0NScsICcyJywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTA5NjknLCAnXFx1MDk0RFxcdTA5MzAnLCAnMycsICcjJ10sXHJcbiAgICAgICAgWydcXHUwOTZBJywgJ1xcdTA5MzBcXHUwOTREJywgJzQnLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDk2QicsICdcXHUwOTFDXFx1MDk0RFxcdTA5MUUnLCAnNScsICclJ10sXHJcbiAgICAgICAgWydcXHUwOTZDJywgJ1xcdTA5MjRcXHUwOTREXFx1MDkzMCcsICc2JywgJ14nXSxcclxuICAgICAgICBbJ1xcdTA5NkQnLCAnXFx1MDkxNVxcdTA5NERcXHUwOTM3JywgJzcnLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDk2RScsICdcXHUwOTM2XFx1MDk0RFxcdTA5MzAnLCAnOCcsICcqJ10sXHJcbiAgICAgICAgWydcXHUwOTZGJywgJygnLCAnOScsICcoJ10sXHJcbiAgICAgICAgWydcXHUwOTY2JywgJyknLCAnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ1xcdTA5MDMnLCAnLScsICdfJ10sXHJcbiAgICAgICAgWydcXHUwOTQzJywgJ1xcdTA5MEInLCAnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwOTRDJywgJ1xcdTA5MTQnXSxcclxuICAgICAgICBbJ1xcdTA5NDgnLCAnXFx1MDkxMCddLFxyXG4gICAgICAgIFsnXFx1MDkzRScsICdcXHUwOTA2J10sXHJcbiAgICAgICAgWydcXHUwOTQwJywgJ1xcdTA5MDgnXSxcclxuICAgICAgICBbJ1xcdTA5NDInLCAnXFx1MDkwQSddLFxyXG4gICAgICAgIFsnXFx1MDkyQycsICdcXHUwOTJEJ10sXHJcbiAgICAgICAgWydcXHUwOTM5JywgJ1xcdTA5MTknXSxcclxuICAgICAgICBbJ1xcdTA5MTcnLCAnXFx1MDkxOCddLFxyXG4gICAgICAgIFsnXFx1MDkyNicsICdcXHUwOTI3J10sXHJcbiAgICAgICAgWydcXHUwOTFDJywgJ1xcdTA5MUQnXSxcclxuICAgICAgICBbJ1xcdTA5MjEnLCAnXFx1MDkyMicsICdbJywgJ3snXSxcclxuICAgICAgICBbJ1xcdTA5M0MnLCAnXFx1MDkxRScsICddJywgJ30nXSxcclxuICAgICAgICBbJ1xcdTA5NDknLCAnXFx1MDkxMScsICdcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwOTRCJywgJ1xcdTA5MTMnXSxcclxuICAgICAgICBbJ1xcdTA5NDcnLCAnXFx1MDkwRiddLFxyXG4gICAgICAgIFsnXFx1MDk0RCcsICdcXHUwOTA1J10sXHJcbiAgICAgICAgWydcXHUwOTNGJywgJ1xcdTA5MDcnXSxcclxuICAgICAgICBbJ1xcdTA5NDEnLCAnXFx1MDkwOSddLFxyXG4gICAgICAgIFsnXFx1MDkyQScsICdcXHUwOTJCJ10sXHJcbiAgICAgICAgWydcXHUwOTMwJywgJ1xcdTA5MzEnXSxcclxuICAgICAgICBbJ1xcdTA5MTUnLCAnXFx1MDkxNiddLFxyXG4gICAgICAgIFsnXFx1MDkyNCcsICdcXHUwOTI1J10sXHJcbiAgICAgICAgWydcXHUwOTFBJywgJ1xcdTA5MUInLCAnOycsICc6J10sXHJcbiAgICAgICAgWydcXHUwOTFGJywgJ1xcdTA5MjAnLCAnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbJ1xcdTA5MDInLCAnXFx1MDkwMScsICcnLCAnXFx1MDk1MCddLFxyXG4gICAgICAgIFsnXFx1MDkyRScsICdcXHUwOTIzJ10sXHJcbiAgICAgICAgWydcXHUwOTI4J10sXHJcbiAgICAgICAgWydcXHUwOTM1J10sXHJcbiAgICAgICAgWydcXHUwOTMyJywgJ1xcdTA5MzMnXSxcclxuICAgICAgICBbJ1xcdTA5MzgnLCAnXFx1MDkzNiddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwOTM3JywgJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICdcXHUwOTY0JywgJy4nLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDkyRicsICdcXHUwOTVGJywgJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ21yJ11cclxuICB9LFxyXG4gICdcXHUxMDE5XFx1MTAzY1xcdTEwMTRcXHUxMDNhXFx1MTAxOVxcdTEwMmNcXHUxMDE4XFx1MTAyY1xcdTEwMWVcXHUxMDJjJzoge1xyXG4gICAgJ25hbWUnOiAnQnVybWVzZScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MTAzOWAnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MTA0MScsICdcXHUxMDBEJ10sXHJcbiAgICAgICAgWydcXHUxMDQyJywgJ1xcdTEwMEUnXSxcclxuICAgICAgICBbJ1xcdTEwNDMnLCAnXFx1MTAwQiddLFxyXG4gICAgICAgIFsnXFx1MTA0NCcsICdcXHUxMDAwXFx1MTAzQlxcdTEwMTVcXHUxMDNBJ10sXHJcbiAgICAgICAgWydcXHUxMDQ1JywgJyUnXSxcclxuICAgICAgICBbJ1xcdTEwNDYnLCAnLyddLFxyXG4gICAgICAgIFsnXFx1MTA0NycsICdcXHUxMDFCJ10sXHJcbiAgICAgICAgWydcXHUxMDQ4JywgJ1xcdTEwMDInXSxcclxuICAgICAgICBbJ1xcdTEwNDknLCAnKCddLFxyXG4gICAgICAgIFsnXFx1MTA0MCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MTAwNicsICdcXHUxMDI5J10sXHJcbiAgICAgICAgWydcXHUxMDEwJywgJ1xcdTEwNDAnXSxcclxuICAgICAgICBbJ1xcdTEwMTQnLCAnXFx1MTAzRiddLFxyXG4gICAgICAgIFsnXFx1MTAxOScsICdcXHUxMDIzJ10sXHJcbiAgICAgICAgWydcXHUxMDIxJywgJ1xcdTEwMjQnXSxcclxuICAgICAgICBbJ1xcdTEwMTUnLCAnXFx1MTA0QyddLFxyXG4gICAgICAgIFsnXFx1MTAwMCcsICdcXHUxMDA5J10sXHJcbiAgICAgICAgWydcXHUxMDA0JywgJ1xcdTEwNEQnXSxcclxuICAgICAgICBbJ1xcdTEwMUUnLCAnXFx1MTAyNSddLFxyXG4gICAgICAgIFsnXFx1MTAwNScsICdcXHUxMDBGJ10sXHJcbiAgICAgICAgWydcXHUxMDFGJywgJ1xcdTEwMjcnXSxcclxuICAgICAgICBbJ1xcdTIwMTgnLCAnXFx1MjAxOSddLFxyXG4gICAgICAgIFsnXFx1MTA0RicsICdcXHUxMDBCXFx1MTAzOVxcdTEwMEMnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzMScsICdcXHUxMDE3J10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzQicsICdcXHUyMDBCXFx1MTAzRSddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMkQnLCAnXFx1MjAwQlxcdTEwMkUnXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDNBJywgJ1xcdTEwMDRcXHUxMDNBXFx1MTAzOVxcdTIwMEInXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDJCJywgJ1xcdTIwMEJcXHUxMDNEJ10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzNycsICdcXHUyMDBCXFx1MTAzNiddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwM0MnLCAnXFx1MjAwQlxcdTEwMzInXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDJGJywgJ1xcdTIwMEJcXHUxMDJGJ10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzMCcsICdcXHUyMDBCXFx1MTAzMCddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMzgnLCAnXFx1MjAwQlxcdTEwMkJcXHUxMDNBJ10sXHJcbiAgICAgICAgWydcXHUxMDEyJywgJ1xcdTEwMTMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTEwMTYnLCAnXFx1MTAwNyddLFxyXG4gICAgICAgIFsnXFx1MTAxMScsICdcXHUxMDBDJ10sXHJcbiAgICAgICAgWydcXHUxMDAxJywgJ1xcdTEwMDMnXSxcclxuICAgICAgICBbJ1xcdTEwMUMnLCAnXFx1MTAyMCddLFxyXG4gICAgICAgIFsnXFx1MTAxOCcsICdcXHUxMDI2J10sXHJcbiAgICAgICAgWydcXHUxMDBBJywgJ1xcdTEwMDgnXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDJDJywgJ1xcdTEwMkEnXSxcclxuICAgICAgICBbJ1xcdTEwMUEnLCAnXFx1MTAxQiddLFxyXG4gICAgICAgIFsnLicsICdcXHUxMDFCJ10sXHJcbiAgICAgICAgWydcXHUxMDRCJywgJ1xcdTEwNEEnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ215J11cclxuICB9LFxyXG4gICdOZWRlcmxhbmRzJzoge1xyXG4gICAgJ25hbWUnOiAnRHV0Y2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ0AnLCAnXFx1MDBhNycsICdcXHUwMGFjJ10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBiOSddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYmMnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMGJkJ10sXHJcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDBiZSddLFxyXG4gICAgICAgIFsnNycsICdfJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzgnLCAnKCcsICd7J10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnfSddLFxyXG4gICAgICAgIFsnMCcsICdcXCcnXSxcclxuICAgICAgICBbJy8nLCAnPycsICdcXFxcJ10sXHJcbiAgICAgICAgWydcXHUwMGIwJywgJ34nLCAnXFx1MDBiOCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InLCAnXFx1MDBiNiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBhOCcsICdeJ10sXHJcbiAgICAgICAgWycqJywgJ3wnXSxcclxuICAgICAgICBbJzwnLCAnPiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAwZGYnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnKycsICdcXHUwMGIxJ10sXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ10nLCAnWycsICdcXHUwMGE2J10sXHJcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDBhYiddLFxyXG4gICAgICAgIFsneCcsICdYJywgJ1xcdTAwYmInXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMGEyJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBiNSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnXFx1MDBiNyddLFxyXG4gICAgICAgIFsnLScsICc9J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbmwnXVxyXG4gIH0sXHJcbiAgJ05vcnNrJzoge1xyXG4gICAgJ25hbWUnOiAnTm9yd2VnaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWyd8JywgJ1xcdTAwYTcnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMGE0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnKycsICc/J10sXHJcbiAgICAgICAgWydcXFxcJywgJ2AnLCAnXFx1MDBiNCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwZTUnLCAnXFx1MDBjNSddLFxyXG4gICAgICAgIFsnXFx1MDBhOCcsICdeJywgJ34nXSxcclxuICAgICAgICBbJ1xcJycsICcqJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBmOCcsICdcXHUwMGQ4J10sXHJcbiAgICAgICAgWydcXHUwMGU2JywgJ1xcdTAwYzYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAzYmMnLCAnXFx1MDM5YyddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ25vJywgJ25iJywgJ25uJ11cclxuICB9LFxyXG4gICdcXHUwNjdlXFx1MDY5YVxcdTA2MmFcXHUwNjQ4Jzoge1xyXG4gICAgJ25hbWUnOiAnUGFzaHRvJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMDBkJywgJ1xcdTAwZjcnLCAnYCddLFxyXG4gICAgICAgIFsnXFx1MDZmMScsICchJywgJ2AnXSxcclxuICAgICAgICBbJ1xcdTA2ZjInLCAnXFx1MDY2YycsICdAJ10sXHJcbiAgICAgICAgWydcXHUwNmYzJywgJ1xcdTA2NmInLCAnXFx1MDY2YiddLFxyXG4gICAgICAgIFsnXFx1MDZmNCcsICdcXHUwMGE0JywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJ1xcdTA2ZjUnLCAnXFx1MDY2YScsICclJ10sXHJcbiAgICAgICAgWydcXHUwNmY2JywgJ1xcdTAwZDcnLCAnXiddLFxyXG4gICAgICAgIFsnXFx1MDZmNycsICdcXHUwMGFiJywgJyYnXSxcclxuICAgICAgICBbJ1xcdTA2ZjgnLCAnXFx1MDBiYicsICcqJ10sXHJcbiAgICAgICAgWydcXHUwNmY5JywgJygnLCAnXFx1ZmRmMiddLFxyXG4gICAgICAgIFsnXFx1MDZmMCcsICcpJywgJ1xcdWZlZmInXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDY0MCcsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1ZmU4NycsICdcXHUwMGY3J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNjM2JywgJ1xcdTA2NTInLCAnXFx1MDZkNSddLFxyXG4gICAgICAgIFsnXFx1MDYzNScsICdcXHUwNjRjJywgJ1xcdTA2NTMnXSxcclxuICAgICAgICBbJ1xcdTA2MmInLCAnXFx1MDY0ZCcsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydcXHUwNjQyJywgJ1xcdTA2NGInLCAnXFx1ZmVmNyddLFxyXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjRmJywgJ1xcdWZlZjUnXSxcclxuICAgICAgICBbJ1xcdTA2M2EnLCAnXFx1MDY1MCcsICdcXCcnXSxcclxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MDY0ZScsICdcXHVmZTg0J10sXHJcbiAgICAgICAgWydcXHUwNjQ3JywgJ1xcdTA2NTEnLCAnXFx1MDY3MCddLFxyXG4gICAgICAgIFsnXFx1MDYyZScsICdcXHUwNjgxJywgJ1xcJyddLFxyXG4gICAgICAgIFsnXFx1MDYyZCcsICdcXHUwNjg1JywgJ1wiJ10sXHJcbiAgICAgICAgWydcXHUwNjJjJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDY4NicsICdbJywgJ3snXSxcclxuICAgICAgICBbJ1xcXFwnLCAnXFx1MDY2ZCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDYzNCcsICdcXHUwNjlhJywgJ1xcdWZiYjAnXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDZjZCcsICdcXHUwNmQyJ10sXHJcbiAgICAgICAgWydcXHUwNmNjJywgJ1xcdTA2NGEnLCAnXFx1MDZkMiddLFxyXG4gICAgICAgIFsnXFx1MDYyOCcsICdcXHUwNjdlJywgJ1xcdTA2YmEnXSxcclxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDYyMycsICdcXHUwNmI3J10sXHJcbiAgICAgICAgWydcXHUwNjI3JywgJ1xcdTA2MjInLCAnXFx1MDY3MSddLFxyXG4gICAgICAgIFsnXFx1MDYyYScsICdcXHUwNjdjJywgJ1xcdTA2NzknXSxcclxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDZiYycsICc8J10sXHJcbiAgICAgICAgWydcXHUwNjQ1JywgJ1xcdTA2MjknLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDZhOScsICc6JywgJ1xcdTA2NDMnXSxcclxuICAgICAgICBbJ1xcdTA2YWYnLCAnXFx1MDYxYicsICdcXHUwNmFiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNjM4JywgJ1xcdTA2MjYnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MDYzNycsICdcXHUwNmQwJywgJzsnXSxcclxuICAgICAgICBbJ1xcdTA2MzInLCAnXFx1MDY5OCcsICdcXHUwNjU1J10sXHJcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2MjEnLCAnXFx1MDY1NCddLFxyXG4gICAgICAgIFsnXFx1MDYzMCcsICdcXHUyMDBjJywgJ1xcdTA2MjUnXSxcclxuICAgICAgICBbJ1xcdTA2MmYnLCAnXFx1MDY4OScsICdcXHUwNjg4J10sXHJcbiAgICAgICAgWydcXHUwNjkzJywgJ1xcdTA2MjQnLCAnXFx1MDY5MSddLFxyXG4gICAgICAgIFsnXFx1MDY0OCcsICdcXHUwNjBjJywgJywnXSxcclxuICAgICAgICBbJ1xcdTA2OTYnLCAnLicsICdcXHUwNmM3J10sXHJcbiAgICAgICAgWycvJywgJ1xcdTA2MWYnLCAnXFx1MDZjOSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCAnXFx1MDY0ZCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3BzJ11cclxuICB9LFxyXG4gICdcXHUwYTJhXFx1MGE3MFxcdTBhMWNcXHUwYTNlXFx1MGEyY1xcdTBhNDAnOiB7XHJcbiAgICAnbmFtZSc6ICdQdW5qYWJpIChHdXJtdWtoaSknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJyddLFxyXG4gICAgICAgIFsnMScsICdcXHUwQTREXFx1MEEzNScsICdcXHUwQTY3JywgJ1xcdTBBNjcnXSxcclxuICAgICAgICBbJzInLCAnXFx1MEE0RFxcdTBBMkYnLCAnXFx1MEE2OCcsICdcXHUwQTY4J10sXHJcbiAgICAgICAgWyczJywgJ1xcdTBBNERcXHUwQTMwJywgJ1xcdTBBNjknLCAnXFx1MEE2OSddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwQTcxJywgJ1xcdTBBNkEnLCAnXFx1MEE2QSddLFxyXG4gICAgICAgIFsnNScsICcnLCAnXFx1MEE2QicsICdcXHUwQTZCJ10sXHJcbiAgICAgICAgWyc2JywgJycsICdcXHUwQTZDJywgJ1xcdTBBNkMnXSxcclxuICAgICAgICBbJzcnLCAnJywgJ1xcdTBBNkQnLCAnXFx1MEE2RCddLFxyXG4gICAgICAgIFsnOCcsICcnLCAnXFx1MEE2RScsICdcXHUwQTZFJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MEE2RicsICdcXHUwQTZGJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MEE2NicsICdcXHUwQTY2J10sXHJcbiAgICAgICAgWyctJ10sXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTBBNEMnLCAnXFx1MEExNCddLFxyXG4gICAgICAgIFsnXFx1MEE0OCcsICdcXHUwQTEwJ10sXHJcbiAgICAgICAgWydcXHUwQTNFJywgJ1xcdTBBMDYnXSxcclxuICAgICAgICBbJ1xcdTBBNDAnLCAnXFx1MEEwOCddLFxyXG4gICAgICAgIFsnXFx1MEE0MicsICdcXHUwQTBBJ10sXHJcbiAgICAgICAgWydcXHUwQTJDJywgJ1xcdTBBMkQnXSxcclxuICAgICAgICBbJ1xcdTBBMzknLCAnXFx1MEExOSddLFxyXG4gICAgICAgIFsnXFx1MEExNycsICdcXHUwQTE4JywgJ1xcdTBBNUEnLCAnXFx1MEE1QSddLFxyXG4gICAgICAgIFsnXFx1MEEyNicsICdcXHUwQTI3J10sXHJcbiAgICAgICAgWydcXHUwQTFDJywgJ1xcdTBBMUQnLCAnXFx1MEE1QicsICdcXHUwQTVCJ10sXHJcbiAgICAgICAgWydcXHUwQTIxJywgJ1xcdTBBMjInLCAnXFx1MEE1QycsICdcXHUwQTVDJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTBBNEInLCAnXFx1MEExMyddLFxyXG4gICAgICAgIFsnXFx1MEE0NycsICdcXHUwQTBGJ10sXHJcbiAgICAgICAgWydcXHUwQTREJywgJ1xcdTBBMDUnXSxcclxuICAgICAgICBbJ1xcdTBBM0YnLCAnXFx1MEEwNyddLFxyXG4gICAgICAgIFsnXFx1MEE0MScsICdcXHUwQTA5J10sXHJcbiAgICAgICAgWydcXHUwQTJBJywgJ1xcdTBBMkInLCAnXFx1MEE1RScsICdcXHUwQTVFJ10sXHJcbiAgICAgICAgWydcXHUwQTMwJ10sXHJcbiAgICAgICAgWydcXHUwQTE1JywgJ1xcdTBBMTYnLCAnXFx1MEE1OScsICdcXHUwQTU5J10sXHJcbiAgICAgICAgWydcXHUwQTI0JywgJ1xcdTBBMjUnXSxcclxuICAgICAgICBbJ1xcdTBBMUEnLCAnXFx1MEExQiddLFxyXG4gICAgICAgIFsnXFx1MEExRicsICdcXHUwQTIwJ10sXHJcbiAgICAgICAgWydcXHUwQTNDJywgJ1xcdTBBMUUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWydcXHUwQTAyJywgJ1xcdTBBMDInXSxcclxuICAgICAgICBbJ1xcdTBBMkUnLCAnXFx1MEEyMyddLFxyXG4gICAgICAgIFsnXFx1MEEyOCddLFxyXG4gICAgICAgIFsnXFx1MEEzNScsICdcXHUwQTcyJywgJ1xcdTBBNzMnLCAnXFx1MEE3MyddLFxyXG4gICAgICAgIFsnXFx1MEEzMicsICdcXHUwQTMzJ10sXHJcbiAgICAgICAgWydcXHUwQTM4JywgJ1xcdTBBMzYnXSxcclxuICAgICAgICBbJywnXSxcclxuICAgICAgICBbJy4nLCAnfCcsICdcXHUwOTY1JywgJ1xcdTA5NjUnXSxcclxuICAgICAgICBbJ1xcdTBBMkYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydwYSddXHJcbiAgfSxcclxuICAnXFx1NjJmY1xcdTk3ZjMgKFBpbnlpbiknOiB7XHJcbiAgICAnbmFtZSc6ICdQaW55aW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnficsICdcXHU0ZTkzJywgJ1xcdTMwMUMnXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHVGRjYyJ10sXHJcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1RkY2MyddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTMwMUQnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUzMDFFJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MzAxRiddLFxyXG4gICAgICAgIFsnNicsICdeJywgJ1xcdTMwMDgnXSxcclxuICAgICAgICBbJzcnLCAnJicsICdcXHUzMDA5J10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MzAyRiddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTMwMEEnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUzMDBCJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MzAwRSddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTMwMEYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdcXHUwMTAxJywgJ1xcdTAxMDAnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICdcXHUwMEUxJywgJ1xcdTAwQzEnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMUNFJywgJ1xcdTAxQ0QnXSxcclxuICAgICAgICBbJ3InLCAnUicsICdcXHUwMEUwJywgJ1xcdTAwQzAnXSxcclxuICAgICAgICBbJ3QnLCAnVCcsICdcXHUwMTEzJywgJ1xcdTAxMTInXSxcclxuICAgICAgICBbJ3knLCAnWScsICdcXHUwMEU5JywgJ1xcdTAwQzknXSxcclxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMTFCJywgJ1xcdTAxMUEnXSxcclxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMEU4JywgJ1xcdTAwQzgnXSxcclxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMTJCJywgJ1xcdTAxMkEnXSxcclxuICAgICAgICBbJ3AnLCAnUCcsICdcXHUwMEVEJywgJ1xcdTAwQ0QnXSxcclxuICAgICAgICBbJ1snLCAneycsICdcXHUwMUQwJywgJ1xcdTAxQ0YnXSxcclxuICAgICAgICBbJ10nLCAnfScsICdcXHUwMEVDJywgJ1xcdTAwQ0MnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICdcXHUzMDIwJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJywgJ1xcdTAxNEQnLCAnXFx1MDE0QyddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAwRjMnLCAnXFx1MDBEMyddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxRDInLCAnXFx1MDFEMSddLFxyXG4gICAgICAgIFsnZicsICdGJywgJ1xcdTAwRjInLCAnXFx1MDBEMiddLFxyXG4gICAgICAgIFsnZycsICdHJywgJ1xcdTAwZmMnLCAnXFx1MDBkYyddLFxyXG4gICAgICAgIFsnaCcsICdIJywgJ1xcdTAxNkInLCAnXFx1MDE2QSddLFxyXG4gICAgICAgIFsnaicsICdKJywgJ1xcdTAwRkEnLCAnXFx1MDBEQSddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxRDQnLCAnXFx1MDFEMyddLFxyXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAwRjknLCAnXFx1MDBEOSddLFxyXG4gICAgICAgIFsnOycsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ3onLCAnWicsICdcXHUwMUQ2JywgJ1xcdTAxRDUnXSxcclxuICAgICAgICBbJ3gnLCAnWCcsICdcXHUwMUQ4JywgJ1xcdTAxRDcnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMURBJywgJ1xcdTAxRDknXSxcclxuICAgICAgICBbJ3YnLCAnVicsICdcXHUwMURDJywgJ1xcdTAxREInXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCcsICdcXHUzMDAxJ10sXHJcbiAgICAgICAgWycuJywgJz4nLCAnXFx1MzAwMiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMa10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd6aC1MQVROJ11cclxuICB9LFxyXG4gICdQb2xza2knOiB7XHJcbiAgICAnbmFtZSc6ICdQb2xpc2ggKDIxNCknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAyREInLCAnXFx1MDBCNyddLFxyXG4gICAgICAgIFsnMScsICchJywgJ34nXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnXFx1MDJDNyddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ14nXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDBBNCcsICdcXHUwMkQ4J10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsnNicsICcmJywgJ1xcdTAyREInXSxcclxuICAgICAgICBbJzcnLCAnLycsICdgJ10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnXFx1MDBCNyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ1xcdTAwQjQnXSxcclxuICAgICAgICBbJzAnLCAnPScsICdcXHUwMkREJ10sXHJcbiAgICAgICAgWycrJywgJz8nLCAnXFx1MDBBOCddLFxyXG4gICAgICAgIFsnXFwnJywgJyonLCAnXFx1MDBCOCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICdcXHUwMEE2J10sXHJcbiAgICAgICAgWydlJywgJ0UnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3UnLCAnVScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMTdDJywgJ1xcdTAxNDQnLCAnXFx1MDBGNyddLFxyXG4gICAgICAgIFsnXFx1MDE1QicsICdcXHUwMTA3JywgJ1xcdTAwRDcnXSxcclxuICAgICAgICBbJ1xcdTAwRjMnLCAnXFx1MDE3QSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAxMTEnXSxcclxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMTEwJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMTQyJywgJ1xcdTAxNDEnLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDEwNScsICdcXHUwMTE5JywgJ1xcdTAwREYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJywgJ0AnXSxcclxuICAgICAgICBbJ2InLCAnQicsICd7J10sXHJcbiAgICAgICAgWyduJywgJ04nLCAnfSddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJywnLCAnOycsICc8J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF1cclxuICB9LFxyXG4gICdQb2xza2kgUHJvZ3JhbWlzdHknOiB7XHJcbiAgICAnbmFtZSc6ICdQb2xpc2ggUHJvZ3JhbW1lcnMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMTE5JywgJ1xcdTAxMTgnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBmMycsICdcXHUwMGQzJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDEwNScsICdcXHUwMTA0J10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDE1YicsICdcXHUwMTVhJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDE0MicsICdcXHUwMTQxJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsneicsICdaJywgJ1xcdTAxN2MnLCAnXFx1MDE3YiddLFxyXG4gICAgICAgIFsneCcsICdYJywgJ1xcdTAxN2EnLCAnXFx1MDE3OSddLFxyXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAxMDcnLCAnXFx1MDEwNiddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTicsICdcXHUwMTQ0JywgJ1xcdTAxNDMnXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydwbCddXHJcbiAgfSxcclxuICAnUG9ydHVndVxcdTAwZWFzIEJyYXNpbGVpcm8nOiB7XHJcbiAgICAnbmFtZSc6ICdQb3J0dWd1ZXNlIChCcmF6aWwpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMGI5J10sXHJcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDBiMiddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwYjMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBhMiddLFxyXG4gICAgICAgIFsnNicsICdcXHUwMGE4JywgJ1xcdTAwYWMnXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBhNyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJy8nXSxcclxuICAgICAgICBbJ3cnLCAnVycsICc/J10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcclxuICAgICAgICBbJ1snLCAneycsICdcXHUwMGFhJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwZTcnLCAnXFx1MDBjNyddLFxyXG4gICAgICAgIFsnficsICdeJ10sXHJcbiAgICAgICAgWyddJywgJ30nLCAnXFx1MDBiYSddLFxyXG4gICAgICAgIFsnLycsICc/J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdcXHUyMGEyJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWyc6JywgJzonXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydwdC1CUiddXHJcbiAgfSxcclxuICAnUG9ydHVndVxcdTAwZWFzJzoge1xyXG4gICAgJ25hbWUnOiAnUG9ydHVndWVzZScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJ1xcJycsICc/J10sXHJcbiAgICAgICAgWydcXHUwMGFiJywgJ1xcdTAwYmInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWycrJywgJyonLCAnXFx1MDBhOCddLFxyXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJ10sXHJcbiAgICAgICAgWyd+JywgJ14nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMGU3JywgJ1xcdTAwYzcnXSxcclxuICAgICAgICBbJ1xcdTAwYmEnLCAnXFx1MDBhYSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3B0J11cclxuICB9LFxyXG4gICdSb21cXHUwMGUyblxcdTAxMDMnOiB7XHJcbiAgICAnbmFtZSc6ICdSb21hbmlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjAxRScsICdcXHUyMDFEJywgJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJywgJ34nXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHUwMkM3J10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXiddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAyRDgnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDJEQiddLFxyXG4gICAgICAgIFsnNycsICcmJywgJ2AnXSxcclxuICAgICAgICBbJzgnLCAnKicsICdcXHUwMkQ5J10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDBCNCddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTAyREQnXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMEE4J10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBCOCcsICdcXHUwMEIxJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCcsICdcXHUwMEE3J10sXHJcbiAgICAgICAgWydcXHUwMTAzJywgJ1xcdTAxMDInLCAnWycsICd7J10sXHJcbiAgICAgICAgWydcXHUwMEVFJywgJ1xcdTAwQ0UnLCAnXScsICd9J10sXHJcbiAgICAgICAgWydcXHUwMEUyJywgJ1xcdTAwQzInLCAnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBkZiddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAwZjAnLCAnXFx1MDBEMCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQyJywgJ1xcdTAxNDEnXSxcclxuICAgICAgICBbJ1xcdTAyMTknLCAnXFx1MDIxOCcsICc7JywgJzonXSxcclxuICAgICAgICBbJ1xcdTAyMUInLCAnXFx1MDIxQScsICdcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMEE5J10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnOycsICc8JywgJ1xcdTAwQUInXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+JywgJ1xcdTAwQkInXSxcclxuICAgICAgICBbJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3JvJ11cclxuICB9LFxyXG4gICdcXHUwNDIwXFx1MDQ0M1xcdTA0NDFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5Jzoge1xyXG4gICAgJ25hbWUnOiAnUnVzc2lhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MjExNiddLFxyXG4gICAgICAgIFsnNCcsICc7J10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnOiddLFxyXG4gICAgICAgIFsnNycsICc/J10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxyXG4gICAgICAgIFsnXFxcXCcsICcvJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXHJcbiAgICAgICAgWydcXHUwNDREJywgJ1xcdTA0MkQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJy8nLCAnfCddLFxyXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxyXG4gICAgICAgIFsnLicsICcsJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydydSddXHJcbiAgfSxcclxuICAnU2Nod2VpemVyZGV1dHNjaCc6IHtcclxuICAgICduYW1lJzogJ1N3aXNzIEdlcm1hbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBBNycsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWycxJywgJysnLCAnXFx1MDBBNiddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyonLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMEU3JywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMEE3J10sXHJcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDBBQyddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3wnXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMEEyJ10sXHJcbiAgICAgICAgWyc5JywgJyknXSxcclxuICAgICAgICBbJzAnLCAnPSddLFxyXG4gICAgICAgIFsnXFwnJywgJz8nLCAnXFx1MDBCNCddLFxyXG4gICAgICAgIFsnXicsICdgJywgJ34nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMEZDJywgJ1xcdTAwRTgnLCAnWyddLFxyXG4gICAgICAgIFsnXFx1MDBBOCcsICchJywgJ10nXSxcclxuICAgICAgICBbJyQnLCAnXFx1MDBBMycsICd9J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBGNicsICdcXHUwMEU5J10sXHJcbiAgICAgICAgWydcXHUwMEU0JywgJ1xcdTAwRTAnLCAneyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2RlLUNIJ11cclxuICB9LFxyXG4gICdTaHFpcCc6IHtcclxuICAgICduYW1lJzogJ0FsYmFuaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcclxuICAgICAgICBbJzEnLCAnIScsICd+J10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAyQzcnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdeJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDJEOCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMkRCJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnYCddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAyRDknXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwMEI0J10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDJERCddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwQTgnXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMEI4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAnXFxcXCddLFxyXG4gICAgICAgIFsndycsICdXJywgJ3wnXSxcclxuICAgICAgICBbJ2UnLCAnRSddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMEU3JywgJ1xcdTAwQzcnLCAnXFx1MDBGNyddLFxyXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTAwREYnXSxcclxuICAgICAgICBbJ10nLCAnfScsICdcXHUwMEE0J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDExMSddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcclxuICAgICAgICBbJ2YnLCAnRicsICdbJ10sXHJcbiAgICAgICAgWydnJywgJ0cnLCAnXSddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSycsICdcXHUwMTQyJ10sXHJcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDE0MSddLFxyXG4gICAgICAgIFsnXFx1MDBFQicsICdcXHUwMENCJywgJyQnXSxcclxuICAgICAgICBbJ0AnLCAnXFwnJywgJ1xcdTAwRDcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJywgJ0AnXSxcclxuICAgICAgICBbJ2InLCAnQicsICd7J10sXHJcbiAgICAgICAgWyduJywgJ04nLCAnfSddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJywnLCAnOycsICc8J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnc3EnXVxyXG4gIH0sXHJcbiAgJ1Nsb3ZlblxcdTAxMGRpbmEnOiB7XHJcbiAgICAnbmFtZSc6ICdTbG92YWsnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJzsnLCAnXFx1MDBiMCddLFxyXG4gICAgICAgIFsnKycsICcxJywgJ34nXSxcclxuICAgICAgICBbJ1xcdTAxM0UnLCAnMicsICdcXHUwMkM3J10sXHJcbiAgICAgICAgWydcXHUwMTYxJywgJzMnLCAnXiddLFxyXG4gICAgICAgIFsnXFx1MDEwRCcsICc0JywgJ1xcdTAyRDgnXSxcclxuICAgICAgICBbJ1xcdTAxNjUnLCAnNScsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWydcXHUwMTdFJywgJzYnLCAnXFx1MDJEQiddLFxyXG4gICAgICAgIFsnXFx1MDBGRCcsICc3JywgJ2AnXSxcclxuICAgICAgICBbJ1xcdTAwRTEnLCAnOCcsICdcXHUwMkQ5J10sXHJcbiAgICAgICAgWydcXHUwMEVEJywgJzknLCAnXFx1MDBCNCddLFxyXG4gICAgICAgIFsnXFx1MDBFOScsICcwJywgJ1xcdTAyREQnXSxcclxuICAgICAgICBbJz0nLCAnJScsICdcXHUwMEE4J10sXHJcbiAgICAgICAgWydcXHUwMEI0JywgJ1xcdTAyYzcnLCAnXFx1MDBCOCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICd8J10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJywgJ1xcJyddLFxyXG4gICAgICAgIFsnXFx1MDBGQScsICcvJywgJ1xcdTAwRjcnXSxcclxuICAgICAgICBbJ1xcdTAwRTQnLCAnKCcsICdcXHUwMEQ3J10sXHJcbiAgICAgICAgWydcXHUwMTQ4JywgJyknLCAnXFx1MDBBNCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAxMTEnXSxcclxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMTEwJ10sXHJcbiAgICAgICAgWydmJywgJ0YnLCAnWyddLFxyXG4gICAgICAgIFsnZycsICdHJywgJ10nXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDE0MiddLFxyXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAxNDEnXSxcclxuICAgICAgICBbJ1xcdTAwRjQnLCAnXCInLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDBBNycsICchJywgJ1xcdTAwREYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJyYnLCAnKicsICc8J10sXHJcbiAgICAgICAgWyd5JywgJ1knLCAnPiddLFxyXG4gICAgICAgIFsneCcsICdYJywgJyMnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICcmJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAnQCddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcclxuICAgICAgICBbJ24nLCAnTicsICd9J10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPycsICc8J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxyXG4gICAgICAgIFsnLScsICdfJywgJyonXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydzayddXHJcbiAgfSxcclxuICAnXFx1MDQ0MVxcdTA0NDBcXHUwNDNmXFx1MDQ0MVxcdTA0M2FcXHUwNDM4Jzoge1xyXG4gICAgJ25hbWUnOiAnU2VyYmlhbiBDeXJpbGxpYycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJ10sXHJcbiAgICAgICAgWyc4JywgJygnXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICc9J10sXHJcbiAgICAgICAgWydcXCcnLCAnPyddLFxyXG4gICAgICAgIFsnKycsICcqJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDU5JywgJ1xcdTA0MDknXSxcclxuICAgICAgICBbJ1xcdTA0NWEnLCAnXFx1MDQwYSddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1JywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDNlJywgJ1xcdTA0MWUnXSxcclxuICAgICAgICBbJ1xcdTA0M2YnLCAnXFx1MDQxZiddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNDUyJywgJ1xcdTA0MDInXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0NTgnLCAnXFx1MDQwOCddLFxyXG4gICAgICAgIFsnXFx1MDQzYScsICdcXHUwNDFhJ10sXHJcbiAgICAgICAgWydcXHUwNDNiJywgJ1xcdTA0MWInXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ1YicsICdcXHUwNDBiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ1xcdTA0NTUnLCAnXFx1MDQwNSddLFxyXG4gICAgICAgIFsnXFx1MDQ1ZicsICdcXHUwNDBmJ10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgWydcXHUwNDNkJywgJ1xcdTA0MWQnXSxcclxuICAgICAgICBbJ1xcdTA0M2MnLCAnXFx1MDQxYyddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBhOSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3NyLUNZUkwnXVxyXG4gIH0sXHJcbiAgJ1N1b21pJzoge1xyXG4gICAgJ25hbWUnOiAnRmlubmlzaCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBhNycsICdcXHUwMEJEJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwQTMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDBBNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnKycsICc/JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ1xcdTAwQjQnLCAnYCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAwRTInLCAnXFx1MDBDMiddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnLCAnXFx1MDE2NycsICdcXHUwMTY2J10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJywgJ1xcdTAwZWYnLCAnXFx1MDBDRiddLFxyXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAwZjUnLCAnXFx1MDBENSddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMEU1JywgJ1xcdTAwQzUnXSxcclxuICAgICAgICBbJ1xcdTAwQTgnLCAnXicsICd+J10sXHJcbiAgICAgICAgWydcXCcnLCAnKiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMEUxJywgJ1xcdTAwQzEnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTYxJywgJ1xcdTAxNjAnXSxcclxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMTExJywgJ1xcdTAxMTAnXSxcclxuICAgICAgICBbJ2YnLCAnRicsICdcXHUwMWU1JywgJ1xcdTAxRTQnXSxcclxuICAgICAgICBbJ2cnLCAnRycsICdcXHUwMUU3JywgJ1xcdTAxRTYnXSxcclxuICAgICAgICBbJ2gnLCAnSCcsICdcXHUwMjFGJywgJ1xcdTAyMWUnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxZTknLCAnXFx1MDFFOCddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMEY2JywgJ1xcdTAwRDYnLCAnXFx1MDBGOCcsICdcXHUwMEQ4J10sXHJcbiAgICAgICAgWydcXHUwMEU0JywgJ1xcdTAwQzQnLCAnXFx1MDBFNicsICdcXHUwMEM2J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJywgJ1xcdTAxN0UnLCAnXFx1MDE3RCddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnLCAnXFx1MDEwZCcsICdcXHUwMTBDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAnXFx1MDFFRicsICdcXHUwMUVFJ10sXHJcbiAgICAgICAgWydiJywgJ0InLCAnXFx1MDI5MicsICdcXHUwMUI3J10sXHJcbiAgICAgICAgWyduJywgJ04nLCAnXFx1MDE0QicsICdcXHUwMTRBJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBCNSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZmknXVxyXG4gIH0sXHJcbiAgJ1N2ZW5za2EnOiB7XHJcbiAgICAnbmFtZSc6ICdTd2VkaXNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMGE3JywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMGE0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWyc2JywgJyYnXSxcclxuICAgICAgICBbJzcnLCAnLycsICd7J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcclxuICAgICAgICBbJzAnLCAnPScsICd9J10sXHJcbiAgICAgICAgWycrJywgJz8nLCAnXFxcXCddLFxyXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBlNScsICdcXHUwMGM1J10sXHJcbiAgICAgICAgWydcXHUwMGE4JywgJ14nLCAnfiddLFxyXG4gICAgICAgIFsnXFwnJywgJyonXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMGY2JywgJ1xcdTAwZDYnXSxcclxuICAgICAgICBbJ1xcdTAwZTQnLCAnXFx1MDBjNCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ3wnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwM2JjJywgJ1xcdTAzOWMnXSxcclxuICAgICAgICBbJywnLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydzdiddXHJcbiAgfSxcclxuICAnU3dpc3MgRnJhblxcdTAwZTdhaXMnOiB7XHJcbiAgICAnbmFtZSc6ICdTd2lzcyBGcmVuY2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwQTcnLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsnMScsICcrJywgJ1xcdTAwQTYnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcqJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDBFNycsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsnNicsICcmJywgJ1xcdTAwQUMnXSxcclxuICAgICAgICBbJzcnLCAnLycsICd8J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnXFx1MDBBMiddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJz0nXSxcclxuICAgICAgICBbJ1xcJycsICc/JywgJ1xcdTAwQjQnXSxcclxuICAgICAgICBbJ14nLCAnYCcsICd+J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBFOCcsICdcXHUwMEZDJywgJ1snXSxcclxuICAgICAgICBbJ1xcdTAwQTgnLCAnIScsICddJ10sXHJcbiAgICAgICAgWyckJywgJ1xcdTAwQTMnLCAnfSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwRTknLCAnXFx1MDBGNiddLFxyXG4gICAgICAgIFsnXFx1MDBFMCcsICdcXHUwMEU0JywgJ3snXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICdcXFxcJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydmci1DSCddXHJcbiAgfSxcclxuICAnXFx1MDcyM1xcdTA3MThcXHUwNzJhXFx1MDcxZFxcdTA3MWRcXHUwNzEwJzoge1xyXG4gICAgJ25hbWUnOiAnU3lyaWFjJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNzBmJywgJ1xcdTAzMmUnLCAnXFx1MDY1MScsICdcXHUwNjUxJ10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDcwMScsICdcXHUwNzAxJ10sXHJcbiAgICAgICAgWycyJywgJ1xcdTAzMGEnLCAnXFx1MDcwMicsICdcXHUwNzAyJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTAzMjUnLCAnXFx1MDcwMycsICdcXHUwNzAzJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTA3NDknLCAnXFx1MDcwNCcsICdcXHUwNzA0J10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTI2NzAnLCAnXFx1MDcwNScsICdcXHUwNzA1J10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTI2NzEnLCAnXFx1MDcwOCcsICdcXHUwNzA4J10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTA3MGEnLCAnXFx1MDcwOScsICdcXHUwNzA5J10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTAwYmInLCAnXFx1MDcwQicsICdcXHUwNzBCJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXFx1MDcwQycsICdcXHUwNzBDJ10sXHJcbiAgICAgICAgWycwJywgJygnLCAnXFx1MDcwRCcsICdcXHUwNzBEJ10sXHJcbiAgICAgICAgWyctJywgJ1xcdTAwYWInLCAnXFx1MjUwQycsICdcXHUyNTBDJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MjUxMCcsICdcXHUyNTEwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNzE0JywgJ1xcdTA3MzAnLCAnXFx1MDY0RScsICdcXHUwNjRFJ10sXHJcbiAgICAgICAgWydcXHUwNzI4JywgJ1xcdTA3MzMnLCAnXFx1MDY0QicsICdcXHUwNjRCJ10sXHJcbiAgICAgICAgWydcXHUwNzE2JywgJ1xcdTA3MzYnLCAnXFx1MDY0RicsICdcXHUwNjRGJ10sXHJcbiAgICAgICAgWydcXHUwNzI5JywgJ1xcdTA3M0EnLCAnXFx1MDY0QycsICdcXHUwNjRDJ10sXHJcbiAgICAgICAgWydcXHUwNzI2JywgJ1xcdTA3M0QnLCAnXFx1MDY1MycsICdcXHUwNjUzJ10sXHJcbiAgICAgICAgWydcXHUwNzFjJywgJ1xcdTA3NDAnLCAnXFx1MDY1NCcsICdcXHUwNjU0J10sXHJcbiAgICAgICAgWydcXHUwNzI1JywgJ1xcdTA3NDEnLCAnXFx1MDc0NycsICdcXHUwNzQ3J10sXHJcbiAgICAgICAgWydcXHUwNzE3JywgJ1xcdTAzMDgnLCAnXFx1MDc0MycsICdcXHUwNzQzJ10sXHJcbiAgICAgICAgWydcXHUwNzFlJywgJ1xcdTAzMDQnLCAnXFx1MDc0NScsICdcXHUwNzQ1J10sXHJcbiAgICAgICAgWydcXHUwNzFhJywgJ1xcdTAzMDcnLCAnXFx1MDMyRCcsICdcXHUwMzJEJ10sXHJcbiAgICAgICAgWydcXHUwNzEzJywgJ1xcdTAzMDMnXSxcclxuICAgICAgICBbJ1xcdTA3MTUnLCAnXFx1MDc0QSddLFxyXG4gICAgICAgIFsnXFx1MDcwNicsICc6J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDcyYicsICdcXHUwNzMxJywgJ1xcdTA2NTAnLCAnXFx1MDY1MCddLFxyXG4gICAgICAgIFsnXFx1MDcyMycsICdcXHUwNzM0JywgJ1xcdTA2NGQnLCAnXFx1MDY0ZCddLFxyXG4gICAgICAgIFsnXFx1MDcxZCcsICdcXHUwNzM3J10sXHJcbiAgICAgICAgWydcXHUwNzEyJywgJ1xcdTA3M2InLCAnXFx1MDYyMScsICdcXHUwNjIxJ10sXHJcbiAgICAgICAgWydcXHUwNzIwJywgJ1xcdTA3M2UnLCAnXFx1MDY1NScsICdcXHUwNjU1J10sXHJcbiAgICAgICAgWydcXHUwNzEwJywgJ1xcdTA3MTEnLCAnXFx1MDY3MCcsICdcXHUwNjcwJ10sXHJcbiAgICAgICAgWydcXHUwNzJjJywgJ1xcdTA2NDAnLCAnXFx1MDc0OCcsICdcXHUwNzQ4J10sXHJcbiAgICAgICAgWydcXHUwNzIyJywgJ1xcdTAzMjQnLCAnXFx1MDc0NCcsICdcXHUwNzQ0J10sXHJcbiAgICAgICAgWydcXHUwNzIxJywgJ1xcdTAzMzEnLCAnXFx1MDc0NicsICdcXHUwNzQ2J10sXHJcbiAgICAgICAgWydcXHUwNzFmJywgJ1xcdTAzMjMnXSxcclxuICAgICAgICBbJ1xcdTA3MWInLCAnXFx1MDMzMCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXScsICdcXHUwNzMyJ10sXHJcbiAgICAgICAgWydbJywgJ1xcdTA3MzUnLCAnXFx1MDY1MicsICdcXHUwNjUyJ10sXHJcbiAgICAgICAgWydcXHUwNzI0JywgJ1xcdTA3MzgnXSxcclxuICAgICAgICBbJ1xcdTA3MmEnLCAnXFx1MDczYycsICdcXHUyMDBEJ10sXHJcbiAgICAgICAgWydcXHUwNzI3JywgJ1xcdTA3M2YnLCAnXFx1MjAwQyddLFxyXG4gICAgICAgIFsnXFx1MDcwMCcsICdcXHUwNzM5JywgJ1xcdTIwMEUnXSxcclxuICAgICAgICBbJy4nLCAnXFx1MDc0MicsICdcXHUyMDBGJ10sXHJcbiAgICAgICAgWydcXHUwNzE4JywgJ1xcdTA2MGMnXSxcclxuICAgICAgICBbJ1xcdTA3MTknLCAnXFx1MDYxYiddLFxyXG4gICAgICAgIFsnXFx1MDcwNycsICdcXHUwNjFGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnc3ljJ11cclxuICB9LFxyXG4gICdcXHUwYmE0XFx1MGJhZVxcdTBiYmZcXHUwYmI0XFx1MGJjZCc6IHtcclxuICAgICduYW1lJzogJ1RhbWlsJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwQkNBJywgJ1xcdTBCOTInXSxcclxuICAgICAgICBbJzEnLCAnJywgJ1xcdTBCRTcnXSxcclxuICAgICAgICBbJzInLCAnJywgJ1xcdTBCRTgnXSxcclxuICAgICAgICBbJzMnLCAnJywgJ1xcdTBCRTknXSxcclxuICAgICAgICBbJzQnLCAnJywgJ1xcdTBCRUEnXSxcclxuICAgICAgICBbJzUnLCAnJywgJ1xcdTBCRUInXSxcclxuICAgICAgICBbJzYnLCAnXFx1MEJBNFxcdTBCQ0RcXHUwQkIwJywgJ1xcdTBCRUMnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MEI5NVxcdTBCQ0RcXHUwQkI3JywgJ1xcdTBCRUQnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MEJCN1xcdTBCQ0RcXHUwQkIwJywgJ1xcdTBCRUUnXSxcclxuICAgICAgICBbJzknLCAnJywgJ1xcdTBCRUYnXSxcclxuICAgICAgICBbJzAnLCAnJywgJ1xcdTBCRjAnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MEI4MycsICdcXHUwQkYxJ10sXHJcbiAgICAgICAgWycnLCAnJywgJ1xcdTBCRjInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTBCQ0MnLCAnXFx1MEI5NCddLFxyXG4gICAgICAgIFsnXFx1MEJDOCcsICdcXHUwQjkwJ10sXHJcbiAgICAgICAgWydcXHUwQkJFJywgJ1xcdTBCODYnXSxcclxuICAgICAgICBbJ1xcdTBCQzAnLCAnXFx1MEI4OCddLFxyXG4gICAgICAgIFsnXFx1MEJDMicsICdcXHUwQjhBJ10sXHJcbiAgICAgICAgWydcXHUwQkFBJywgJ1xcdTBCQUEnXSxcclxuICAgICAgICBbJ1xcdTBCQjknLCAnXFx1MEI5OSddLFxyXG4gICAgICAgIFsnXFx1MEI5NScsICdcXHUwQjk1J10sXHJcbiAgICAgICAgWydcXHUwQkE0JywgJ1xcdTBCQTQnXSxcclxuICAgICAgICBbJ1xcdTBCOUMnLCAnXFx1MEI5QSddLFxyXG4gICAgICAgIFsnXFx1MEI5RicsICdcXHUwQjlGJ10sXHJcbiAgICAgICAgWydcXHUwQjlFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MEJDQicsICdcXHUwQjkzJ10sXHJcbiAgICAgICAgWydcXHUwQkM3JywgJ1xcdTBCOEYnXSxcclxuICAgICAgICBbJ1xcdTBCQ0QnLCAnXFx1MEI4NSddLFxyXG4gICAgICAgIFsnXFx1MEJCRicsICdcXHUwQjg3J10sXHJcbiAgICAgICAgWydcXHUwQkMxJywgJ1xcdTBCODknXSxcclxuICAgICAgICBbJ1xcdTBCQUEnLCAnXFx1MEJBQSddLFxyXG4gICAgICAgIFsnXFx1MEJCMCcsICdcXHUwQkIxJ10sXHJcbiAgICAgICAgWydcXHUwQjk1JywgJ1xcdTBCOTUnXSxcclxuICAgICAgICBbJ1xcdTBCQTQnLCAnXFx1MEJBNCddLFxyXG4gICAgICAgIFsnXFx1MEI5QScsICdcXHUwQjlBJ10sXHJcbiAgICAgICAgWydcXHUwQjlGJywgJ1xcdTBCOUYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTBCQzYnLCAnXFx1MEI4RSddLFxyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWydcXHUwQkFFJywgJ1xcdTBCQTMnXSxcclxuICAgICAgICBbJ1xcdTBCQTgnLCAnXFx1MEJBOSddLFxyXG4gICAgICAgIFsnXFx1MEJCNScsICdcXHUwQkI0J10sXHJcbiAgICAgICAgWydcXHUwQkIyJywgJ1xcdTBCQjMnXSxcclxuICAgICAgICBbJ1xcdTBCQjgnLCAnXFx1MEJCNyddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwQkI3J10sXHJcbiAgICAgICAgWycuJywgJ1xcdTBCQjhcXHUwQkNEXFx1MEJCMFxcdTBCQzAnXSxcclxuICAgICAgICBbJ1xcdTBCQUYnLCAnXFx1MEJBRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3RhJ11cclxuICB9LFxyXG4gICdcXHUwYzI0XFx1MGM0NlxcdTBjMzJcXHUwYzQxXFx1MGMxN1xcdTBjNDEnOiB7XHJcbiAgICAnbmFtZSc6ICdUZWx1Z3UnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTBDNEEnLCAnXFx1MEMxMiddLFxyXG4gICAgICAgIFsnMScsICcnLCAnXFx1MEM2NyddLFxyXG4gICAgICAgIFsnMicsICcnLCAnXFx1MEM2OCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwQzREXFx1MEMzMCcsICdcXHUwQzY5J10sXHJcbiAgICAgICAgWyc0JywgJycsICdcXHUwQzZBJ10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTBDMUNcXHUwQzREXFx1MEMxRScsICdcXHUwQzZCJ10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTBDMjRcXHUwQzREXFx1MEMzMCcsICdcXHUwQzZDJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTBDMTVcXHUwQzREXFx1MEMzNycsICdcXHUwQzZEJ10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTBDMzZcXHUwQzREXFx1MEMzMCcsICdcXHUwQzZFJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MEM2RiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTBDNjYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MEMwMyddLFxyXG4gICAgICAgIFsnXFx1MEM0MycsICdcXHUwQzBCJywgJ1xcdTBDNDQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTBDNEMnLCAnXFx1MEMxNCddLFxyXG4gICAgICAgIFsnXFx1MEM0OCcsICdcXHUwQzEwJywgJ1xcdTBDNTYnXSxcclxuICAgICAgICBbJ1xcdTBDM0UnLCAnXFx1MEMwNiddLFxyXG4gICAgICAgIFsnXFx1MEM0MCcsICdcXHUwQzA4JywgJycsICdcXHUwQzYxJ10sXHJcbiAgICAgICAgWydcXHUwQzQyJywgJ1xcdTBDMEEnXSxcclxuICAgICAgICBbJ1xcdTBDMkMnXSxcclxuICAgICAgICBbJ1xcdTBDMzknLCAnXFx1MEMxOSddLFxyXG4gICAgICAgIFsnXFx1MEMxNycsICdcXHUwQzE4J10sXHJcbiAgICAgICAgWydcXHUwQzI2JywgJ1xcdTBDMjcnXSxcclxuICAgICAgICBbJ1xcdTBDMUMnLCAnXFx1MEMxRCddLFxyXG4gICAgICAgIFsnXFx1MEMyMScsICdcXHUwQzIyJ10sXHJcbiAgICAgICAgWycnLCAnXFx1MEMxRSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTBDNEInLCAnXFx1MEMxMyddLFxyXG4gICAgICAgIFsnXFx1MEM0NycsICdcXHUwQzBGJywgJ1xcdTBDNTUnXSxcclxuICAgICAgICBbJ1xcdTBDNEQnLCAnXFx1MEMwNSddLFxyXG4gICAgICAgIFsnXFx1MEMzRicsICdcXHUwQzA3JywgJycsICdcXHUwQzBDJ10sXHJcbiAgICAgICAgWydcXHUwQzQxJywgJ1xcdTBDMDknXSxcclxuICAgICAgICBbJ1xcdTBDMkEnLCAnXFx1MEMyQiddLFxyXG4gICAgICAgIFsnXFx1MEMzMCcsICdcXHUwQzMxJ10sXHJcbiAgICAgICAgWydcXHUwQzE1JywgJ1xcdTBDMTYnXSxcclxuICAgICAgICBbJ1xcdTBDMjQnLCAnXFx1MEMyNSddLFxyXG4gICAgICAgIFsnXFx1MEMxQScsICdcXHUwQzFCJ10sXHJcbiAgICAgICAgWydcXHUwQzFGJywgJ1xcdTBDMjUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTBDNDYnLCAnXFx1MEMwRSddLFxyXG4gICAgICAgIFsnXFx1MEMwMicsICdcXHUwQzAxJ10sXHJcbiAgICAgICAgWydcXHUwQzJFJywgJ1xcdTBDMjMnXSxcclxuICAgICAgICBbJ1xcdTBDMjgnLCAnXFx1MEMyOCddLFxyXG4gICAgICAgIFsnXFx1MEMzNSddLFxyXG4gICAgICAgIFsnXFx1MEMzMicsICdcXHUwQzMzJ10sXHJcbiAgICAgICAgWydcXHUwQzM4JywgJ1xcdTBDMzYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MEMzNyddLFxyXG4gICAgICAgIFsnLiddLFxyXG4gICAgICAgIFsnXFx1MEMyRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3RlJ11cclxuICB9LFxyXG4gICdUaVxcdTFlYmZuZyBWaVxcdTFlYzd0Jzoge1xyXG4gICAgJ25hbWUnOiAnVmlldG5hbWVzZScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+JywgJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDEwMycsICdcXHUwMTAyJywgJzEnLCAnISddLFxyXG4gICAgICAgIFsnXFx1MDBFMicsICdcXHUwMEMyJywgJzInLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDBFQScsICdcXHUwMENBJywgJzMnLCAnIyddLFxyXG4gICAgICAgIFsnXFx1MDBGNCcsICdcXHUwMEQ0JywgJzQnLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDMwMCcsICdcXHUwMzAwJywgJzUnLCAnJSddLFxyXG4gICAgICAgIFsnXFx1MDMwOScsICdcXHUwMzA5JywgJzYnLCAnXiddLFxyXG4gICAgICAgIFsnXFx1MDMwMycsICdcXHUwMzAzJywgJzcnLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDMwMScsICdcXHUwMzAxJywgJzgnLCAnKiddLFxyXG4gICAgICAgIFsnXFx1MDMyMycsICdcXHUwMzIzJywgJzknLCAnKCddLFxyXG4gICAgICAgIFsnXFx1MDExMScsICdcXHUwMTEwJywgJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJywgJy0nLCAnXyddLFxyXG4gICAgICAgIFsnXFx1MjBBQicsICcrJywgJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJywgJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ2UnLCAnRSddLFxyXG4gICAgICAgIFsncicsICdSJywgJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJywgJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJywgJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJywgJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJywgJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJywgJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJywgJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDFCMCcsICdcXHUwMUFGJywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnXFx1MDFBMScsICdcXHUwMUEwJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCcsICdkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRicsICdmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRycsICdnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCcsICdoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSicsICdqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSycsICdrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCcsICdsJywgJ0wnXSxcclxuICAgICAgICBbJzsnLCAnOicsICc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIicsICdcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ3onLCAnWicsICd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCcsICd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnVicsICd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQicsICdiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTicsICduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCcsICcsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPicsICcuJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnPycsICcvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd2aSddXHJcbiAgfSxcclxuICAnXFx1MGU0NFxcdTBlMTdcXHUwZTIyIEtlZG1hbmVlJzoge1xyXG4gICAgJ25hbWUnOiAnVGhhaSBLZWRtYW5lZScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXycsICclJ10sXHJcbiAgICAgICAgWydcXHUwRTQ1JywgJysnXSxcclxuICAgICAgICBbJy8nLCAnXFx1MEU1MSddLFxyXG4gICAgICAgIFsnLScsICdcXHUwRTUyJ10sXHJcbiAgICAgICAgWydcXHUwRTIwJywgJ1xcdTBFNTMnXSxcclxuICAgICAgICBbJ1xcdTBFMTYnLCAnXFx1MEU1NCddLFxyXG4gICAgICAgIFsnXFx1MEUzOCcsICdcXHUwRTM5J10sXHJcbiAgICAgICAgWydcXHUwRTM2JywgJ1xcdTBFM0YnXSxcclxuICAgICAgICBbJ1xcdTBFMDQnLCAnXFx1MEU1NSddLFxyXG4gICAgICAgIFsnXFx1MEUxNScsICdcXHUwRTU2J10sXHJcbiAgICAgICAgWydcXHUwRTA4JywgJ1xcdTBFNTcnXSxcclxuICAgICAgICBbJ1xcdTBFMDInLCAnXFx1MEU1OCddLFxyXG4gICAgICAgIFsnXFx1MEUwQScsICdcXHUwRTU5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwRTQ2JywgJ1xcdTBFNTAnXSxcclxuICAgICAgICBbJ1xcdTBFNDQnLCAnXCInXSxcclxuICAgICAgICBbJ1xcdTBFMzMnLCAnXFx1MEUwRSddLFxyXG4gICAgICAgIFsnXFx1MEUxRScsICdcXHUwRTExJ10sXHJcbiAgICAgICAgWydcXHUwRTMwJywgJ1xcdTBFMTgnXSxcclxuICAgICAgICBbJ1xcdTBFMzEnLCAnXFx1MEU0RCddLFxyXG4gICAgICAgIFsnXFx1MEUzNScsICdcXHUwRTRBJ10sXHJcbiAgICAgICAgWydcXHUwRTIzJywgJ1xcdTBFMTMnXSxcclxuICAgICAgICBbJ1xcdTBFMTknLCAnXFx1MEUyRiddLFxyXG4gICAgICAgIFsnXFx1MEUyMicsICdcXHUwRTBEJ10sXHJcbiAgICAgICAgWydcXHUwRTFBJywgJ1xcdTBFMTAnXSxcclxuICAgICAgICBbJ1xcdTBFMjUnLCAnLCddLFxyXG4gICAgICAgIFsnXFx1MEUwMycsICdcXHUwRTA1J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MEUxRicsICdcXHUwRTI0J10sXHJcbiAgICAgICAgWydcXHUwRTJCJywgJ1xcdTBFMDYnXSxcclxuICAgICAgICBbJ1xcdTBFMDEnLCAnXFx1MEUwRiddLFxyXG4gICAgICAgIFsnXFx1MEUxNCcsICdcXHUwRTQyJ10sXHJcbiAgICAgICAgWydcXHUwRTQwJywgJ1xcdTBFMEMnXSxcclxuICAgICAgICBbJ1xcdTBFNDknLCAnXFx1MEU0NyddLFxyXG4gICAgICAgIFsnXFx1MEU0OCcsICdcXHUwRTRCJ10sXHJcbiAgICAgICAgWydcXHUwRTMyJywgJ1xcdTBFMjknXSxcclxuICAgICAgICBbJ1xcdTBFMkEnLCAnXFx1MEUyOCddLFxyXG4gICAgICAgIFsnXFx1MEUyNycsICdcXHUwRTBCJ10sXHJcbiAgICAgICAgWydcXHUwRTA3JywgJy4nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTBFMUMnLCAnKCddLFxyXG4gICAgICAgIFsnXFx1MEUxQicsICcpJ10sXHJcbiAgICAgICAgWydcXHUwRTQxJywgJ1xcdTBFMDknXSxcclxuICAgICAgICBbJ1xcdTBFMkQnLCAnXFx1MEUyRSddLFxyXG4gICAgICAgIFsnXFx1MEUzNCcsICdcXHUwRTNBJ10sXHJcbiAgICAgICAgWydcXHUwRTM3JywgJ1xcdTBFNEMnXSxcclxuICAgICAgICBbJ1xcdTBFMTcnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MEUyMScsICdcXHUwRTEyJ10sXHJcbiAgICAgICAgWydcXHUwRTQzJywgJ1xcdTBFMkMnXSxcclxuICAgICAgICBbJ1xcdTBFMUQnLCAnXFx1MEUyNiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndGgnXVxyXG4gIH0sXHJcbiAgJ1xcdTBlNDRcXHUwZTE3XFx1MGUyMiBQYXR0YWNob3RlJzoge1xyXG4gICAgJ25hbWUnOiAnVGhhaSBQYXR0YWNob3RlJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydfJywgJ1xcdTBFM0YnXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFsnXFx1MEU1MicsICdcIiddLFxyXG4gICAgICAgIFsnXFx1MEU1MycsICcvJ10sXHJcbiAgICAgICAgWydcXHUwRTU0JywgJywnXSxcclxuICAgICAgICBbJ1xcdTBFNTUnLCAnPyddLFxyXG4gICAgICAgIFsnXFx1MEUzOScsICdcXHUwRTM4J10sXHJcbiAgICAgICAgWydcXHUwRTU3JywgJ18nXSxcclxuICAgICAgICBbJ1xcdTBFNTgnLCAnLiddLFxyXG4gICAgICAgIFsnXFx1MEU1OScsICcoJ10sXHJcbiAgICAgICAgWydcXHUwRTUwJywgJyknXSxcclxuICAgICAgICBbJ1xcdTBFNTEnLCAnLSddLFxyXG4gICAgICAgIFsnXFx1MEU1NicsICclJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwRTQ3JywgJ1xcdTBFNEEnXSxcclxuICAgICAgICBbJ1xcdTBFMTUnLCAnXFx1MEUyNCddLFxyXG4gICAgICAgIFsnXFx1MEUyMicsICdcXHUwRTQ2J10sXHJcbiAgICAgICAgWydcXHUwRTJEJywgJ1xcdTBFMEQnXSxcclxuICAgICAgICBbJ1xcdTBFMjMnLCAnXFx1MEUyOSddLFxyXG4gICAgICAgIFsnXFx1MEU0OCcsICdcXHUwRTM2J10sXHJcbiAgICAgICAgWydcXHUwRTE0JywgJ1xcdTBFMUQnXSxcclxuICAgICAgICBbJ1xcdTBFMjEnLCAnXFx1MEUwQiddLFxyXG4gICAgICAgIFsnXFx1MEUyNycsICdcXHUwRTE2J10sXHJcbiAgICAgICAgWydcXHUwRTQxJywgJ1xcdTBFMTInXSxcclxuICAgICAgICBbJ1xcdTBFNDMnLCAnXFx1MEUyRiddLFxyXG4gICAgICAgIFsnXFx1MEUwQycsICdcXHUwRTI2J10sXHJcbiAgICAgICAgWydcXHVGOEM3JywgJ1xcdTBFNEQnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwRTQ5JywgJ1xcdTBFNEInXSxcclxuICAgICAgICBbJ1xcdTBFMTcnLCAnXFx1MEUxOCddLFxyXG4gICAgICAgIFsnXFx1MEUwNycsICdcXHUwRTMzJ10sXHJcbiAgICAgICAgWydcXHUwRTAxJywgJ1xcdTBFMTMnXSxcclxuICAgICAgICBbJ1xcdTBFMzEnLCAnXFx1MEU0QyddLFxyXG4gICAgICAgIFsnXFx1MEUzNScsICdcXHUwRTM3J10sXHJcbiAgICAgICAgWydcXHUwRTMyJywgJ1xcdTBFMUMnXSxcclxuICAgICAgICBbJ1xcdTBFMTknLCAnXFx1MEUwQSddLFxyXG4gICAgICAgIFsnXFx1MEU0MCcsICdcXHUwRTQyJ10sXHJcbiAgICAgICAgWydcXHUwRTQ0JywgJ1xcdTBFMDYnXSxcclxuICAgICAgICBbJ1xcdTBFMDInLCAnXFx1MEUxMSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MEUxQScsICdcXHUwRTBFJ10sXHJcbiAgICAgICAgWydcXHUwRTFCJywgJ1xcdTBFMEYnXSxcclxuICAgICAgICBbJ1xcdTBFMjUnLCAnXFx1MEUxMCddLFxyXG4gICAgICAgIFsnXFx1MEUyQicsICdcXHUwRTIwJ10sXHJcbiAgICAgICAgWydcXHUwRTM0JywgJ1xcdTBFMzEnXSxcclxuICAgICAgICBbJ1xcdTBFMDQnLCAnXFx1MEUyOCddLFxyXG4gICAgICAgIFsnXFx1MEUyQScsICdcXHUwRTJFJ10sXHJcbiAgICAgICAgWydcXHUwRTMwJywgJ1xcdTBFMUYnXSxcclxuICAgICAgICBbJ1xcdTBFMDgnLCAnXFx1MEUwOSddLFxyXG4gICAgICAgIFsnXFx1MEUxRScsICdcXHUwRTJDJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MjJcXHUwNDMwXFx1MDQ0MlxcdTA0MzBcXHUwNDQwXFx1MDQ0N1xcdTA0MzAnOiB7XHJcbiAgICAnbmFtZSc6ICdUYXRhcicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDRCQicsICdcXHUwNEJBJywgJ1xcdTA0NTEnLCAnXFx1MDQwMSddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MjExNicsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJzsnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJzonXSxcclxuICAgICAgICBbJzcnLCAnPycsICdbJ10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXSddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ3snXSxcclxuICAgICAgICBbJzAnLCAnKScsICd9J10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNEU5JywgJ1xcdTA0RTgnLCAnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDNEJywgJ1xcdTA0MUQnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNEQ5JywgJ1xcdTA0RDgnLCAnXFx1MDQ0OScsICdcXHUwNDI5J10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDRBRicsICdcXHUwNEFFJywgJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxyXG4gICAgICAgIFsnXFxcXCcsICcvJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDRBMycsICdcXHUwNEEyJywgJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0RCcsICdcXHUwNDJEJywgJ1xcJyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQ5MScsICdcXHUwNDkwJ10sXHJcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDk3JywgJ1xcdTA0OTYnLCAnXFx1MDQ0QycsICdcXHUwNDJDJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnLCAnPCddLFxyXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJywgJz4nXSxcclxuICAgICAgICBbJy4nLCAnLCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3R0J11cclxuICB9LFxyXG4gICdUXFx1MDBmY3JrXFx1MDBlN2UgRic6IHtcclxuICAgICduYW1lJzogJ1R1cmtpc2ggRicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnKycsICcqJywgJ1xcdTAwYWMnXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMGI5JywgJ1xcdTAwYTEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnXFx1MDBiMiddLFxyXG4gICAgICAgIFsnMycsICdeJywgJyMnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYmMnLCAnXFx1MDBhNCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMGJlJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcJycsICd7J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcclxuICAgICAgICBbJzAnLCAnPScsICd9J10sXHJcbiAgICAgICAgWycvJywgJz8nLCAnXFxcXCcsICdcXHUwMGJmJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnfCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnZicsICdGJywgJ0AnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnXFx1MDExZicsICdcXHUwMTFlJ10sXHJcbiAgICAgICAgWydcXHUwMTMxJywgJ0knLCAnXFx1MDBiNicsICdcXHUwMGFlJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMGE1J10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnaCcsICdIJywgJ1xcdTAwZjgnLCAnXFx1MDBkOCddLFxyXG4gICAgICAgIFsncCcsICdQJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdcXHUwMGE4J10sXHJcbiAgICAgICAgWyd3JywgJ1cnLCAnfiddLFxyXG4gICAgICAgIFsneCcsICdYJywgJ2AnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MDBlNicsICdcXHUwMGM2J10sXHJcbiAgICAgICAgWydpJywgJ1xcdTAxMzAnLCAnXFx1MDBkZicsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnYScsICdBJywgJyAnLCAnXFx1MDBhYSddLFxyXG4gICAgICAgIFsnXFx1MDBmYycsICdcXHUwMGRjJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ3knLCAnWScsICdcXHUwMGI0J10sXHJcbiAgICAgICAgWydcXHUwMTVmJywgJ1xcdTAxNWUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICd8JywgJ1xcdTAwYTYnXSxcclxuICAgICAgICBbJ2onLCAnSicsICdcXHUwMGFiJywgJzwnXSxcclxuICAgICAgICBbJ1xcdTAwZjYnLCAnXFx1MDBkNicsICdcXHUwMGJiJywgJz4nXSxcclxuICAgICAgICBbJ3YnLCAnVicsICdcXHUwMGEyJywgJ1xcdTAwYTknXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsnXFx1MDBlNycsICdcXHUwMGM3J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMGI1JywgJ1xcdTAwYmEnXSxcclxuICAgICAgICBbJ2InLCAnQicsICdcXHUwMGQ3J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJy0nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1RcXHUwMGZjcmtcXHUwMGU3ZSBRJzoge1xyXG4gICAgJ25hbWUnOiAnVHVya2lzaCBRJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcIicsICdcXHUwMGU5JywgJzwnXSxcclxuICAgICAgICBbJzEnLCAnIScsICc+J10sXHJcbiAgICAgICAgWycyJywgJ1xcJycsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyczJywgJ14nLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICcrJywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMGJkJ10sXHJcbiAgICAgICAgWyc2JywgJyYnXSxcclxuICAgICAgICBbJzcnLCAnLycsICd7J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcclxuICAgICAgICBbJzAnLCAnPScsICd9J10sXHJcbiAgICAgICAgWycqJywgJz8nLCAnXFxcXCddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ3wnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdAJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ1xcdTAxMzEnLCAnSScsICdpJywgJ1xcdTAxMzAnXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMTFmJywgJ1xcdTAxMWUnLCAnXFx1MDBhOCddLFxyXG4gICAgICAgIFsnXFx1MDBmYycsICdcXHUwMGRjJywgJ34nXSxcclxuICAgICAgICBbJywnLCAnOycsICdgJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJywgJ1xcdTAwZTYnLCAnXFx1MDBjNiddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAwZGYnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDE1ZicsICdcXHUwMTVlJywgJ1xcdTAwYjQnXSxcclxuICAgICAgICBbJ2knLCAnXFx1MDEzMCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ3wnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnXFx1MDBmNicsICdcXHUwMGQ2J10sXHJcbiAgICAgICAgWydcXHUwMGU3JywgJ1xcdTAwYzcnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3RyJ11cclxuICB9LFxyXG4gICdcXHUwNDIzXFx1MDQzYVxcdTA0NDBcXHUwNDMwXFx1MDQ1N1xcdTA0M2RcXHUwNDQxXFx1MDQ0Y1xcdTA0M2FcXHUwNDMwJzoge1xyXG4gICAgJ25hbWUnOiAnVWtyYWluaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXHJcbiAgICAgICAgWyc0JywgJzsnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc6J10sXHJcbiAgICAgICAgWyc3JywgJz8nXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MUEnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDQ1NycsICdcXHUwNDA3J10sXHJcbiAgICAgICAgWydcXHUwNDkxJywgJ1xcdTA0OTAnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NTYnLCAnXFx1MDQwNiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0NTQnLCAnXFx1MDQwNCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxyXG4gICAgICAgIFsnLicsICcsJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd1ayddXHJcbiAgfSxcclxuICAnVW5pdGVkIEtpbmdkb20nOiB7XHJcbiAgICAnbmFtZSc6ICdVbml0ZWQgS2luZ2RvbScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICdcXHUwMGFjJywgJ1xcdTAwYTYnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ14nXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDBlOScsICdcXHUwMGM5J10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MDBmYScsICdcXHUwMGRhJ10sXHJcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBlZCcsICdcXHUwMGNkJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBmMycsICdcXHUwMGQzJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWycjJywgJ34nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlMScsICdcXHUwMGMxJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnQCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydlbi1HQiddXHJcbiAgfSxcclxuICAnXFx1MDYyN1xcdTA2MzFcXHUwNjJmXFx1MDY0OCc6IHtcclxuICAgICduYW1lJzogJ1VyZHUnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJ1xcdTA2NkEnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICdcXHUwNkQ2J10sXHJcbiAgICAgICAgWyc4JywgJ1xcdTA2NkQnXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICcoJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDYzNycsICdcXHUwNjM4J10sXHJcbiAgICAgICAgWydcXHUwNjM1JywgJ1xcdTA2MzYnXSxcclxuICAgICAgICBbJ1xcdTA2YmUnLCAnXFx1MDYzMCddLFxyXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjg4J10sXHJcbiAgICAgICAgWydcXHUwNjc5JywgJ1xcdTA2MkInXSxcclxuICAgICAgICBbJ1xcdTA2N2UnLCAnXFx1MDY1MSddLFxyXG4gICAgICAgIFsnXFx1MDYyYScsICdcXHUwNkMzJ10sXHJcbiAgICAgICAgWydcXHUwNjI4JywgJ1xcdTA2NDAnXSxcclxuICAgICAgICBbJ1xcdTA2MmMnLCAnXFx1MDY4NiddLFxyXG4gICAgICAgIFsnXFx1MDYyZCcsICdcXHUwNjJFJ10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDY0NScsICdcXHUwNjk4J10sXHJcbiAgICAgICAgWydcXHUwNjQ4JywgJ1xcdTA2MzInXSxcclxuICAgICAgICBbJ1xcdTA2MzEnLCAnXFx1MDY5MSddLFxyXG4gICAgICAgIFsnXFx1MDY0NicsICdcXHUwNkJBJ10sXHJcbiAgICAgICAgWydcXHUwNjQ0JywgJ1xcdTA2QzInXSxcclxuICAgICAgICBbJ1xcdTA2YzEnLCAnXFx1MDYyMSddLFxyXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIyJ10sXHJcbiAgICAgICAgWydcXHUwNkE5JywgJ1xcdTA2QUYnXSxcclxuICAgICAgICBbJ1xcdTA2Q0MnLCAnXFx1MDY0QSddLFxyXG4gICAgICAgIFsnXFx1MDYxYicsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MjAwRCddLFxyXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUyMDBDJ10sXHJcbiAgICAgICAgWydcXHUwNkQyJywgJ1xcdTA2RDMnXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MjAwRSddLFxyXG4gICAgICAgIFsnXFx1MDYzNCcsICdcXHUwNjI0J10sXHJcbiAgICAgICAgWydcXHUwNjNhJywgJ1xcdTA2MjYnXSxcclxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MjAwRiddLFxyXG4gICAgICAgIFsnXFx1MDYwQycsICc+J10sXHJcbiAgICAgICAgWydcXHUwNkQ0JywgJzwnXSxcclxuICAgICAgICBbJy8nLCAnXFx1MDYxRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndXInXVxyXG4gIH0sXHJcbiAgJ1xcdTA2MjdcXHUwNjMxXFx1MDYyZlxcdTA2NDggUGhvbmV0aWMnOiB7XHJcbiAgICAnbmFtZSc6ICdVcmR1IFBob25ldGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNjREJywgJ1xcdTA2NEInLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDZGMScsICcxJywgJyEnXSxcclxuICAgICAgICBbJ1xcdTA2RjInLCAnMicsICdAJ10sXHJcbiAgICAgICAgWydcXHUwNkYzJywgJzMnLCAnIyddLFxyXG4gICAgICAgIFsnXFx1MDZGNCcsICc0JywgJyQnXSxcclxuICAgICAgICBbJ1xcdTA2RjUnLCAnNScsICdcXHUwNjZBJ10sXHJcbiAgICAgICAgWydcXHUwNkY2JywgJzYnLCAnXiddLFxyXG4gICAgICAgIFsnXFx1MDZGNycsICc3JywgJyYnXSxcclxuICAgICAgICBbJ1xcdTA2RjgnLCAnOCcsICcqJ10sXHJcbiAgICAgICAgWydcXHUwNkY5JywgJzknLCAnKCddLFxyXG4gICAgICAgIFsnXFx1MDZGMCcsICcwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNjQyJywgJ1xcdTA2NTInXSxcclxuICAgICAgICBbJ1xcdTA2NDgnLCAnXFx1MDY1MScsICdcXHUwNjAyJ10sXHJcbiAgICAgICAgWydcXHUwNjM5JywgJ1xcdTA2NzAnLCAnXFx1MDY1NiddLFxyXG4gICAgICAgIFsnXFx1MDYzMScsICdcXHUwNjkxJywgJ1xcdTA2MTMnXSxcclxuICAgICAgICBbJ1xcdTA2MkEnLCAnXFx1MDY3OScsICdcXHUwNjE0J10sXHJcbiAgICAgICAgWydcXHUwNkQyJywgJ1xcdTA2NEUnLCAnXFx1MDYwMSddLFxyXG4gICAgICAgIFsnXFx1MDYyMScsICdcXHUwNjI2JywgJ1xcdTA2NTQnXSxcclxuICAgICAgICBbJ1xcdTA2Q0MnLCAnXFx1MDY1MCcsICdcXHUwNjExJ10sXHJcbiAgICAgICAgWydcXHUwNkMxJywgJ1xcdTA2QzMnXSxcclxuICAgICAgICBbJ1xcdTA2N0UnLCAnXFx1MDY0RicsICdcXHUwNjU3J10sXHJcbiAgICAgICAgWydbJywgJ3snXSxcclxuICAgICAgICBbJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIyJywgJ1xcdUZERjInXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDYzNScsICdcXHUwNjEwJ10sXHJcbiAgICAgICAgWydcXHUwNjJGJywgJ1xcdTA2ODgnLCAnXFx1RkRGQSddLFxyXG4gICAgICAgIFsnXFx1MDY0MSddLFxyXG4gICAgICAgIFsnXFx1MDZBRicsICdcXHUwNjNBJ10sXHJcbiAgICAgICAgWydcXHUwNjJEJywgJ1xcdTA2QkUnLCAnXFx1MDYxMiddLFxyXG4gICAgICAgIFsnXFx1MDYyQycsICdcXHUwNjM2JywgJ1xcdUZERkInXSxcclxuICAgICAgICBbJ1xcdTA2QTknLCAnXFx1MDYyRSddLFxyXG4gICAgICAgIFsnXFx1MDY0NCddLFxyXG4gICAgICAgIFsnXFx1MDYxQicsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA2MzInLCAnXFx1MDYzMCcsICdcXHUwNjBGJ10sXHJcbiAgICAgICAgWydcXHUwNjM0JywgJ1xcdTA2OTgnLCAnXFx1MDYwRSddLFxyXG4gICAgICAgIFsnXFx1MDY4NicsICdcXHUwNjJCJywgJ1xcdTA2MDMnXSxcclxuICAgICAgICBbJ1xcdTA2MzcnLCAnXFx1MDYzOCddLFxyXG4gICAgICAgIFsnXFx1MDYyOCcsICcnLCAnXFx1RkRGRCddLFxyXG4gICAgICAgIFsnXFx1MDY0NicsICdcXHUwNkJBJywgJ1xcdTA2MDAnXSxcclxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFx1MDY1OCddLFxyXG4gICAgICAgIFsnXFx1MDYwQycsICcnLCAnPCddLFxyXG4gICAgICAgIFsnXFx1MDZENCcsICdcXHUwNjZCJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnXFx1MDYxRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1VTIFN0YW5kYXJkJzoge1xyXG4gICAgJ25hbWUnOiAnVVMgU3RhbmRhcmQnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRSddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydbJywgJ3snXSxcclxuICAgICAgICBbJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6J10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZW4tVVMnXVxyXG4gIH0sXHJcbiAgJ1VTIEludGVybmF0aW9uYWwnOiB7XHJcbiAgICAnbmFtZSc6ICdVUyBJbnRlcm5hdGlvbmFsJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMGExJywgJ1xcdTAwYjknXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTQnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGJjJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnXFx1MDBiZCddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAwYmUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUyMDE4J10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MjAxOSddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwYTUnXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMGQ3JywgJ1xcdTAwZjcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdcXHUwMGU0JywgJ1xcdTAwYzQnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICdcXHUwMGU1JywgJ1xcdTAwYzUnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMGU5JywgJ1xcdTAwYzknXSxcclxuICAgICAgICBbJ3InLCAnUicsICdcXHUwMGFlJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnLCAnXFx1MDBmZScsICdcXHUwMGRlJ10sXHJcbiAgICAgICAgWyd5JywgJ1knLCAnXFx1MDBmYycsICdcXHUwMGRjJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MDBmYScsICdcXHUwMGRhJ10sXHJcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBlZCcsICdcXHUwMGNkJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBmMycsICdcXHUwMGQzJ10sXHJcbiAgICAgICAgWydwJywgJ1AnLCAnXFx1MDBmNicsICdcXHUwMGQ2J10sXHJcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MDBhYiddLFxyXG4gICAgICAgIFsnXScsICd9JywgJ1xcdTAwYmInXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICdcXHUwMGFjJywgJ1xcdTAwYTYnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlMScsICdcXHUwMGMxJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBkZicsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDBmMCcsICdcXHUwMGQwJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAwZjgnLCAnXFx1MDBkOCddLFxyXG4gICAgICAgIFsnOycsICc6JywgJ1xcdTAwYjYnLCAnXFx1MDBiMCddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJywgJ1xcdTAwYjQnLCAnXFx1MDBhOCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsneicsICdaJywgJ1xcdTAwZTYnLCAnXFx1MDBjNiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnLCAnXFx1MDBhOScsICdcXHUwMGEyJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJywgJ1xcdTAwZjEnLCAnXFx1MDBkMSddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwYjUnXSxcclxuICAgICAgICBbJywnLCAnPCcsICdcXHUwMGU3JywgJ1xcdTAwYzcnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/JywgJ1xcdTAwYmYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZW4nXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MGVcXHUwNDM3XFx1MDQzMVxcdTA0MzVcXHUwNDNhXFx1MDQ0N1xcdTA0MzAnOiB7XHJcbiAgICAnbmFtZSc6ICdVemJlayBDeXJpbGxpYycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MjExNiddLFxyXG4gICAgICAgIFsnNCcsICc7J10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnOiddLFxyXG4gICAgICAgIFsnNycsICc/J10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWydcXHUwNDkzJywgJ1xcdTA0OTInXSxcclxuICAgICAgICBbJ1xcdTA0QjMnLCAnXFx1MDRCMiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NUUnLCAnXFx1MDQwRSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxyXG4gICAgICAgIFsnXFxcXCcsICcvJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDlCJywgJ1xcdTA0OUEnXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXHJcbiAgICAgICAgWydcXHUwNDREJywgJ1xcdTA0MkQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgWydcXHUwNDRFJywgJ1xcdTA0MkUnXSxcclxuICAgICAgICBbJy4nLCAnLCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndXonXVxyXG4gIH0sXHJcbiAgJ1xcdTA1ZDlcXHUwNWQ5XFx1MDViNFxcdTA1ZDNcXHUwNWQ5XFx1MDVlOSc6IHsgLy8gZnJvbSBodHRwOi8vd3d3Lnl2Lm9yZy91eWlwL2hlYnlpZGtiZC50eHQgaHR0cDovL3V5aXAub3JnL2tleWJvYXJkcy5odG1sXHJcbiAgICAnbmFtZSc6ICdZaWRkaXNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWyc7JywgJ34nLCAnXFx1MDVCMCddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTA1QjEnXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHUwNUIyJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDVCMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTA1QjQnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwNUI1J10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDVCNiddLFxyXG4gICAgICAgIFsnNycsICcqJywgJ1xcdTA1QjcnXSxcclxuICAgICAgICBbJzgnLCAnJicsICdcXHUwNUI4J10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDVDMiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTA1QzEnXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwNUI5J10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDVCQyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnLycsICdcXHUyMDFGJywgJ1xcdTIwMUYnXSxcclxuICAgICAgICBbJ1xcJycsICdcXHUyMDFFJywgJ1xcdTIwMUUnXSxcclxuICAgICAgICBbJ1xcdTA1RTcnLCAnYCcsICdgJ10sXHJcbiAgICAgICAgWydcXHUwNUU4JywgJ1xcdUZCMkYnLCAnXFx1RkIyRiddLFxyXG4gICAgICAgIFsnXFx1MDVEMCcsICdcXHVGQjJFJywgJ1xcdUZCMkUnXSxcclxuICAgICAgICBbJ1xcdTA1RDgnLCAnXFx1MDVGMCcsICdcXHUwNUYwJ10sXHJcbiAgICAgICAgWydcXHUwNUQ1JywgJ1xcdUZCMzUnLCAnXFx1RkIzNSddLFxyXG4gICAgICAgIFsnXFx1MDVERicsICdcXHVGQjRCJywgJ1xcdUZCNEInXSxcclxuICAgICAgICBbJ1xcdTA1REQnLCAnXFx1RkI0RScsICdcXHVGQjRFJ10sXHJcbiAgICAgICAgWydcXHUwNUU0JywgJ1xcdUZCNDQnLCAnXFx1RkI0NCddLFxyXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTA1QkQnXSxcclxuICAgICAgICBbJ10nLCAnfScsICdcXHUwNUJGJ10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnXFx1MDVCQiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA1RTknLCAnXFx1RkIyQScsICdcXHVGQjJBJ10sXHJcbiAgICAgICAgWydcXHUwNUQzJywgJ1xcdUZCMkInLCAnXFx1RkIyQiddLFxyXG4gICAgICAgIFsnXFx1MDVEMiddLFxyXG4gICAgICAgIFsnXFx1MDVEQicsICdcXHVGQjNCJywgJ1xcdUZCM0InXSxcclxuICAgICAgICBbJ1xcdTA1RTInLCAnXFx1MDVGMScsICdcXHUwNUYxJ10sXHJcbiAgICAgICAgWydcXHUwNUQ5JywgJ1xcdUZCMUQnLCAnXFx1RkIxRCddLFxyXG4gICAgICAgIFsnXFx1MDVENycsICdcXHVGRjFGJywgJ1xcdUZGMUYnXSxcclxuICAgICAgICBbJ1xcdTA1REMnLCAnXFx1MDVGMicsICdcXHUwNUYyJ10sXHJcbiAgICAgICAgWydcXHUwNURBJ10sXHJcbiAgICAgICAgWydcXHUwNUUzJywgJzonLCAnXFx1MDVDMyddLFxyXG4gICAgICAgIFsnLCcsICdcIicsICdcXHUwNUMwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNUQ2JywgJ1xcdTIyNjAnLCAnXFx1MjI2MCddLFxyXG4gICAgICAgIFsnXFx1MDVFMScsICdcXHVGQjRDJywgJ1xcdUZCNEMnXSxcclxuICAgICAgICBbJ1xcdTA1RDEnLCAnXFx1RkIzMScsICdcXHVGQjMxJ10sXHJcbiAgICAgICAgWydcXHUwNUQ0JywgJ1xcdTA1QkUnLCAnXFx1MDVCRSddLFxyXG4gICAgICAgIFsnXFx1MDVFMCcsICdcXHUyMDEzJywgJ1xcdTIwMTMnXSxcclxuICAgICAgICBbJ1xcdTA1REUnLCAnXFx1MjAxNCcsICdcXHUyMDE0J10sXHJcbiAgICAgICAgWydcXHUwNUU2JywgJ1xcdUZCNEEnLCAnXFx1RkI0QSddLFxyXG4gICAgICAgIFsnXFx1MDVFQScsICc8JywgJ1xcdTA1RjMnXSxcclxuICAgICAgICBbJ1xcdTA1RTUnLCAnPicsICdcXHUwNUY0J10sXHJcbiAgICAgICAgWycuJywgJz8nLCAnXFx1MjBBQSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd5aSddXHJcbiAgfSxcclxuICAnXFx1MDVkOVxcdTA1ZDlcXHUwNWI0XFx1MDVkM1xcdTA1ZDlcXHUwNWU5IFxcdTA1ZGNcXHUwNWUyXFx1MDVkMVxcdTA1ZDgnOiB7IC8vIGZyb20gaHR0cDovL2ppZHlzei5uZXQvXHJcbiAgICAnbmFtZSc6ICdZaWRkaXNoIChZaWRpc2ggTGVidCknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJzsnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTA1QjInLCAnXFx1MDVCMiddLFxyXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTA1QjMnLCAnXFx1MDVCMyddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTA1QjEnLCAnXFx1MDVCMSddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTA1QjQnLCAnXFx1MDVCNCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTA1QjUnLCAnXFx1MDVCNSddLFxyXG4gICAgICAgIFsnNicsICdeJywgJ1xcdTA1QjcnLCAnXFx1MDVCNyddLFxyXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTA1QjgnLCAnXFx1MDVCOCddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTA1QkInLCAnXFx1MDVCQiddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ1xcdTA1QjYnLCAnXFx1MDVCNiddLFxyXG4gICAgICAgIFsnMCcsICcoJywgJ1xcdTA1QjAnLCAnXFx1MDVCMCddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTA1QkYnLCAnXFx1MDVCRiddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTA1QjknLCAnXFx1MDVCOSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnLycsICcnLCAnXFx1MDVGNCcsICdcXHUwNUY0J10sXHJcbiAgICAgICAgWydcXCcnLCAnJywgJ1xcdTA1RjMnLCAnXFx1MDVGMyddLFxyXG4gICAgICAgIFsnXFx1MDVFNycsICcnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnXFx1MDVFOCddLFxyXG4gICAgICAgIFsnXFx1MDVEMCcsICcnLCAnXFx1MDVEMFxcdTA1QjcnLCAnXFx1RkIyRSddLFxyXG4gICAgICAgIFsnXFx1MDVEOCcsICcnLCAnXFx1MDVEMFxcdTA1QjgnLCAnXFx1RkIyRiddLFxyXG4gICAgICAgIFsnXFx1MDVENScsICdcXHUwNUQ1XFx1MDVCOScsICdcXHUwNUQ1XFx1MDVCQycsICdcXHVGQjM1J10sXHJcbiAgICAgICAgWydcXHUwNURGJywgJycsICdcXHUwNUQ1XFx1MDVENScsICdcXHUwNUYwJ10sXHJcbiAgICAgICAgWydcXHUwNUREJywgJycsICdcXHUwNUJDJ10sXHJcbiAgICAgICAgWydcXHUwNUU0JywgJycsICdcXHUwNUU0XFx1MDVCQycsICdcXHVGQjQ0J10sXHJcbiAgICAgICAgWyddJywgJ30nLCAnXFx1MjAxRScsICdcXHUyMDFEJ10sXHJcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MjAxQScsICdcXHUyMDE5J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnXFx1MDVCRScsICdcXHUwNUJFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDVFOScsICdcXHUwNUU5XFx1MDVDMScsICdcXHUwNUU5XFx1MDVDMicsICdcXHVGQjJCJ10sXHJcbiAgICAgICAgWydcXHUwNUQzJywgJycsICdcXHUyMEFBJ10sXHJcbiAgICAgICAgWydcXHUwNUQyJywgJ1xcdTIwMUUnXSxcclxuICAgICAgICBbJ1xcdTA1REInLCAnJywgJ1xcdTA1REJcXHUwNUJDJywgJ1xcdUZCM0InXSxcclxuICAgICAgICBbJ1xcdTA1RTInLCAnJywgJycsICdcXHVGQjIwJ10sXHJcbiAgICAgICAgWydcXHUwNUQ5JywgJycsICdcXHUwNUQ5XFx1MDVCNCcsICdcXHVGQjFEJ10sXHJcbiAgICAgICAgWydcXHUwNUQ3JywgJycsICdcXHUwNUYyXFx1MDVCNycsICdcXHVGQjFGJ10sXHJcbiAgICAgICAgWydcXHUwNURDJywgJ1xcdTA1RENcXHUwNUI5JywgJ1xcdTA1RDVcXHUwNUQ5JywgJ1xcdTA1RjEnXSxcclxuICAgICAgICBbJ1xcdTA1REEnLCAnJywgJycsICdcXHUwNUYyJ10sXHJcbiAgICAgICAgWydcXHUwNUUzJywgJzonLCAnXFx1MDVFNFxcdTA1QkYnLCAnXFx1RkI0RSddLFxyXG4gICAgICAgIFsnLCcsICdcIicsICc7JywgJ1xcdTA1QjInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA1RDYnLCAnJywgJ1xcdTIwMTMnLCAnXFx1MjAxMyddLFxyXG4gICAgICAgIFsnXFx1MDVFMScsICcnLCAnXFx1MjAxNCcsICdcXHUyMDE0J10sXHJcbiAgICAgICAgWydcXHUwNUQxJywgJ1xcdTA1RENcXHUwNUI5JywgJ1xcdTA1RDFcXHUwNUJGJywgJ1xcdUZCNEMnXSxcclxuICAgICAgICBbJ1xcdTA1RDQnLCAnJywgJ1xcdTIwMUQnLCAnXFx1MjAxQyddLFxyXG4gICAgICAgIFsnXFx1MDVFMCcsICcnLCAnXFx1MDU5QycsICdcXHUwNTlFJ10sXHJcbiAgICAgICAgWydcXHUwNURFJywgJycsICdcXHUyMDE5JywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJ1xcdTA1RTYnLCAnJywgJ1xcdTA1RTlcXHUwNUMxJywgJ1xcdUZCMkEnXSxcclxuICAgICAgICBbJ1xcdTA1RUEnLCAnPicsICdcXHUwNUVBXFx1MDVCQycsICdcXHVGQjRBJ10sXHJcbiAgICAgICAgWydcXHUwNUU1JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPycsICdcXHUyMDI2J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3lpJ11cclxuICB9LFxyXG4gICdcXHU0ZTJkXFx1NjU4N1xcdTZjZThcXHU5N2YzXFx1N2IyNlxcdTUzZjcnOiB7XHJcbiAgICAnbmFtZSc6ICdDaGluZXNlIEJvcG9tb2ZvIElNRScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjBBQycsICd+J10sXHJcbiAgICAgICAgWydcXHUzMTA1JywgJyEnXSxcclxuICAgICAgICBbJ1xcdTMxMDknLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDJDNycsICcjJ10sXHJcbiAgICAgICAgWydcXHUwMkNCJywgJyQnXSxcclxuICAgICAgICBbJ1xcdTMxMTMnLCAnJSddLFxyXG4gICAgICAgIFsnXFx1MDJDQScsICdeJ10sXHJcbiAgICAgICAgWydcXHUwMkQ5JywgJyYnXSxcclxuICAgICAgICBbJ1xcdTMxMUEnLCAnKiddLFxyXG4gICAgICAgIFsnXFx1MzExRScsICcpJ10sXHJcbiAgICAgICAgWydcXHUzMTIyJywgJygnXSxcclxuICAgICAgICBbJ1xcdTMxMjYnLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUzMTA2JywgJ3EnXSxcclxuICAgICAgICBbJ1xcdTMxMEEnLCAndyddLFxyXG4gICAgICAgIFsnXFx1MzEwRCcsICdlJ10sXHJcbiAgICAgICAgWydcXHUzMTEwJywgJ3InXSxcclxuICAgICAgICBbJ1xcdTMxMTQnLCAndCddLFxyXG4gICAgICAgIFsnXFx1MzExNycsICd5J10sXHJcbiAgICAgICAgWydcXHUzMTI3JywgJ3UnXSxcclxuICAgICAgICBbJ1xcdTMxMUInLCAnaSddLFxyXG4gICAgICAgIFsnXFx1MzExRicsICdvJ10sXHJcbiAgICAgICAgWydcXHUzMTIzJywgJ3AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUzMTA3JywgJ2EnXSxcclxuICAgICAgICBbJ1xcdTMxMEInLCAncyddLFxyXG4gICAgICAgIFsnXFx1MzEwRScsICdkJ10sXHJcbiAgICAgICAgWydcXHUzMTExJywgJ2YnXSxcclxuICAgICAgICBbJ1xcdTMxMTUnLCAnZyddLFxyXG4gICAgICAgIFsnXFx1MzExOCcsICdoJ10sXHJcbiAgICAgICAgWydcXHUzMTI4JywgJ2onXSxcclxuICAgICAgICBbJ1xcdTMxMUMnLCAnayddLFxyXG4gICAgICAgIFsnXFx1MzEyMCcsICdsJ10sXHJcbiAgICAgICAgWydcXHUzMTI0JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MzEwOCcsICd6J10sXHJcbiAgICAgICAgWydcXHUzMTBDJywgJ3gnXSxcclxuICAgICAgICBbJ1xcdTMxMEYnLCAnYyddLFxyXG4gICAgICAgIFsnXFx1MzExMicsICd2J10sXHJcbiAgICAgICAgWydcXHUzMTE2JywgJ2InXSxcclxuICAgICAgICBbJ1xcdTMxMTknLCAnbiddLFxyXG4gICAgICAgIFsnXFx1MzEyOScsICdtJ10sXHJcbiAgICAgICAgWydcXHUzMTFEJywgJzwnXSxcclxuICAgICAgICBbJ1xcdTMxMjEnLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MzEyNScsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd6aC1CT1BPJ11cclxuICB9LFxyXG4gICdcXHU0ZTJkXFx1NjU4N1xcdTRlZDNcXHU5ODg5XFx1OGY5M1xcdTUxNjVcXHU2Y2Q1Jzoge1xyXG4gICAgJ25hbWUnOiAnQ2hpbmVzZSBDYW5namllIElNRScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjBBQycsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJygnXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHU2MjRCJywgJ3EnXSxcclxuICAgICAgICBbJ1xcdTc1MzAnLCAndyddLFxyXG4gICAgICAgIFsnXFx1NkMzNCcsICdlJ10sXHJcbiAgICAgICAgWydcXHU1M0UzJywgJ3InXSxcclxuICAgICAgICBbJ1xcdTVFRkYnLCAndCddLFxyXG4gICAgICAgIFsnXFx1NTM1QycsICd5J10sXHJcbiAgICAgICAgWydcXHU1QzcxJywgJ3UnXSxcclxuICAgICAgICBbJ1xcdTYyMDgnLCAnaSddLFxyXG4gICAgICAgIFsnXFx1NEVCQScsICdvJ10sXHJcbiAgICAgICAgWydcXHU1RkMzJywgJ3AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHU2NUU1JywgJ2EnXSxcclxuICAgICAgICBbJ1xcdTVDMzgnLCAncyddLFxyXG4gICAgICAgIFsnXFx1NjcyOCcsICdkJ10sXHJcbiAgICAgICAgWydcXHU3MDZCJywgJ2YnXSxcclxuICAgICAgICBbJ1xcdTU3MUYnLCAnZyddLFxyXG4gICAgICAgIFsnXFx1N0FGOScsICdoJ10sXHJcbiAgICAgICAgWydcXHU1MzQxJywgJ2onXSxcclxuICAgICAgICBbJ1xcdTU5MjcnLCAnayddLFxyXG4gICAgICAgIFsnXFx1NEUyRCcsICdsJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1RkYzQScsICd6J10sXHJcbiAgICAgICAgWydcXHU5NkUzJywgJ3gnXSxcclxuICAgICAgICBbJ1xcdTkxRDEnLCAnYyddLFxyXG4gICAgICAgIFsnXFx1NTk3MycsICd2J10sXHJcbiAgICAgICAgWydcXHU2NzA4JywgJ2InXSxcclxuICAgICAgICBbJ1xcdTVGMTMnLCAnbiddLFxyXG4gICAgICAgIFsnXFx1NEUwMCcsICdtJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd6aCddXHJcbiAgfVxyXG59O1xyXG5cclxuLy8gYWxpYXNlc1xyXG5rZXlib2FyZExheW91dHNbJ0hydmF0c2tpJ10gPSB7XHJcbiAgJ25hbWUnOiAnQ3JvYXRpYW4nLFxyXG4gICdrZXlzJzoga2V5Ym9hcmRMYXlvdXRzWydCb3NhbnNraSddLmtleXMuc2xpY2UoMCksXHJcbiAgJ2xhbmcnOiBbJ2hyJ11cclxufTtcclxuXHJcbmtleWJvYXJkTGF5b3V0c1snU2xvdmVuXFx1MDE2MVxcdTAxMGRpbmEnXSA9IHtcclxuICAnbmFtZSc6ICdTbG92ZW5pYW4nLFxyXG4gICdrZXlzJzoga2V5Ym9hcmRMYXlvdXRzWydCb3NhbnNraSddLmtleXMuc2xpY2UoMCksXHJcbiAgJ2xhbmcnOiBbJ3NsJ11cclxufTtcclxuXHJcbmtleWJvYXJkTGF5b3V0c1snU3Jwc2tpJ10gPSB7XHJcbiAgJ25hbWUnOiAnU2VyYmlhbiBMYXRpbicsXHJcbiAgJ2tleXMnOiBrZXlib2FyZExheW91dHNbJ0Jvc2Fuc2tpJ10ua2V5cy5zbGljZSgwKSxcclxuICAnbGFuZyc6IFsnc3InXVxyXG59O1xyXG5cclxuZXhwb3J0IHsga2V5Ym9hcmRMYXlvdXRzLCBNQVRfS0VZQk9BUkRfTEFZT1VUUyB9O1xyXG4iXX0=