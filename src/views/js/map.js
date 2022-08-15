let search = document.getElementById('search');
let schoolGrid = document.getElementById('school-grid');
let gridTitle = document.getElementById('grid-title');
let overlay = document.getElementById('overlay');
let mapItem = document.getElementById('map');

const team1 = [
  {
    Name: 'Alexander',
    Type: 'Elementary',
    Coordinates: [27.998087052010014, -82.51418766635796],
  },
  {
    Name: 'Bay Crest',
    Type: 'Elementary',
    Coordinates: [27.99253231330779, -82.57469775915253],
  },
  {
    Name: 'Bellamy ',
    Type: 'Elementary',
    Coordinates: [28.035890373135416, -82.56759997268793],
  },
  {
    Name: 'Bryant',
    Type: 'Elementary',
    Coordinates: [28.072504593042066, -82.63206948119657],
  },
  {
    Name: 'Cannella',
    Type: 'Elementary',
    Coordinates: [28.045645126047386, -82.53277800584948],
  },
  {
    Name: 'Carrollwood',
    Type: 'Elementary',
    Coordinates: [28.052568019496583, -82.49943070727922],
  },
  {
    Name: 'Citrus Park',
    Type: 'Elementary',
    Coordinates: [28.07807589481273, -82.57360447647561],
  },
  {
    Name: 'Claywell',
    Type: 'Elementary',
    Coordinates: [28.099406465902305, -82.5225374039227],
  },
  {
    Name: 'Crestwood',
    Type: 'Elementary',
    Coordinates: [28.019218097626847, -82.51885421668898],
  },
  {
    Name: 'Davis',
    Type: 'Elementary',
    Coordinates: [28.016360567988286, -82.60162327268812],
  },
  {
    Name: 'Deer Park',
    Type: 'Elementary',
    Coordinates: [28.067639278143005, -82.61571854200278],
  },
  {
    Name: 'Dickenson',
    Type: 'Elementary',
    Coordinates: [27.98853822652344, -82.56626340616923],
  },
  {
    Name: 'Egypt Lake',
    Type: 'Elementary',
    Coordinates: [28.007612510341588, -82.49843651196885],
  },
  {
    Name: 'Essrig',
    Type: 'Elementary',
    Coordinates: [28.06832750285965, -82.54123363581868],
  },
  {
    Name: 'Forest Hills',
    Type: 'Elementary',
    Coordinates: [28.04203217475472, -82.46423290152347],
  },
  {
    Name: 'Graham',
    Type: 'Elementary',
    Coordinates: [27.970162882833275, -82.46530886740737],
  },
  {
    Name: 'Hammond',
    Type: 'Elementary',
    Coordinates: [28.11378694235735, -82.57416400152277],
  },
  {
    Name: 'Lake Magdalene',
    Type: 'Elementary',
    Coordinates: [28.05718894671791, -82.4776340726877],
  },
  {
    Name: 'Lowry',
    Type: 'Elementary',
    Coordinates: [28.03827793450622, -82.61220097268789],
  },
  {
    Name: 'Mabry',
    Type: 'Elementary',
    Coordinates: [27.92949479945438, -82.5149200512265],
  },
  {
    Name: 'MacFarlane Park',
    Type: 'Elementary',
    Coordinates: [27.9580667007821, -82.49283852278961],
  },
  {
    Name: 'McKitrick ',
    Type: 'Elementary',
    Coordinates: [28.156402889006003, -82.53186865113169],
  },
  {
    Name: 'Mendenhall',
    Type: 'Elementary',
    Coordinates: [27.99403021943954, -82.47967003710609],
  },
  {
    Name: 'Miles',
    Type: 'Elementary',
    Coordinates: [28.058955450525875, -82.45665966905513],
  },
  {
    Name: 'Morgan Woods',
    Type: 'Elementary',
    Coordinates: [28.012932954532477, -82.5595090303594],
  },
  {
    Name: 'Northwest',
    Type: 'Elementary',
    Coordinates: [28.105449840638464, -82.54868071277613],
  },
  {
    Name: 'Oak Grove',
    Type: 'Elementary',
    Coordinates: [28.004548002655188, -82.48229968253034],
  },
  {
    Name: 'Schwartzkopf',
    Type: 'Elementary',
    Coordinates: [28.137960696870504, -82.50538951284848],
  },
  {
    Name: 'Tampa Bay Blvd',
    Type: 'Elementary',
    Coordinates: [27.975141646577722, -82.49389326594189],
  },
  {
    Name: 'Town & Country',
    Type: 'Elementary',
    Coordinates: [28.000890373292744, -82.56231630827047],
  },
  {
    Name: 'Twin Lakes',
    Type: 'Elementary',
    Coordinates: [28.029139726889124, -82.48803121335234],
  },
  {
    Name: 'Westchase',
    Type: 'Elementary',
    Coordinates: [28.04495886758262, -82.59258794542176],
  },
  {
    Name: 'West Tampa',
    Type: 'Elementary',
    Coordinates: [27.96128964464151, -82.48757729499117],
  },
  {
    Name: 'Woodbridge',
    Type: 'Elementary',
    Coordinates: [28.014902809001338, -82.57558466991685],
  },
  {
    Name: 'Lutz ',
    Type: 'K-8',
    Coordinates: [28.147810362667705, -82.45935597268691],
  },
  {
    Name: 'Maniscalco',
    Type: 'K-8',
    Coordinates: [28.12596981776297, -82.44784118580715],
  },
  {
    Name: 'Roland Park',
    Type: 'K8',
    Coordinates: [27.956151982795024, -82.51892955828221],
  },
  {
    Name: 'Adams',
    Type: 'Middle',
    Coordinates: [28.041845451976595, -82.46723970458993],
  },
  {
    Name: 'Ben Hill',
    Type: 'Middle',
    Coordinates: [28.08405233311216, -82.53591229999029],
  },
  {
    Name: 'Buchanan',
    Type: 'Middle',
    Coordinates: [28.089454182638278, -82.46884490152303],
  },
  {
    Name: 'Coleman',
    Type: 'Middle',
    Coordinates: [27.927588754982768, -82.51732900731696],
  },
  {
    Name: 'Davidsen',
    Type: 'Middle',
    Coordinates: [28.053841015761588, -82.59633968634158],
  },
  {
    Name: 'Farnell',
    Type: 'Middle',
    Coordinates: [28.073325916099286, -82.63180495919438],
  },
  {
    Name: 'Martinez',
    Type: 'Middle',
    Coordinates: [28.16125801234734, -82.53304093405649],
  },
  {
    Name: 'Pierce',
    Type: 'Middle',
    Coordinates: [27.998313382675466, -82.51825623035951],
  },
  {
    Name: 'Sgt. Smith',
    Type: 'Middle',
    Coordinates: [28.076218478563757, -82.57302368526781],
  },
  {
    Name: 'Walker',
    Type: 'Middle',
    Coordinates: [28.11276421956104, -82.57634435734478],
  },
  {
    Name: 'Webb',
    Type: 'Middle',
    Coordinates: [28.002809182673506, -82.56087185919505],
  },
  {
    Name: 'Legacy Prep',
    Type: 'Charter',
    Coordinates: [28.04026231679742, -82.45759448557814],
  },
  {
    Name: 'Sunlake Academy',
    Type: 'Charter',
    Coordinates: [28.143163761848662, -82.49462745919374],
  },
  {
    Name: 'Walton',
    Type: 'Charter',
    Coordinates: [27.989401299392114, -82.45924548942764],
  },
];
const team2 = [
  {
    Name: 'Bailey',
    Type: 'Elementary',
    Coordinates: [28.020374977864787, -82.23776911187674],
  },
  {
    Name: 'Broward',
    Type: 'Elementary',
    Coordinates: [27.98820049904218, -82.46422600337173],
  },
  {
    Name: 'Bryan PC',
    Type: 'Elementary',
    Coordinates: [28.017219688281788, -82.14348984898858],
  },
  {
    Name: 'Burney',
    Type: 'Elementary',
    Coordinates: [28.00713586745523, -82.12413071792274],
  },
  {
    Name: 'Chiles',
    Type: 'Elementary',
    Coordinates: [28.11351107863598, -82.3920268516199],
  },
  {
    Name: 'Clark',
    Type: 'Elementary',
    Coordinates: [28.152153138011336, -82.36487471505242],
  },
  {
    Name: 'Cleveland',
    Type: 'Elementary',
    Coordinates: [28.01388707020277, -82.45278373443188],
  },
  {
    Name: 'Cork',
    Type: 'Elementary',
    Coordinates: [28.05018848733038, -82.17587171639549],
  },
  {
    Name: 'Folsom',
    Type: 'Elementary',
    Coordinates: [28.04720255754125, -82.32537271065141],
  },
  {
    Name: 'Foster',
    Type: 'Elementary',
    Coordinates: [28.00787253334454, -82.43567251858205],
  },
  {
    Name: 'Heritage',
    Type: 'Elementary',
    Coordinates: [28.14694124178258, -82.28582969588493],
  },
  {
    Name: "Hunter's Green",
    Type: 'Elementary',
    Coordinates: [28.141032685492444, -82.33013657203573],
  },
  {
    Name: 'Jackson',
    Type: 'Elementary',
    Coordinates: [28.0205423022921, -82.12007691671803],
  },
  {
    Name: 'James',
    Type: 'Elementary',
    Coordinates: [27.991646634435583, -82.41009404369883],
  },
  {
    Name: 'Kimbell',
    Type: 'Elementary',
    Coordinates: [28.02637785334454, -82.41040203763218],
  },
  {
    Name: 'Knights',
    Type: 'Elementary',
    Coordinates: [28.075422930713067, -82.15539583020774],
  },
  {
    Name: 'Lewis',
    Type: 'Elementary',
    Coordinates: [28.047927747649815, -82.37271421081157],
  },
  {
    Name: 'Lincoln',
    Type: 'Elementary',
    Coordinates: [28.01298951609179, -82.11342507263858],
  },
  {
    Name: 'Lopez',
    Type: 'Elementary',
    Coordinates: [27.99727350794786, -82.27893570356525],
  },
  {
    Name: 'Mango',
    Type: 'Elementary',
    Coordinates: [27.983763855656417, -82.30350180623014],
  },
  {
    Name: 'McDonald',
    Type: 'Elementary',
    Coordinates: [28.023008806308244, -82.2856622142311],
  },
  {
    Name: 'Mort',
    Type: 'Elementary',
    Coordinates: [28.08121322074713, -82.43999417663646],
  },
  {
    Name: 'Muller',
    Type: 'Elementary',
    Coordinates: [28.071927177050636, -82.43152142596396],
  },
  {
    Name: 'Potter',
    Type: 'Elementary',
    Coordinates: [27.987102047940713, -82.42367637752838],
  },
  {
    Name: 'Pride',
    Type: 'Elementary',
    Coordinates: [28.157286573026756, -82.31781436089953],
  },
  {
    Name: 'Riverhills',
    Type: 'Elementary',
    Coordinates: [28.021203204063813, -82.38603518825155],
  },
  {
    Name: 'Robles',
    Type: 'Elementary',
    Coordinates: [28.01002945445142, -82.40904269344948],
  },
  {
    Name: 'Seminole',
    Type: 'Elementary',
    Coordinates: [28.004026424522024, -82.45456560368287],
  },
  {
    Name: 'Shaw',
    Type: 'Elementary',
    Coordinates: [28.0521344376142, -82.4418958670886],
  },
  {
    Name: 'Sheehy',
    Type: 'Elementary',
    Coordinates: [28.006038908889472, -82.41517564597973],
  },
  {
    Name: 'Springhead',
    Type: 'Elementary',
    Coordinates: [27.9734326761658, -82.07124881300642],
  },
  {
    Name: 'Tampa Palms',
    Type: 'Elementary',
    Coordinates: [28.09806763168653, -82.38576517080884],
  },
  {
    Name: 'Temple Terrace',
    Type: 'Elementary',
    Coordinates: [28.03413305608261, -82.39166993970035],
  },
  {
    Name: 'Thonotosassa',
    Type: 'Elementary',
    Coordinates: [28.05162635141608, -82.31191818882485],
  },
  {
    Name: 'Wilson ',
    Type: 'Elementary',
    Coordinates: [28.02813452843533, -82.12929607909571],
  },
  {
    Name: 'Witter',
    Type: 'Elementary',
    Coordinates: [28.046546391801357, -82.43389931858789],
  },
  {
    Name: 'Pizzo',
    Type: 'K-8',
    Coordinates: [28.05575975056244, -82.40447023522319],
  },
  {
    Name: 'Sulphur Springs',
    Type: 'K8',
    Coordinates: [28.02676794293862, -82.4468128757475],
  },
  {
    Name: 'Turner Bartels',
    Type: 'K8',
    Coordinates: [28.167688542831804, -82.34838438319059],
  },
  {
    Name: 'Benito',
    Type: 'Middle',
    Coordinates: [28.140974931699414, -82.32383817693676],
  },
  {
    Name: 'Burnett',
    Type: 'Middle',
    Coordinates: [28.00815521047468, -82.2788414907341],
  },
  {
    Name: 'Ferrell',
    Type: 'Middle',
    Coordinates: [27.984036056377185, -82.43308248282744],
  },
  {
    Name: 'Greco',
    Type: 'Middle',
    Coordinates: [28.053072719838244, -82.3758286474102],
  },
  {
    Name: 'Jennings',
    Type: 'Middle',
    Coordinates: [28.0263248590048, -82.32762932813965],
  },
  {
    Name: 'Liberty',
    Type: 'Middle',
    Coordinates: [28.13367787858186, -82.38423759245171],
  },
  {
    Name: 'Marshall',
    Type: 'Middle',
    Coordinates: [28.015956161659684, -82.10797188874092],
  },
  {
    Name: 'Memorial',
    Type: 'Middle',
    Coordinates: [27.98794579518015, -82.45663274738851],
  },
  {
    Name: 'Sligh',
    Type: 'Middle',
    Coordinates: [28.00953377392801, -82.43647174741068],
  },
  {
    Name: 'Tomlin',
    Type: 'Middle',
    Coordinates: [28.018431456468875, -82.14663961234125],
  },
  {
    Name: 'Williams',
    Type: 'Middle',
    Coordinates: [27.99182935070803, -82.40694521065198],
  },
  {
    Name: 'New Springs',
    Type: 'Charter',
    Coordinates: [28.03310229564066, -82.4318592622755],
  },
  {
    Name: 'Village of Excellence Middle',
    Type: 'Charter',
    Coordinates: [28.033006414230165, -82.4094486832285],
  },
  {
    Name: 'Woodmont',
    Type: 'Charter',
    Coordinates: [28.04411665320489, -82.39448685969437],
  },
];
const team3 = [
  {
    Name: 'Anderson',
    Type: 'Elementary',
    Coordinates: [27.89996435330795, -82.50928791453805],
  },
  {
    Name: 'Apollo Beach',
    Type: 'Elementary',
    Coordinates: [27.774960423583295, -82.40160588931587],
  },
  {
    Name: 'Ballast Point',
    Type: 'Elementary',
    Coordinates: [27.889214233790252, -82.48787867918418],
  },
  {
    Name: 'Belmont',
    Type: 'Elementary',
    Coordinates: [27.77259699260869, -82.34527662728203],
  },
  {
    Name: 'Bing',
    Type: 'Elementary',
    Coordinates: [27.914652404826892, -82.38208660152456],
  },
  {
    Name: 'BT Washington',
    Type: 'Elementary',
    Coordinates: [27.958323283864022, -82.44980091253665],
  },
  {
    Name: 'Chiaramonte',
    Type: 'Elementary',
    Coordinates: [27.882727498082666, -82.50306631962354],
  },
  {
    Name: 'Clair Mel',
    Type: 'Elementary',
    Coordinates: [27.938073553606337, -82.36966288783523],
  },
  {
    Name: 'Corr',
    Type: 'Elementary',
    Coordinates: [27.795166200031364, -82.36905563848711],
  },
  {
    Name: 'Cypress Creek',
    Type: 'Elementary',
    Coordinates: [27.739726003121717, -82.36767168472848],
  },
  {
    Name: 'Doby',
    Type: 'Elementary',
    Coordinates: [27.781091332292412, -82.36880592878344],
  },
  {
    Name: 'Dunbar',
    Type: 'Elementary',
    Coordinates: [27.957641507549024, -82.47760453637456],
  },
  {
    Name: 'Edison',
    Type: 'Elementary',
    Coordinates: [27.987785325746774, -82.44165600320515],
  },
  {
    Name: 'Frost',
    Type: 'Elementary',
    Coordinates: [27.912855805866183, -82.35780640837842],
  },
  {
    Name: 'Gibsonton',
    Type: 'Elementary',
    Coordinates: [27.84902597866867, -82.36880175347851],
  },
  {
    Name: 'Grady',
    Type: 'Elementary',
    Coordinates: [27.933074981076913, -82.508786271231],
  },
  {
    Name: 'Ippolito',
    Type: 'Elementary',
    Coordinates: [27.877026383644655, -82.35635937111068],
  },
  {
    Name: 'Just',
    Type: 'Elementary',
    Coordinates: [27.959842388328784, -82.47346773526559],
  },
  {
    Name: 'Kenly',
    Type: 'Elementary',
    Coordinates: [27.969825893073764, -82.3804242222712],
  },
  {
    Name: 'Lamb',
    Type: 'Elementary',
    Coordinates: [27.890202207806507, -82.36372528066686],
  },
  {
    Name: 'Lanier',
    Type: 'Elementary',
    Coordinates: [27.87694759421742, -82.5231666182211],
  },
  {
    Name: 'Lockhart',
    Type: 'Elementary',
    Coordinates: [27.979133281143753, -82.43898685937768],
  },
  {
    Name: 'Lomax',
    Type: 'Elementary',
    Coordinates: [27.982555529946403, -82.42996633246462],
  },
  {
    Name: 'Mitchell',
    Type: 'Elementary',
    Coordinates: [27.942889004599095, -82.49071459052435],
  },
  {
    Name: 'Oak Park',
    Type: 'Elementary',
    Coordinates: [27.9677378701837, -82.40680219569883],
  },
  {
    Name: 'Palm River',
    Type: 'Elementary',
    Coordinates: [27.941179738969463, -82.38652158076195],
  },
  {
    Name: 'Patricia Sullivan Partnership',
    Type: 'Elementary',
    Coordinates: [27.965296562643044, -82.45971026052773],
  },
  {
    Name: 'Riverview',
    Type: 'Elementary',
    Coordinates: [27.87437542714185, -82.32456339856205],
  },
  {
    Name: 'Roosevelt',
    Type: 'Elementary',
    Coordinates: [27.916621673561526, -82.49788164033248],
  },
  {
    Name: 'Ruskin',
    Type: 'Elementary',
    Coordinates: [27.712233902339655, -82.43264841472109],
  },
  {
    Name: 'Sessums',
    Type: 'Elementary',
    Coordinates: [27.833659203363663, -82.31975148805294],
  },
  {
    Name: 'Summerfield Crossings',
    Type: 'Elementary',
    Coordinates: [27.8003800792495, -82.32323842716244],
  },
  {
    Name: 'Thompson',
    Type: 'Elementary',
    Coordinates: [27.72150821176875, -82.40751526325799],
  },
  {
    Name: 'West Shore',
    Type: 'Elementary',
    Coordinates: [27.86265294136755, -82.52656220154265],
  },
  {
    Name: 'Dowdell',
    Type: 'Middle',
    Coordinates: [27.936596597016518, -82.37172448206489],
  },
  {
    Name: 'Eisenhower',
    Type: 'Middle',
    Coordinates: [27.793649892216987, -82.36559606210308],
  },
  {
    Name: 'Franklin',
    Type: 'Middle',
    Coordinates: [27.969479752937282, -82.4164467725356],
  },
  {
    Name: 'Giunta',
    Type: 'Middle',
    Coordinates: [27.91024425331486, -82.35774136832589],
  },
  {
    Name: 'Madison',
    Type: 'Middle',
    Coordinates: [27.906195822519315, -82.52065524717199],
  },
  {
    Name: 'Monroe',
    Type: 'Middle',
    Coordinates: [27.876993910441477, -82.52371809209305],
  },
  {
    Name: 'Orange Grove',
    Type: 'Middle',
    Coordinates: [27.975359232044017, -82.4404094763424],
  },
  {
    Name: 'Progress Village',
    Type: 'Middle',
    Coordinates: [27.892758735074185, -82.36628594545365],
  },
  {
    Name: 'Shields',
    Type: 'Middle',
    Coordinates: [27.740081460484774, -82.36959308583754],
  },
  {
    Name: 'Stewart',
    Type: 'Middle',
    Coordinates: [27.959939573967176, -82.47143771893546],
  },
  {
    Name: 'Young',
    Type: 'Middle',
    Coordinates: [27.98070009644412, -82.43874365756731],
  },
  {
    Name: "Kid's Community Riverview South",
    Type: 'Charter',
    Coordinates: [27.854267908596512, -82.33259874937181],
  },
  {
    Name: 'LLT Academy',
    Type: 'Charter',
    Coordinates: [27.899905390156786, -82.37778259505629],
  },
  {
    Name: 'RCMA Academy',
    Type: 'Charter',
    Coordinates: [27.66307555213061, -82.36191349194856],
  },
  {
    Name: 'Riverview Academy of Science',
    Type: 'Charter',
    Coordinates: [27.835887558257337, -82.34422016936325],
  },
  {
    Name: 'Southshore Charter',
    Type: 'Charter',
    Coordinates: [27.795595016244736, -82.30107698005814],
  },
];
const team4 = [
  {
    Name: 'Alafia',
    Type: 'Elementary',
    Coordinates: [27.887995882209182, -82.24863742785533],
  },
  {
    Name: 'Bevis',
    Type: 'Elementary',
    Coordinates: [27.849166448075152, -82.2321938302099],
  },
  {
    Name: 'Boyette Springs',
    Type: 'Elementary',
    Coordinates: [27.848164013529562, -82.28015363763394],
  },
  {
    Name: 'Brooker',
    Type: 'Elementary',
    Coordinates: [27.91682112876951, -82.27247983599995],
  },
  {
    Name: 'Buckhorn',
    Type: 'Elementary',
    Coordinates: [27.914184684052913, -82.24110852649736],
  },
  {
    Name: 'Ciminio',
    Type: 'Elementary',
    Coordinates: [27.87469695497171, -82.24018088041983],
  },
  {
    Name: 'Collins',
    Type: 'Elementary',
    Coordinates: [27.811221096473748, -82.31732141561999],
  },
  {
    Name: 'Colson',
    Type: 'Elementary',
    Coordinates: [27.982458132123362, -82.27286655282936],
  },
  {
    Name: 'Dawson',
    Type: 'Elementary',
    Coordinates: [27.804865877819275, -82.27029369154354],
  },
  {
    Name: 'DeSoto',
    Type: 'Elementary',
    Coordinates: [27.948896164295626, -82.42910429885664],
  },
  {
    Name: 'Dover',
    Type: 'Elementary',
    Coordinates: [27.990490651299297, -82.21045040374354],
  },
  {
    Name: 'Fishhawk Creek',
    Type: 'Elementary',
    Coordinates: [27.84205014899185, -82.21905109530714],
  },
  {
    Name: 'Gorrie',
    Type: 'Elementary',
    Coordinates: [27.939487724049815, -82.46701862729834],
  },
  {
    Name: 'Kingswood',
    Type: 'Elementary',
    Coordinates: [27.898203081190974, -82.29610246587421],
  },
  {
    Name: 'Limona',
    Type: 'Elementary',
    Coordinates: [27.957430216433316, -82.30098855756631],
  },
  {
    Name: 'Lithia Springs',
    Type: 'Elementary',
    Coordinates: [27.87770237671838, -82.22316286593909],
  },
  {
    Name: 'Mintz',
    Type: 'Elementary',
    Coordinates: [27.915538223218306, -82.30763983130463],
  },
  {
    Name: 'Nelson',
    Type: 'Elementary',
    Coordinates: [27.907513934281152, -82.20434148763496],
  },
  {
    Name: 'Shore',
    Type: 'Elementary',
    Coordinates: [27.957155188149336, -82.43747436917342],
  },
  {
    Name: 'Pinecrest',
    Type: 'Elementary',
    Coordinates: [27.849001447545206, -82.14748207489109],
  },
  {
    Name: 'Reddick',
    Type: 'Elementary',
    Coordinates: [27.717740454542945, -82.32035639951864],
  },
  {
    Name: 'Robinson',
    Type: 'Elementary',
    Coordinates: [27.947423128950533, -82.17123490322834],
  },
  {
    Name: 'Schmidt',
    Type: 'Elementary',
    Coordinates: [27.958742059323686, -82.31996553369162],
  },
  {
    Name: 'Seffner',
    Type: 'Elementary',
    Coordinates: [27.966196030215407, -82.2759641664694],
  },
  {
    Name: 'Stowers',
    Type: 'Elementary',
    Coordinates: [27.848767260478073, -82.25784555768875],
  },
  {
    Name: 'Summerfield',
    Type: 'Elementary',
    Coordinates: [27.80236715377213, -82.28898588574815],
  },
  {
    Name: 'Symmes',
    Type: 'Elementary',
    Coordinates: [27.944101220798178, -82.17151352631265],
  },
  {
    Name: 'Trapnell',
    Type: 'Elementary',
    Coordinates: [27.96623718656024, -82.13824372649682],
  },
  {
    Name: 'Valrico',
    Type: 'Elementary',
    Coordinates: [27.92960767425313, -82.24327938466858],
  },
  {
    Name: 'Walden Lake',
    Type: 'Elementary',
    Coordinates: [27.977415016817904, -82.16963987423401],
  },
  {
    Name: 'Wimauma',
    Type: 'Elementary',
    Coordinates: [27.710030872040893, -82.30159492835524],
  },
  {
    Name: 'Yates',
    Type: 'Elementary',
    Coordinates: [27.942082916838988, -82.27619772800797],
  },
  {
    Name: 'Rampello',
    Type: 'K8',
    Coordinates: [27.94828091985696, -82.45249417209848],
  },
  {
    Name: 'Tinker',
    Type: 'K8',
    Coordinates: [27.846771355611867, -82.47893604134593],
  },
  {
    Name: 'Barrington',
    Type: 'Middle',
    Coordinates: [27.848537736992597, -82.25706202145471],
  },
  {
    Name: 'Burns',
    Type: 'Middle',
    Coordinates: [27.90724826802041, -82.2758890646139],
  },
  {
    Name: 'Mann',
    Type: 'Middle',
    Coordinates: [27.951366930485417, -82.28052734837632],
  },
  {
    Name: 'McLane',
    Type: 'Middle',
    Coordinates: [27.94325273053675, -82.2906765798847],
  },
  {
    Name: 'Mulrennan',
    Type: 'Middle',
    Coordinates: [27.907329539723737, -82.22998382416189],
  },
  {
    Name: 'Randall',
    Type: 'Middle',
    Coordinates: [27.856795469464753, -82.20667128924077],
  },
  {
    Name: 'Rodgers',
    Type: 'Middle',
    Coordinates: [27.844495744788137, -82.29604020187162],
  },
  {
    Name: 'Turkey Creek',
    Type: 'Middle',
    Coordinates: [27.944101220798178, -82.17151352631265],
  },
  {
    Name: 'Wilson',
    Type: 'Middle',
    Coordinates: [27.937754901669944, -82.46996769644348],
  },
  {
    Name: 'Bell Creek Academy',
    Type: 'Charter',
    Coordinates: [27.852780380300675, -82.27224755949314],
  },
  {
    Name: 'Channelside Academy',
    Type: 'Charter',
    Coordinates: [27.852758452567347, -82.2727215535481],
  },
  {
    Name: 'Pivot',
    Type: 'Charter',
    Coordinates: [27.919077828864136, -82.33749151474649],
  },
  {
    Name: 'Valrico Academy',
    Type: 'Charter',
    Coordinates: [27.854292001477607, -82.27092060877216],
  },
];

