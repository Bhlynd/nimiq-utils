export default class AddressBook {
    static getLabel(address) {
        return AddressBook.BOOK[address] || null;
    }
}

AddressBook.BOOK = {
    'NQ92 0RGS 0YGB MRY8 5MHM MBL2 HSP5 7N0U Y5C6': 'pool.nimiq.watch',
    'NQ58 U4HN TVVA FCRS VLYL 8XTL K0B7 2FVD EC6B': 'skypool',
    'NQ88 D1R3 KR4H KSY2 CQYR 5G0C 80X4 0KED 32G8': 'skypool',
    'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8': 'skypool',
    'NQ43 GQ0B R7AJ 7SUG Q2HC 3XMP MNRU 8VM0 AJEG': 'skypool',
    'NQ32 473Y R5T3 979R 325K S8UT 7E3A NRNS VBX2': 'SushiPool',
    'NQ76 R7R0 DCKG N0RC 35XK ULTS N41J VGA7 3CMP': 'Porky Pool',
    'NQ10 76JC KSSE 5S2R U401 NC5P M3N2 8TKQ YATP': 'pool.nimiqchain.info',
    'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1': 'Beeppool',
    'NQ40 BHLY ND9E GAVA PMJ5 XF9Q CDDJ 5N4F L012': 'pool.bhlynd.nz',
}
