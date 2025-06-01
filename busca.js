// --- LÓGICA DA BUSCA DE PEÇAS ---

// 1. BASE DE DADOS: Todas as informações da sua tabela estão aqui.
const baseDeDadosEmbreagens = [
    { "aplicacao": "MB 608 (GAFANHOTO)", "tipo": "REMANU", "diametro": "250mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1113 (GAFANHOTO)", "tipo": "REMANU", "diametro": "280mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1113 (GAFANHOTO)", "tipo": "NOVO", "diametro": "310mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 709 (PUXAR)", "tipo": "REMANU", "diametro": "280mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1313 (MEMBRANA)", "tipo": "NOVO", "diametro": "310mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1418 / 1518 / 1618 / 366", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 710 / 712 / 912 / 914", "tipo": "REMANU", "diametro": "310mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 710 PLUS (ELETRONICO)", "tipo": "REMANU", "diametro": "310mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1620/1418r (EF - CX MB)", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1620/1621/1418R/2423 (EG - CX ZF)", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1621 (PLATO DE FERRO)", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 914/915/1418/1618 (ELET) ATEGO/ACELLO", "tipo": "REMANU", "diametro": "362mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 914/915/1418/1618 (ELET) ATEGO/ACELLO", "tipo": "NOVO", "diametro": "362mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1935/1941 (DUPLO)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1519/1520", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 355/5 (GAFANHOTO)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1525/ 371", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2423 (ROLAMENTO MB 1620 - EG - CX ZF)", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1620/1722/2425/2428 (EF - CX MB) / 18 ESTRIAS", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1620/1722/2425/2428 (EF - CX MB) / 18 ESTRIAS", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1722 ELETRONICO", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1722 ELETRONICO", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1622/2423 (ELETRONICO)", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1622/2423 (ELETRONICO)", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2425/2428 (ELETRONICO) ATEGO", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2425/2428 (ELETRONICO) ATEGO", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2638/2644/2646 (EG - CX ZF) AXOR (DUPLO)", "tipo": "REMANU", "diametro": "400mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2638/2644/2646 (EG-CX ZF) AXOR (DUPLO)", "tipo": "NOVO", "diametro": "400mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2638/2644/2646 (EG - CX MB) ACTROS/AXOR-MANUAL / SEMI-AUTOMÁTICO(DUPLO)", "tipo": "REMANU", "diametro": "400mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2633/2644/2646 (EF - CX MB) ACTROS/AXOR-MANUAL / SEMI-AUTOMÁTICO(DUPLO)", "tipo": "NOVO", "diametro": "400mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2646/2651 (EF - CX MB) ACTROS/AXOR-AUT. (DUPLO)", "tipo": "REMANU", "diametro": "400mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2646/2651 (EF - CX MB) ACTROS/AXOR-AUT. (DUPLO)", "tipo": "NOVO", "diametro": "400mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1630/2325 (GAFANHOTO)", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB O-371", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1929/1924 (GAFANHOTO)", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1933/1932 (MEMBRANA)", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2423 (ATEGO)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2423 (ATEGO)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB O-400/1935/1941", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB O-400/1935/1941", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2428/ATEGO (8 )", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2428/ATEGO (8 )", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1938/1634 (EG - CX ZF)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 1938/1634 (EG - CX ZF)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2726/2831/1938/2540/1933/2544 (AXOR)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB 2726/2831/1938/2540/1933/2544 (AXOR) 18 ESTRIAS", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB O-500", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "MB O-500", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "ATUADOR HIDRAULICO", "tipo": "NOVO", "diametro": "", "modelo": "SACHS", "marca": "Mercedes-Benz" },
    { "aplicacao": "VOLVO B7 (ONIBUS)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO B7 (ONIBUS)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO I-SHIFT 460/500/540 (AUT.)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO I-SHIFT 460/500/540 (AUT.)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO I-SHIFT 540 (MODELO NOVO SET16/...)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "ATUADOR VOLVO I-SHIFT 460/500/520 (AUTOMATICO)", "tipo": "REMANU", "diametro": "", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO N10 (DUPLO)", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO N10 (DUPLO)", "tipo": "NOVO", "diametro": "350mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 240/260 (COM MORINGA)", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 240/260 (COM MORINGA)", "tipo": "NOVO", "diametro": "365mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 260 (ADAPTAÇÃO)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 260 (ADAPTAÇÃO)", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO NL12/360 (DUPLO) EDC", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO N10/N12 (DUPLO)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 270/B270R (ESTRIA GROSSA) / EATON", "tipo": "REMANU", "diametro": "395mm", "modelo": "EATON", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 270/B270R  (ESTRIA GROSSA) / EATON", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 310/330", "tipo": "REMANU", "diametro": "395mm", "modelo": "EATON", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 310/330", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Volvo" },
    { "aplicacao": "VOLVO M12/ACOPLADO (EG - CX ZF)", "tipo": "REMANU", "diametro": "400mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH540/FM12 ACOPLADO", "tipo": "REMANU", "diametro": "400mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH540/FM12 ACOPLADO", "tipo": "NOVO", "diametro": "400mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO N10/N12 XH (EMPURRAR)", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 330 I-SHIFT/ONIBUS B12R", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO VM 330 I-SHIFT/ONIBUS B12R", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH 380 (EG - CX ZF)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH 380 (EG - CX ZF)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH 380/420 (EF-CX VT/D12)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH 380/420 (EF-CX VT/D12)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH 400/440 (EF-CX VT/D13)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO FH 400/440 (EF-CX VT/D13)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO NL10/340 POWER", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO NL10/340 POWER", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO NL12/360 EDC", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO NL12/360 EDC", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO B10M (ONIBUS)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "VOLVO B10M (ONIBUS)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volvo" },
    { "aplicacao": "FORD F1000 HSD (ATUADOR)", "tipo": "REMANU", "diametro": "250mm", "modelo": "", "marca": "Ford" },
    { "aplicacao": "FORD F1000/4000 DIESEL", "tipo": "REMANU", "diametro": "280mm", "modelo": "", "marca": "Ford" },
    { "aplicacao": "FORD F1000 DIESEL TURBO", "tipo": "REMANU", "diametro": "300mm", "modelo": "", "marca": "Ford" },
    { "aplicacao": "FORD F250/350/4000 CUMM. AJUSTAVEL", "tipo": "REMANU", "diametro": "300mm", "modelo": "", "marca": "Ford" },
    { "aplicacao": "FORD F12000/F14000/814/815/7.100", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 815 (ELETRONICO)", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 815 (ELETRONICO)", "tipo": "NOVO", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 13-814/12000/14000/MWM", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 13-816/1019/9-160 (2011) CAB. NOVA EUROS", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 13-816/1019/9-160 (2011) CAB. NOVA EUROS", "tipo": "NOVO", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD L1-116/1319/1330", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 1517/14 (ELETRONICO)", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 16-22/2422/2423/1718 (C/MORINGA) EATON", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 16-22/2422/2423/1718 (C/MORINGA) EATON", "tipo": "NOVO", "diametro": "365mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 16-18/2422/2423/1718 (S/MORINGA) EATON", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 16-18/2422/2423/1718 (S/MORINGA) EATON", "tipo": "NOVO", "diametro": "365mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 1723/1519/1317 (CABINE NOVA), ROL. ARREDOND.", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 1723/1519/1317 (CABINE NOVA), ROL. ARREDOND.", "tipo": "NOVO", "diametro": "365mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 2426/2428 (ELETRÔNICO)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 2426/2428 (ELETRÔNICO)", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 4030/4331 (C/MORINGA)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 4030/4331 (C/MORINGA)", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 4030/4331 (S/ MORINGA)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD CARGO 4030/4331 (S/ MORINGA)", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 2629 (CABINE NOVA)", "tipo": "REMANU", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 2629 (CABINE NOVA)", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 2628 (CABINE NOVA)", "tipo": "REMANU", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 2628 (CABINE NOVA)", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 2429 (CABINE NOVA) ROL.ARREDOND.", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 2429 (CABINE NOVA) ROL.ARREDOND.", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 4031 (S/ MORINGA) *ADAPTAÇÃO", "tipo": "REMANU", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 4031 (S/ MORINGA) NOVO *ADAPTAÇÃO", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 4532/2428/5032", "tipo": "REMANU", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 4532/2428/5032", "tipo": "NOVO", "diametro": "395mm", "modelo": "EATON", "marca": "Ford" },
    { "aplicacao": "FORD 2842/TRAÇADO (CABINE NOVA)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 2842/TRAÇADO (CABINE NOVA)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 1933/1942 (CABINE NOVA)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "FORD 1933/1942 (CABINE NOVA)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Ford" },
    { "aplicacao": "IVECO DAILY (MODELO", "tipo": "REMANU", "diametro": "260mm", "modelo": "", "marca": "Iveco" },
    { "aplicacao": "IVECO DAILY (ELETRONICA)", "tipo": "REMANU", "diametro": "280mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO DAILY (ELETRONICA)", "tipo": "NOVO", "diametro": "280mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO VERTIS / 13...", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO VERTIS / 13...", "tipo": "NOVO", "diametro": "330mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO EUROCARGO (PUXAR) / MODELO ANTIGO", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO EUROCARGO (PUXAR) / MODELO ANTIGO", "tipo": "NOVO", "diametro": "350mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO ATTACK 150E21", "tipo": "REMANU", "diametro": "362mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO ATTACK 150E21", "tipo": "NOVO", "diametro": "362mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO TECTOR (PUXAR) / MODELO NOVO / 240E25", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO TECTOR (PUXAR) / MODELO NOVO / 240E25", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO TECTOR STRADALE / 240E28", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO TECTOR STRADALE / 240E28", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO CAVALINNO / CURSOR (330 CV)", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO CAVALINNO / CURSOR (330 CV)", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO EUROTECH/STRALIS", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "IVECO EUROTECH/STRALIS", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Iveco" },
    { "aplicacao": "SCANIA 141 SPICER (PUXAR) DUPLO", "tipo": "REMANU", "diametro": "380mm", "modelo": "", "marca": "Scania" },
    { "aplicacao": "SCANIA 142 (EMPURRAR) DUPLO", "tipo": "REMANU", "diametro": "380mm", "modelo": "", "marca": "Scania" },
    { "aplicacao": "SCANIA 110 (ESTRIA GROSSA)", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 111 (ESTRIA FINA)", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 112 H/HS", "tipo": "REMANU", "diametro": "420mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 113/112 HW (PUXAR) / 10 MARCHAS", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 113/112 HW (PUXAR) / 10 MARCHAS", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 113H (PUXAR) / 8 e 6 MARCHAS", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 113H (PUXAR) / 8 e 6 MARCHAS", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 124/114 (COM SERVO ESCRAVO)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 124/114 (COM SERVO ESCRAVO)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 124/114 S 4 (COM ROLAMENTO)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 124/114 S 4 (COM ROLAMENTO)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 124 S5/MANUAL REFORÇADO (VALEO)", "tipo": "REMANU", "diametro": "430mm", "modelo": "VALEO", "marca": "Scania" },
    { "aplicacao": "SCANIA 124 S5/MANUAL REFORÇADO (VALEO)", "tipo": "NOVO", "diametro": "430mm", "modelo": "VALEO", "marca": "Scania" },
    { "aplicacao": "SCANIA 124 S5/MANUAL (SACHS)", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA 124 S5/MANUAL (SACHS)", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "SCANIA P124 S 5/OPT REFORÇADO (VALEO)", "tipo": "REMANU", "diametro": "430mm", "modelo": "VALEO", "marca": "Scania" },
    { "aplicacao": "SCANIA P124 S 5/OPT REFORÇADO (VALEO)", "tipo": "NOVO", "diametro": "430mm", "modelo": "VALEO", "marca": "Scania" },
    { "aplicacao": "SCANIA P310 (VALEO)", "tipo": "REMANU", "diametro": "430mm", "modelo": "VALEO", "marca": "Scania" },
    { "aplicacao": "SCANIA 440 AUTOMATICO", "tipo": "REMANU", "diametro": "", "modelo": "SACHS", "marca": "Scania" },
    { "aplicacao": "VW 6.90/7...", "tipo": "REMANU", "diametro": "280mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 11130/13130", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 8.140/8.150 (ELETRONICO)", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 8.140/8.150 (ELETRONICO)", "tipo": "NOVO", "diametro": "330mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 8.160 (ELETRONICO)", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 8.160 (ELETRONICO)", "tipo": "NOVO", "diametro": "330mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 8.120/11.130/7.100/8.140", "tipo": "REMANU", "diametro": "330mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 11.180/11.190 DELIVERY 2019 ....PUXAR", "tipo": "REMANU", "diametro": "362mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 13.180/16.180 WORKER (C/ FUNIL) - PUXAR", "tipo": "REMANU", "diametro": "350mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 13.180/16.180 CONSTELLATION", "tipo": "REMANU", "diametro": "362mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 13.180/16.180 CONSTELLATION", "tipo": "NOVO", "diametro": "362mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 16.220/16.210 (S/ MORINGA) EATON", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Volkswagen" },
    { "aplicacao": "VW 16.220/16.210 (S/ MORINGA) EATON", "tipo": "NOVO", "diametro": "365mm", "modelo": "EATON", "marca": "Volkswagen" },
    { "aplicacao": "VW 16.220/16.210 (C/MORINGA) EATON", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Volkswagen" },
    { "aplicacao": "VW 16.220/16.210 (C/MORINGA) EATON", "tipo": "NOVO", "diametro": "365mm", "modelo": "EATON", "marca": "Volkswagen" },
    { "aplicacao": "VW 18.310 (DUPLO) EATON", "tipo": "REMANU", "diametro": "365mm", "modelo": "EATON", "marca": "Volkswagen" },
    { "aplicacao": "VW 18.310/26.260 SACHS (C/MORINGA)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 18.310/26.260 SACHS (C/MORINGA)", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 18.310/26.260 SACHS (S/MORINGA)", "tipo": "REMANU", "diametro": "380mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 18.310/26.260 SACHS (S/MORINGA)", "tipo": "NOVO", "diametro": "380mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 17280", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 19.320/ONIBUS (FORD 4532)", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 19.320/ONIBUS (FORD 4532)", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 24.250/24.280 CONSTELLATION", "tipo": "REMANU", "diametro": "395mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 24.250/24.280 CONSTELLATION", "tipo": "NOVO", "diametro": "395mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 19.320/19.370 CONSTELLATION", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 19.320/19.370 CONSTELLATION", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 19.330/19.390 CONSTELLATION", "tipo": "REMANU", "diametro": "430mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "VW 19.330/19.390 CONSTELLATION", "tipo": "NOVO", "diametro": "430mm", "modelo": "SACHS", "marca": "Volkswagen" },
    { "aplicacao": "DAF 105.440", "tipo": "REMANU", "diametro": "430mm", "modelo": "", "marca": "DAF" },
    { "aplicacao": "DAF 105.440", "tipo": "NOVO", "diametro": "430mm", "modelo": "", "marca": "DAF" },
    { "aplicacao": "AGRALE 16000/1800D/7000 MOTOR 229", "tipo": "REMANU", "diametro": "280mm", "modelo": "", "marca": "Agrale" },
    { "aplicacao": "AGRALE 8.500 MWM/MICRO-ONUBUS VOLARE A6", "tipo": "REMANU", "diametro": "300mm", "modelo": "", "marca": "Agrale" },
    { "aplicacao": "AGRALE 8500/ 9200 ELETRONICO VOLARE (GARFO ESTAMP)", "tipo": "REMANU", "diametro": "330mm", "modelo": "", "marca": "Agrale" },
    { "aplicacao": "AGRALE 12000/14000 (ELETRONICO) EMPURRAR", "tipo": "REMANU", "diametro": "362mm", "modelo": "", "marca": "Agrale" },
    { "aplicacao": "AGRALE CUMMINS (C/ MORINGA) EATON - PUXAR", "tipo": "REMANU", "diametro": "365mm", "modelo": "", "marca": "Agrale" }
]

// 2. PEGANDO OS ELEMENTOS DO HTML
const filtroTexto = document.getElementById('filtro-texto');
const filtroMarca = document.getElementById('filtro-marca');
const filtroTipo = document.getElementById('filtro-tipo');
const tabelaCorpo = document.getElementById('tabela-corpo');
const semResultados = document.getElementById('sem-resultados');

// 3. FUNÇÃO PARA RENDERIZAR A TABELA
function renderizarTabela(itens) {
    tabelaCorpo.innerHTML = ''; // Limpa a tabela

    if (itens.length === 0) {
        semResultados.style.display = 'block';
    } else {
        semResultados.style.display = 'none';
        
        // Número de WhatsApp para onde a mensagem será enviada
        const telefoneWhatsapp = '5541995878366'; 

        itens.forEach(item => {
            // Cria a mensagem personalizada para cada peça
            const mensagem = `Olá! Vim pelo site e tenho interesse na embreagem modelo "${item.modelo}" para o veículo "${item.aplicacao}". Poderia me passar um orçamento?`;
            
            // Codifica a mensagem para ser usada em uma URL
            const mensagemCodificada = encodeURIComponent(mensagem);

            // Cria o link completo do WhatsApp
            const linkWhatsapp = `https://wa.me/${telefoneWhatsapp}?text=${mensagemCodificada}`;

            const tr = document.createElement('tr');
            
            // ATENÇÃO: A grande mudança está na última linha (<td> do Modelo)
            tr.innerHTML = `
                <td data-label="Aplicação">${item.aplicacao}</td>
                <td data-label="Marca">${item.marca}</td>
                <td data-label="Tipo">${item.tipo}</td>
                <td data-label="Diâmetro">${item.diametro}</td>
                <td data-label="Modelo">
                    <a href="${linkWhatsapp}" target="_blank" class="whatsapp-link">
                        <i class="fab fa-whatsapp"></i> ${item.modelo}
                    </a>
                </td>
            `;
            tabelaCorpo.appendChild(tr);
        });
    }
}

// 4. FUNÇÃO PARA POPULAR O FILTRO DE MARCAS
function popularFiltroMarcas() {
    const marcas = [...new Set(baseDeDadosEmbreagens.map(item => item.marca))].sort();
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        filtroMarca.appendChild(option);
    });
}

// 5. FUNÇÃO PRINCIPAL DE FILTRAGEM
function filtrarDados() {
    const texto = filtroTexto.value.toLowerCase();
    const marca = filtroMarca.value;
    const tipo = filtroTipo.value;
    const resultadosFiltrados = baseDeDadosEmbreagens.filter(item => {
        const matchTexto = item.aplicacao.toLowerCase().includes(texto) ||
                   item.marca.toLowerCase().includes(texto);
        const matchMarca = !marca || item.marca === marca;
        const matchTipo = !tipo || item.tipo === tipo;
        return matchTexto && matchMarca && matchTipo;
    });
    

    renderizarTabela(resultadosFiltrados);
}

// 6. EVENT LISTENERS
// Adicionado um 'if' para garantir que o script não quebre na página inicial
if (filtroTexto) {
    filtroTexto.addEventListener('keyup', filtrarDados);
    filtroMarca.addEventListener('change', filtrarDados);
    filtroTipo.addEventListener('change', filtrarDados);
}


// 7. INICIALIZAÇÃO
// Adicionado um 'if' para rodar a inicialização apenas na página de busca
if (document.getElementById('busca-pecas')) {
    document.addEventListener('DOMContentLoaded', () => {
        popularFiltroMarcas();
        renderizarTabela(baseDeDadosEmbreagens);
    });
}