var team1geo = {
  type: 'FeatureCollection',
  features: [],
};

var team2geo = {
  type: 'FeatureCollection',
  features: [],
};

var team3geo = {
  type: 'FeatureCollection',
  features: [],
};

var team4geo = {
  type: 'FeatureCollection',
  features: [],
};

map.addControl(
  new mapboxgl.FullscreenControl({
    container: document.querySelector('body'),
  })
);

for (let i = 0; i < team1.length; i++) {
  var feat = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [team1[i].Coordinates[1], team1[i].Coordinates[0]],
    },
    properties: {
      title: team1[i].Name,
      description: team1[i].Type,
    },
  };

  team1geo.features.push(feat);
}

for (let i = 0; i < team2.length; i++) {
  var feat = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [team2[i].Coordinates[1], team2[i].Coordinates[0]],
    },
    properties: {
      title: team2[i].Name,
      description: team2[i].Type,
    },
  };

  team2geo.features.push(feat);
}

for (let i = 0; i < team3.length; i++) {
  var feat = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [team3[i].Coordinates[1], team3[i].Coordinates[0]],
    },
    properties: {
      title: team3[i].Name,
      description: team3[i].Type,
    },
  };

  team3geo.features.push(feat);
}

for (let i = 0; i < team4.length; i++) {
  var feat = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [team4[i].Coordinates[1], team4[i].Coordinates[0]],
    },
    properties: {
      title: team4[i].Name,
      description: team4[i].Type,
    },
  };

  team4geo.features.push(feat);
}

