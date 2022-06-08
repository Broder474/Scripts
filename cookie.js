cookie = document.cookie
num = 0
for(let i = 0; i < cookie.length; i++) {
    if (cookie[i] == ';') 
        num++;
}
var strings = [num];
for (let i = 0; i <= num; i++) {
    strings[i] = ''
}
var cookie_num = 0;
for(let i = 0; i < cookie.length; i++) {
    strings[cookie_num] += cookie[i]
    if (cookie[i] == ';') 
        cookie_num++;
}
for (let i = 0; i <= cookie_num; i++) {
    temp_string = ''
    bias = 0
    for (let j = 0; j < strings[i].length - bias; j++) {
        if (strings[i][j + bias] == '%') {
            set = strings[i][j + bias] + strings[i][j + 1 + bias] + strings[i][j + 2 + bias];
            sym = ''
            switch (set) {
                case '%20':
                    sym = ' '
                    break
                case '%21':
                    sym = '!'
                    break
                case '%22':
                    sym = '"'
                    break
                case '%23':
                    sym = '#'
                    break
                case '%24':
                    sym = '$'
                    break
                case '%25':
                    sym = '%'
                    break
                case '%26':
                    sym = '&'
                    break
                case '%27':
                    sym = "'"
                    break
                case '%28':
                    sym = '('
                    break
                case '%29':
                    sym = ')'
                    break
                case '%2A':
                    sym = '*'
                    break
                case '%2B':
                    sym = '+'
                    break
                case '%2C':
                    sym = ','
                    break
                case '%2D':
                    sym = '-'
                    break
                case '%2E':
                    sym = '.'
                    break
                case '%2F':
                    sym = '/'
                    break
                case '%30':
                    sym = '0'
                    break
                case '%31':
                    sym = '1'
                    break
                case '%32':
                    sym = '2'
                    break
                case '%33':
                    sym = '3'
                    break
                case '%34':
                    sym = '4'
                    break
                case '%35':
                    sym = '5'
                    break
                case '%36':
                    sym = '6'
                    break
                case '%37':
                    sym = '7'
                    break
                case '%38':
                    sym = '8'
                    break
                case '%39':
                    sym = '9'
                    break
                case '%3A':
                    sym = ':'
                    break
                case '%3B':
                    sym = ';'
                    break
                case '%3C':
                    sym = '<'
                    break
                case '%3D':
                    sym = '='
                    break
                case '%3E':
                    sym = '>'
                    break
                case '%3F':
                    sym = '?'
                    break
                case '%40':
                    sym = '@'
                    break
                case '%41':
                    sym = 'A'
                    break
                case '%42':
                    sym = 'B'
                    break
                case '%43':
                    sym = 'C'
                    break
                case '%44':
                    sym = 'D'
                    break
                case '%45':
                    sym = 'E'
                    break
                case '%46':
                    sym = 'F'
                    break
                case '%47':
                    sym = 'G'
                    break
                case '%48':
                    sym = 'H'
                    break
                case '%49':
                    sym = 'I'
                    break
                case '%4A':
                    sym = 'J'
                    break
                case '%4B':
                    sym = 'K'
                    break
                case '%4C':
                    sym = 'L'
                    break
                case '%4D':
                    sym = 'M'
                    break
                case '%4E':
                    sym = 'N'
                    break
                case '%4F':
                    sym = 'O'
                    break
                case '%50':
                    sym = 'P'
                    break
                case '%51':
                    sym = 'Q'
                    break
                case '%52':
                    sym = 'R'
                    break
                case '%53':
                    sym = 'S'
                    break
                case '%54':
                    sym = 'T'
                    break
                case '%55':
                    sym = 'U'
                    break
                case '%56':
                    sym = 'V'
                    break
                case '%57':
                    sym = 'W'
                    break
                case '%58':
                    sym = 'X'
                    break
                case '%59':
                    sym = 'Y'
                    break
                case '%5A':
                    sym = 'Z'
                    break
                case '%5B':
                    sym = '['
                    break
                case '%5C':
                    sym = '\\'
                    break
                case '%5D':
                    sym = ']'
                    break
                case '%5E':
                    sym = '^'
                    break
                case '%5F':
                    sym = '_'
                    break
                case '%60':
                    sym = '`'
                    break
                case '%61':
                    sym = 'a'
                    break
                case '%62':
                    sym = 'b'
                    break
                case '%63':
                    sym = 'c'
                    break
                case '%64':
                    sym = 'd'
                    break
                case '%65':
                    sym = 'e'
                    break
                case '%66':
                    sym = 'f'
                    break
                case '%67':
                    sym = 'g'
                    break
                case '%68':
                    sym = 'h'
                    break
                case '%69':
                    sym = 'i'
                    break
                case '%6A':
                    sym = 'j'
                    break
                case '%6B':
                    sym = 'k'
                    break
                case '%6C':
                    sym = 'l'
                    break
                case '%6D':
                    sym = 'm'
                    break
                case '%6E':
                    sym = 'n'
                    break
                case '%6F':
                    sym = 'o'
                    break
                case '%70':
                    sym = 'p'
                    break
                case '%71':
                    sym = 'q'
                    break
                case '%72':
                    sym = 'r'
                    break
                case '%73':
                    sym = 's'
                    break
                case '%74':
                    sym = 't'
                    break
                case '%75':
                    sym = 'u'
                    break
                case '%76':
                    sym = 'v'
                    break
                case '%77':
                    sym = 'w'
                    break
                case '%78':
                    sym = 'x'
                    break
                case '%79':
                    sym = 'y'
                    break
                case '%7A':
                    sym = 'z'
                    break
                case '%7B':
                    sym = '{'
                    break
                case '%7C':
                    sym = '|'
                    break
                case '%7D':
                    sym = '}'
                    break
                case '%7E':
                    sym = '~'
                    break    
            }
            temp_string += sym;
            bias += 2;
        }
        else
            temp_string += strings[i][j + bias];
    }
    strings[i] = temp_string;
}