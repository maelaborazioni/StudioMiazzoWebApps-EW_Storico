dataSource:"db:/ma_anagrafiche/lavoratori",
extendsID:"E1B6951E-8C22-4464-9B19-707548D2B2DE",
items:[
{
anchors:9,
dataProviderID:"idEventoLungo",
displayType:2,
editable:false,
location:"545,20",
onActionMethodID:"-1",
onDataChangeMethodID:"04D01487-9081-4264-8D76-EDA8463E1BD7",
size:"250,20",
typeid:4,
uuid:"27452B9F-4D65-46A6-9F39-F021CC164A50",
valuelistID:"1A0D1A3F-85A1-40C6-B1BB-BD6FD1CE70E7"
},
{
items:[
{
containsFormID:"8380B511-21B8-4BF4-B73D-6CB390E7C279",
location:"332,384",
relationName:"lavoratori_to_storico_datiaggiuntivi",
text:"storico_datiaggiuntivi",
typeid:15,
uuid:"2F0BA042-826E-4935-A560-74DDC2BCB36E"
}
],
location:"0,360",
name:"tab_dati_aggiuntivi",
printable:false,
size:"800,80",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"2DA8C9BD-DBF9-458A-87D3-1A6A6C59E7FE",
visible:false
},
{
dataProviderID:"codice",
format:"0",
location:"10,20",
size:"50,20",
typeid:4,
uuid:"373590C4-3EBB-48A5-A2EC-0DACF9EE8154"
},
{
location:"10,0",
size:"80,20",
text:"Dipendente",
transparent:true,
typeid:7,
uuid:"483EDE60-714D-47A7-88E8-921E1C100D0C"
},
{
height:480,
partType:5,
typeid:19,
uuid:"6C2BCB3B-5DBF-4FFB-BAF0-26DAB9CDD6B2"
},
{
formIndex:1,
location:"0,50",
name:"lbl_elenco_certificati",
size:"124,20",
styleClass:"title_text",
text:"Elenco certificati",
transparent:true,
typeid:7,
uuid:"7130A7DE-08A1-4EF5-A509-5F080F780502"
},
{
anchors:9,
location:"545,0",
size:"80,20",
text:"Evento lungo",
transparent:true,
typeid:7,
uuid:"7B5E28B6-A1CF-4C59-B49E-FAC6BF5691FD"
},
{
location:"0,50",
size:"500,20",
styleClass:"title_bar",
typeid:7,
uuid:"9E3B9A13-1900-4DAD-A449-0FFF050BDFF7"
},
{
enabled:false,
location:"60,20",
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"B05110D0-3E3E-4A33-93D2-66DC57703F62"
},
{
anchors:13,
background:"#c0c0c0",
borderType:"SpecialMatteBorder,0.0,1.0,1.0,1.0,#000000,#434343,#434343,#434343,0.0,",
location:"490,70",
size:"10,270",
typeid:7,
uuid:"B603E421-B721-428E-9029-BDED20FFF377"
},
{
formIndex:1,
location:"1,340",
name:"lbl_dati_aggiuntivi",
size:"124,20",
styleClass:"title_text",
text:"Dati aggiuntivi",
transparent:true,
typeid:7,
uuid:"D0EE3AAB-E869-4B3D-9876-DD96E79A778C"
},
{
anchors:9,
formIndex:1,
location:"503,50",
name:"lbl_dettaglio_certificato",
size:"129,20",
styleClass:"title_text",
text:"Dettaglio certificato",
transparent:true,
typeid:7,
uuid:"D33D01D1-701B-4AAA-89D8-D04AF20A70EC"
},
{
location:"1,340",
size:"799,20",
styleClass:"title_bar",
typeid:7,
uuid:"DA988169-C8A0-457D-B343-CBDD193E7432",
visible:false
},
{
anchors:11,
location:"500,50",
size:"300,20",
styleClass:"title_bar",
typeid:7,
uuid:"F31A86D5-7909-4718-8071-20E7CC031457"
},
{
anchors:13,
borderType:"SpecialMatteBorder,0.0,0.0,1.0,0.0,#000000,#000000,#434343,#000000,0.0,",
items:[
{
containsFormID:"B7AB3D6D-16B5-4889-93A2-CEF1D977B4E4",
location:"152,180",
relationName:"lavoratori_to_storico_certificati",
text:"storico_gestione_certificati",
typeid:15,
uuid:"BC387EB9-89BB-4993-8A32-EDECD09A45D9"
}
],
location:"0,70",
name:"tab_certificati",
printable:false,
size:"490,270",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"F9F4CD3E-2EE9-42CA-9BB1-81C8FB7F85A9"
},
{
dataProviderID:"lavoratori_to_persone.nominativo",
location:"80,20",
size:"407,20",
typeid:4,
uuid:"FACB739F-02F9-4CE0-B0BF-8E6C1BD0CC6B"
},
{
anchors:15,
borderType:"SpecialMatteBorder,0.0,0.0,1.0,0.0,#000000,#000000,#434343,#000000,0.0,",
items:[
{
containsFormID:"8B6C9661-732A-44F5-ACC9-5D8FD227178F",
location:"538,159",
relationName:"lavoratori_to_storico_certificati.storico_certificati_to_storico_certificatidettaglio",
text:"storico_gestione_certificatidettaglio",
typeid:15,
uuid:"7DD22667-C775-4843-933D-4AE500E18116"
}
],
location:"500,70",
name:"tab_certificatidettaglio",
printable:false,
size:"300,270",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"FF1DB21B-B102-44F5-AE19-B23F83F787AF"
}
],
name:"storico_gestione",
onHideMethodID:"5666B9E5-6E74-47C4-B508-33810AF9A035",
onShowMethodID:"589EB0BB-3EFF-4B4B-8AF5-23E969628394",
size:"800,480",
styleName:"leaf_style",
typeid:3,
uuid:"7514A851-587D-4838-B8CF-15C00CFC231E"