//console.log(team1geo.features[0].properties.title);

// add markers to map
team1geo.features.forEach(function (marker) {
  var el = document.createElement('div');
  el.className = 'marker fas fa-map-marker-alt fa-2x yellow';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el, {
    offset: [0, -15],
  })
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            ' ' +
            marker.properties.description +
            ' School</h3><i class="fas fa-directions"></i><a href="http://www.google.com/maps/place/' +
            marker.geometry.coordinates[1] +
            ',' +
            marker.geometry.coordinates[0] +
            '">Directions<h4>'
        )
    )
    .addTo(map);
});

team2geo.features.forEach(function (marker) {
  var el = document.createElement('div');
  el.className = 'marker fas fa-map-marker-alt fa-2x red';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el, {
    offset: [0, -15],
  })
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            ' ' +
            marker.properties.description +
            ' School</h3><i class="fas fa-directions"></i><a href="http://www.google.com/maps/place/' +
            marker.geometry.coordinates[1] +
            ',' +
            marker.geometry.coordinates[0] +
            '">Directions<h4>'
        )
    )
    .addTo(map);
});

team3geo.features.forEach(function (marker) {
  var el = document.createElement('div');
  el.className = 'marker fas fa-map-marker-alt fa-2x orange';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el, {
    offset: [0, -15],
  })
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            ' ' +
            marker.properties.description +
            ' School</h3><i class="fas fa-directions"></i><a href="http://www.google.com/maps/place/' +
            marker.geometry.coordinates[1] +
            ',' +
            marker.geometry.coordinates[0] +
            '">Directions<h4>'
        )
    )
    .addTo(map);
});

team4geo.features.forEach(function (marker) {
  var el = document.createElement('div');
  el.className = 'marker fas fa-map-marker-alt fa-2x blue';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el, {
    offset: [0, -15],
  })
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            ' ' +
            marker.properties.description +
            ' School</h3><i class="fas fa-directions"></i><a href="http://www.google.com/maps/place/' +
            marker.geometry.coordinates[1] +
            ',' +
            marker.geometry.coordinates[0] +
            '">Directions<h4>'
        )
    )
    .addTo(map);
});

function loadTeam(team) {
  if (team == 'team1') {
    gridTitle.innerHTML = 'Team 1';
    schoolGrid.innerHTML = '';
    team1.forEach((s) => {
      const markup = `
      <div class="school-card">
        <h1 id="${s.Name} ${s.Type} School" class="school-title">${s.Name} ${s.Type} School</h1>
        <button onclick="closeAndZoom(${s.Coordinates})" class="button">View</button>
      </div>`;

      schoolGrid.insertAdjacentHTML('beforeend', markup);
    });
    openModal();
  }
  if (team == 'team2') {
    gridTitle.innerHTML = 'Team 2';
    schoolGrid.innerHTML = '';
    team2.forEach((s) => {
      const markup = `
      <div class="school-card">
        <h1 id="${s.Name} ${s.Type} School" class="school-title">${s.Name} ${s.Type} School</h1>
        <button onclick="closeAndZoom(${s.Coordinates})" class="button">View</button>
      </div>`;

      schoolGrid.insertAdjacentHTML('beforeend', markup);
    });
    openModal();
  }
  if (team == 'team3') {
    gridTitle.innerHTML = 'Team 3';
    schoolGrid.innerHTML = '';
    team3.forEach((s) => {
      const markup = `
      <div class="school-card">
        <h1 id="${s.Name} ${s.Type} School" class="school-title">${s.Name} ${s.Type} School</h1>
        <button onclick="closeAndZoom(${s.Coordinates})" class="button">View</button>
      </div>`;

      schoolGrid.insertAdjacentHTML('beforeend', markup);
    });
    openModal();
  }
  if (team == 'team4') {
    gridTitle.innerHTML = 'Team 4';
    schoolGrid.innerHTML = '';
    team4.forEach((s) => {
      const markup = `
      <div class="school-card">
        <h1 id="${s.Name} ${s.Type} School" class="school-title">${s.Name} ${s.Type} School</h1>
        <button onclick="closeAndZoom(${s.Coordinates})" class="button">View</button>
      </div>`;

      schoolGrid.insertAdjacentHTML('beforeend', markup);
    });
    openModal();
  }
}

function closeModal() {
  mapItem.style.display = 'block';
  overlay.style.display = 'none';
  search.value = '';
}

function closeAndZoom(coord0, coord1) {
  closeModal();
  map.setZoom(15);
  map.flyTo({
    center: [coord1, coord0],
  });
}

function openModal() {
  // mapItem.style.display = 'none';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
}

search.onkeyup = function () {
  getSearch();
};

function getSearch() {
  let items = document.getElementsByClassName('school-title');
  for (let i = 0; i < items.length; i++) {
    if (!items[i].id.toLowerCase().includes(search.value.toLowerCase())) {
      document
        .getElementById(items[i].id)
        .parentElement.classList.add('hidden');
    } else {
      document
        .getElementById(items[i].id)
        .parentElement.classList.remove('hidden');
    }
  }
}
