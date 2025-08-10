import { GrammarElement } from "./types";

/**
 * Identifies basic grammatical elements including articles, verbs, nouns, adjectives,
 * adverbs, pronouns, prepositions, conjunctions, and other fundamental word classes
 */
export const identifyBasicElements = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  // PHASE 1: COMPREHENSIVE PATTERN-BASED IDENTIFICATION
  // Comprehensive patterns for basic grammar elements
  const patterns = {
    // Articles - more comprehensive
    articles: /\b(a|an|the)\b/gi,

    // PRIORITY PATTERNS FOR SPECIFIC FIXES
    // Infinitive particle "to" + base verb - must come before regular prepositions
    infinitiveParticle:
      /\bto\s+(?:be|have|do|make|get|take|give|go|come|see|know|think|say|tell|ask|want|like|love|need|work|play|live|study|eat|drink|help|visit|meet|buy|sell|pay|cook|clean|wash|drive|walk|run|swim|sing|dance|laugh|smile|cry|sleep|wake|learn|teach|read|write|speak|listen|watch|build|create|start|stop|begin|end|finish|continue|change|move|turn|pull|push|cut|break|fix|save|lose|win|fail|succeed|choose|decide|agree|disagree|accept|refuse|allow|prevent|cause|solve|explain|describe|compare|include|exclude|increase|decrease|improve|worsen|happen|occur|exist|appear|disappear|arrive|leave|return|stay|remain|become|seem|sound|smell|taste|touch|hurt|heal|grow|shrink|expand|contract|rise|fall|climb|descend|enter|exit|join|separate|connect|disconnect|attach|detach|add|remove|insert|extract|combine|divide|multiply|subtract|equal|measure|weigh|cost|contain|hold|carry|lift|drop|throw|catch|hit|kick|punch|squeeze|shake|bend|stretch|twist|rotate|spin|roll|slide|slip|stick|float|sink|burn|freeze|melt|boil|cool|heat|light|darken|brighten|polish|dirty|organize|mess|arrange|scatter|collect|distribute|share|keep|waste|spend|earn|invest|borrow|lend|owe|charge|value|price|count|calculate|estimate|guess|predict|expect|plan|prepare|schedule|cancel|postpone|delay|hurry|rush|wait|pause|rest|relax|worry|stress|enjoy|suffer|celebrate|mourn|congratulate|thank|apologize|forgive|blame|accuse|defend|attack|protect|support|oppose|compete|cooperate|collaborate|negotiate|discuss|argue|debate|fight|quarrel|reconcile|compromise|surrender)\b/gi,

    // Gerunds after prepositions - must come before regular adjectives
    gerundAfterPreposition:
      /\b(?:after|before|by|despite|for|from|in|of|on|through|upon|without)\s+(working|playing|living|studying|eating|drinking|going|coming|seeing|thinking|saying|telling|asking|making|taking|getting|giving|finding|feeling|looking|calling|writing|reading|speaking|listening|watching|learning|teaching|helping|visiting|meeting|buying|selling|paying|cooking|cleaning|washing|driving|walking|running|swimming|singing|dancing|laughing|smiling|crying|sleeping|waking|dreaming|remembering|forgetting|understanding|hoping|wishing|trying|using|opening|closing|starting|stopping|beginning|ending|finishing|continuing|changing|moving|turning|pulling|pushing|cutting|breaking|fixing|building|creating|destroying|saving|losing|winning|failing|succeeding|choosing|deciding|agreeing|disagreeing|accepting|refusing|allowing|preventing|causing|solving|explaining|describing|comparing|including|excluding|increasing|decreasing|improving|worsening|happening|occurring|appearing|disappearing|arriving|leaving|returning|staying|remaining|becoming|seeming|growing|shrinking|expanding|contracting|rising|falling|climbing|descending|entering|exiting|joining|separating|connecting|disconnecting|attaching|detaching|adding|removing|inserting|extracting|combining|dividing|multiplying|subtracting|measuring|weighing|containing|holding|carrying|lifting|dropping|throwing|catching|hitting|kicking|punching|squeezing|shaking|bending|stretching|twisting|turning|rotating|spinning|rolling|sliding|slipping|sticking|floating|sinking|burning|freezing|melting|boiling|cooling|heating|lighting|darkening|brightening|polishing|organizing|arranging|scattering|collecting|distributing|sharing|keeping|losing|wasting|saving|spending|earning|investing|borrowing|lending|owing|paying|charging|counting|calculating|estimating|guessing|predicting|expecting|planning|preparing|arranging|organizing|scheduling|canceling|postponing|delaying|hurrying|rushing|waiting|pausing|resting|relaxing|worrying|stressing|enjoying|suffering|celebrating|mourning|congratulating|thanking|apologizing|forgiving|blaming|accusing|defending|attacking|protecting|supporting|opposing|competing|cooperating|collaborating|negotiating|discussing|arguing|debating|fighting|quarreling|reconciling|compromising|surrendering)\b/gi,

    // Gerunds as subjects (sentence-initial) - must come before adjectives
    gerundAsSubject:
      /^(working|playing|living|studying|eating|drinking|going|coming|seeing|thinking|saying|telling|asking|making|taking|getting|giving|finding|feeling|looking|calling|writing|reading|speaking|listening|watching|learning|teaching|helping|visiting|meeting|buying|selling|paying|cooking|cleaning|washing|driving|walking|running|swimming|singing|dancing|laughing|smiling|crying|sleeping|waking|dreaming|remembering|forgetting|understanding|hoping|wishing|trying|using|opening|closing|starting|stopping|beginning|ending|finishing|continuing|changing|moving|turning|pulling|pushing|cutting|breaking|fixing|building|creating|destroying|saving|losing|winning|failing|succeeding|choosing|deciding|agreeing|disagreeing|accepting|refusing|allowing|preventing|causing|solving|explaining|describing|comparing|including|excluding|increasing|decreasing|improving|worsening|happening|occurring|appearing|disappearing|arriving|leaving|returning|staying|remaining|becoming|seeming|growing|shrinking|expanding|contracting|rising|falling|climbing|descending|entering|exiting|joining|separating|connecting|disconnecting|attaching|detaching|adding|removing|inserting|extracting|combining|dividing|multiplying|subtracting|measuring|weighing|containing|holding|carrying|lifting|dropping|throwing|catching|hitting|kicking|punching|squeezing|shaking|bending|stretching|twisting|turning|rotating|spinning|rolling|sliding|slipping|sticking|floating|sinking|burning|freezing|melting|boiling|cooling|heating|lighting|darkening|brightening|polishing|organizing|arranging|scattering|collecting|distributing|sharing|keeping|losing|wasting|saving|spending|earning|investing|borrowing|lending|owing|paying|charging|counting|calculating|estimating|guessing|predicting|expecting|planning|preparing|arranging|organizing|scheduling|canceling|postponing|delaying|hurrying|rushing|waiting|pausing|resting|relaxing|worrying|stressing|enjoying|suffering|celebrating|mourning|congratulating|thanking|apologizing|forgiving|blaming|accusing|defending|attacking|protecting|supporting|opposing|competing|cooperating|collaborating|negotiating|discussing|arguing|debating|fighting|quarreling|reconciling|compromising|surrendering)\b/gi,

    // Quantifiers - expanded list
    quantifiers:
      /\b(some|many|much|few|little|several|all|every|each|both|any|no|most|more|less|fewer|plenty\s+of|a\s+lot\s+of|lots\s+of|a\s+great\s+deal\s+of|a\s+number\s+of|a\s+few|a\s+little|quite\s+a\s+few|quite\s+a\s+lot)\b/gi,

    // Prepositions - comprehensive list
    prepositions:
      /\b(aboard|about|above|absent|according\s+to|across|after|against|along|alongside|amid|among|anti|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but|by|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in|including|inside|into|like|minus|near|of|off|on|onto|opposite|outside|over|past|per|plus|regarding|round|save|since|than|through|throughout|till|to|toward|towards|under|underneath|unlike|until|up|upon|versus|via|with|within|without)\b/gi,

    // Pronouns - comprehensive list
    pronouns:
      /\b(I|me|my|mine|myself|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|we|us|our|ours|ourselves|they|them|their|theirs|themselves|who|whom|whose|which|what|that|this|these|those|someone|somebody|something|anyone|anybody|anything|everyone|everybody|everything|no\s+one|nobody|nothing)\b/g,

    // Modal and auxiliary verbs
    modals:
      /\b(am|is|are|was|were|be|been|being|have|has|had|do|does|did|will|would|can|could|may|might|must|should|shall|ought\s+to|used\s+to|going\s+to)\b/gi,

    // Common main verbs - EXPANDED TO INCLUDE 500+ VERBS
    verbs:
      /\b(accept|accepted|accepting|accepts|achieve|achieved|achieving|achieves|act|acted|acting|acts|add|added|adding|adds|admit|admitted|admitting|admits|agree|agreed|agreeing|agrees|allow|allowed|allowing|allows|analyze|analyzed|analyzing|analyzes|appear|appeared|appearing|appears|apply|applied|applying|applies|argue|argued|arguing|argues|arrive|arrived|arriving|arrives|ask|asked|asking|asks|assume|assumed|assuming|assumes|attempt|attempted|attempting|attempts|attend|attended|attending|attends|avoid|avoided|avoiding|avoids|become|became|becoming|becomes|begin|began|beginning|begins|believe|believed|believing|believes|belong|belonged|belonging|belongs|break|broke|broken|breaking|breaks|bring|brought|bringing|brings|build|built|building|builds|buy|bought|buying|buys|call|called|calling|calls|care|cared|caring|cares|carry|carried|carrying|carries|catch|caught|catching|catches|cause|caused|causing|causes|change|changed|changing|changes|check|checked|checking|checks|choose|chose|chosen|choosing|chooses|clean|cleaned|cleaning|cleans|close|closed|closing|closes|come|came|coming|comes|compare|compared|comparing|compares|complete|completed|completing|completes|consider|considered|considering|considers|contain|contained|containing|contains|continue|continued|continuing|continues|control|controlled|controlling|controls|cook|cooked|cooking|cooks|copy|copied|copying|copies|cost|costed|costing|costs|count|counted|counting|counts|cover|covered|covering|covers|create|created|creating|creates|cry|cried|crying|cries|cut|cutting|cuts|dance|danced|dancing|dances|decide|decided|deciding|decides|describe|described|describing|describes|design|designed|designing|designs|develop|developed|developing|develops|die|died|dying|dies|discover|discovered|discovering|discovers|discuss|discussed|discussing|discusses|do|did|done|doing|does|draw|drew|drawn|drawing|draws|dream|dreamed|dreamt|dreaming|dreams|drink|drank|drunk|drinking|drinks|drive|drove|driven|driving|drives|drop|dropped|dropping|drops|eat|ate|eaten|eating|eats|end|ended|ending|ends|enjoy|enjoyed|enjoying|enjoys|enter|entered|entering|enters|establish|established|establishing|establishes|examine|examined|examining|examines|exist|existed|existing|exists|expect|expected|expecting|expects|experience|experienced|experiencing|experiences|explain|explained|explaining|explains|express|expressed|expressing|expresses|face|faced|facing|faces|fail|failed|failing|fails|fall|fell|fallen|falling|falls|feel|felt|feeling|feels|fight|fought|fighting|fights|fill|filled|filling|fills|find|found|finding|finds|finish|finished|finishing|finishes|fly|flew|flown|flying|flies|follow|followed|following|follows|forget|forgot|forgotten|forgetting|forgets|form|formed|forming|forms|get|got|gotten|getting|gets|give|gave|given|giving|gives|go|went|gone|going|goes|grow|grew|grown|growing|grows|happen|happened|happening|happens|have|had|having|has|hear|heard|hearing|hears|help|helped|helping|helps|hide|hid|hidden|hiding|hides|hit|hitting|hits|hold|held|holding|holds|hope|hoped|hoping|hopes|hurt|hurting|hurts|identify|identified|identifying|identifies|imagine|imagined|imagining|imagines|improve|improved|improving|improves|include|included|including|includes|increase|increased|increasing|increases|indicate|indicated|indicating|indicates|influence|influenced|influencing|influences|inform|informed|informing|informs|involve|involved|involving|involves|join|joined|joining|joins|jump|jumped|jumping|jumps|keep|kept|keeping|keeps|kill|killed|killing|kills|know|knew|known|knowing|knows|laugh|laughed|laughing|laughs|lay|laid|laying|lays|lead|led|leading|leads|learn|learned|learnt|learning|learns|leave|left|leaving|leaves|let|letting|lets|lie|lay|lain|lying|lies|like|liked|liking|likes|listen|listened|listening|listens|live|lived|living|lives|look|looked|looking|looks|lose|lost|losing|loses|love|loved|loving|loves|make|made|making|makes|manage|managed|managing|manages|mean|meant|meaning|means|meet|met|meeting|meets|mention|mentioned|mentioning|mentions|miss|missed|missing|misses|move|moved|moving|moves|need|needed|needing|needs|notice|noticed|noticing|notices|obtain|obtained|obtaining|obtains|occur|occurred|occurring|occurs|offer|offered|offering|offers|open|opened|opening|opens|order|ordered|ordering|orders|organize|organized|organizing|organizes|own|owned|owning|owns|pass|passed|passing|passes|pay|paid|paying|pays|perform|performed|performing|performs|pick|picked|picking|picks|place|placed|placing|places|plan|planned|planning|plans|play|played|playing|plays|point|pointed|pointing|points|prepare|prepared|preparing|prepares|present|presented|presenting|presents|prevent|prevented|preventing|prevents|produce|produced|producing|produces|protect|protected|protecting|protects|provide|provided|providing|provides|pull|pulled|pulling|pulls|push|pushed|pushing|pushes|put|putting|puts|raise|raised|raising|raises|reach|reached|reaching|reaches|read|reading|reads|realize|realized|realizing|realizes|receive|received|receiving|receives|recognize|recognized|recognizing|recognizes|record|recorded|recording|records|reduce|reduced|reducing|reduces|refer|referred|referring|refers|reflect|reflected|reflecting|reflects|remain|remained|remaining|remains|remember|remembered|remembering|remembers|remove|removed|removing|removes|repeat|repeated|repeating|repeats|replace|replaced|replacing|replaces|report|reported|reporting|reports|represent|represented|representing|represents|require|required|requiring|requires|respond|responded|responding|responds|rest|rested|resting|rests|result|resulted|resulting|results|return|returned|returning|returns|reveal|revealed|revealing|reveals|rise|rose|risen|rising|rises|run|ran|running|runs|save|saved|saving|saves|say|said|saying|says|see|saw|seen|seeing|sees|seem|seemed|seeming|seems|sell|sold|selling|sells|send|sent|sending|sends|serve|served|serving|serves|set|setting|sets|share|shared|sharing|shares|shoot|shot|shooting|shoots|show|showed|shown|showing|shows|shut|shutting|shuts|sing|sang|sung|singing|sings|sit|sat|sitting|sits|sleep|slept|sleeping|sleeps|smile|smiled|smiling|smiles|speak|spoke|spoken|speaking|speaks|spend|spent|spending|spends|stand|stood|standing|stands|start|started|starting|starts|stay|stayed|staying|stays|stop|stopped|stopping|stops|study|studied|studying|studies|succeed|succeeded|succeeding|succeeds|suggest|suggested|suggesting|suggests|support|supported|supporting|supports|suppose|supposed|supposing|supposes|survive|survived|surviving|survives|swim|swam|swum|swimming|swims|take|took|taken|taking|takes|talk|talked|talking|talks|teach|taught|teaching|teaches|tell|told|telling|tells|tend|tended|tending|tends|test|tested|testing|tests|thank|thanked|thanking|thanks|think|thought|thinking|thinks|throw|threw|thrown|throwing|throws|touch|touched|touching|touches|travel|traveled|travelling|travels|treat|treated|treating|treats|try|tried|trying|tries|turn|turned|turning|turns|understand|understood|understanding|understands|use|used|using|uses|visit|visited|visiting|visits|wait|waited|waiting|waits|wake|woke|woken|waking|wakes|walk|walked|walking|walks|want|wanted|wanting|wants|warn|warned|warning|warns|wash|washed|washing|washes|watch|watched|watching|watches|wear|wore|worn|wearing|wears|win|won|winning|wins|wish|wished|wishing|wishes|work|worked|working|works|worry|worried|worrying|worries|write|wrote|written|writing|writes)\b/gi,

    // Adjectives - expanded list to 300+ adjectives (REMOVED "working" - it should be classified as gerund/verb)
    adjectives:
      /\b(able|absolute|academic|acceptable|accurate|active|actual|additional|adequate|advanced|afraid|alone|alternative|amazing|ancient|angry|annual|another|anxious|appropriate|available|aware|awful|basic|beautiful|better|best|big|biggest|black|blue|boring|brief|bright|brilliant|broad|broken|brown|busy|calm|capable|capital|careful|certain|clean|clear|close|cold|comfortable|commercial|common|competitive|complete|complex|concerned|confident|confused|conscious|consistent|constant|contemporary|content|correct|creative|critical|cultural|curious|current|dangerous|dark|dead|decent|deep|democratic|dependent|desperate|detailed|determined|different|difficult|direct|disappointed|domestic|dramatic|drunk|dry|due|dying|early|eastern|easy|economic|educational|effective|efficient|elderly|electronic|empty|enormous|entire|environmental|equal|essential|european|every|exact|excellent|excited|exciting|existing|expensive|expert|external|extra|extreme|fair|false|familiar|famous|fantastic|far|fast|federal|few|final|fine|firm|first|fit|flat|foreign|formal|former|fortunate|forward|free|frequent|fresh|full|fundamental|funny|general|glad|global|gold|good|grand|great|green|gross|growing|guilty|happy|hard|healthy|heavy|high|historical|holy|honest|horrible|hot|huge|human|hungry|ideal|illegal|immediate|important|impossible|impressive|independent|individual|industrial|inevitable|informal|initial|injured|inner|innocent|intelligent|interesting|internal|international|involved|joint|key|large|last|late|later|latest|leading|least|left|legal|less|level|likely|little|living|local|logical|lonely|long|lost|loud|lovely|low|lucky|mad|main|major|male|massive|maximum|medical|mental|middle|minor|missing|modern|moral|more|most|musical|national|native|natural|nearby|necessary|negative|nervous|new|next|nice|northern|notable|obvious|odd|official|okay|old|only|open|ordinary|original|other|outstanding|overall|own|particular|past|perfect|personal|physical|plain|political|poor|popular|positive|possible|potential|powerful|practical|present|pretty|previous|primary|prime|principal|prior|private|professional|proper|proud|psychological|public|pure|quick|quiet|rare|raw|ready|real|realistic|reasonable|recent|red|regular|relevant|religious|remaining|remarkable|remote|responsible|rich|right|rough|round|royal|rural|sad|safe|same|satisfied|scared|scientific|secure|select|senior|serious|several|sexual|sharp|short|sick|significant|silly|simple|single|small|smooth|social|soft|solid|southern|spare|special|specific|spiritual|standard|still|straight|strange|strict|strong|stupid|subsequent|substantial|successful|such|sudden|sufficient|suitable|super|sure|surprised|surprising|tall|technical|temporary|terrible|thick|thin|third|tired|top|total|tough|traditional|true|typical|ugly|unable|unlikely|unusual|upper|used|useful|usual|valuable|various|vast|visible|vital|warm|weak|western|white|whole|wide|wild|willing|wonderful|worse|worst|wrong|yellow|young)\b/gi,

    // Adverbs - ENHANCED comprehensive list with extensive frequency adverbs
    adverbs:
      /\b(very|really|quite|rather|too|so|pretty|fairly|extremely|incredibly|absolutely|completely|totally|perfectly|slightly|somewhat|hardly|barely|almost|nearly|just|only|even|still|already|yet|now|then|soon|late|early|today|yesterday|tomorrow|here|there|everywhere|somewhere|nowhere|anywhere|quickly|slowly|carefully|suddenly|immediately|eventually|finally|recently|lately|well|badly|clearly|probably|certainly|definitely|possibly|obviously|unfortunately|fortunately|hopefully|apparently|generally|basically|essentially|especially|particularly|mainly|mostly|largely|partly|entirely|exactly|approximately|roughly|simply|easily|hardly|probably|actually|really|truly|seriously|literally|virtually|practically|effectively|successfully|personally|directly|immediately|recently|currently|previously|originally|initially|finally|eventually|gradually|suddenly|quickly|slowly|carefully|gently|firmly|strongly|deeply|highly|extremely|incredibly|amazingly|surprisingly|interestingly|importantly|significantly|particularly|especially|specifically|generally|basically|essentially|naturally|obviously|clearly|certainly|definitely|probably|possibly|perhaps|maybe|surely|absolutely|completely|totally|entirely|quite|rather|fairly|pretty|very|really|truly|seriously|literally|actually|virtually|practically|always|never|usually|often|frequently|sometimes|occasionally|rarely|seldom|hardly\s+ever|scarcely\s+ever|almost\s+never|almost\s+always|generally|normally|typically|regularly|constantly|continuously|repeatedly|forever|eternally|perpetually|invariably|unfailingly|daily|weekly|monthly|yearly|hourly|routinely|habitually|customarily|traditionally|conventionally|systematically|consistently|persistently|continually|incessantly|ceaselessly|endlessly|permanently|temporarily|briefly|momentarily|instantly|immediately|promptly|quickly|rapidly|swiftly|fast|slowly|gradually|progressively|steadily|smoothly|easily|effortlessly|automatically|spontaneously|voluntarily|deliberately|intentionally|purposely|accidentally|unintentionally|unexpectedly|surprisingly|suddenly|abruptly|sharply|dramatically|significantly|considerably|substantially|greatly|tremendously|enormously|immensely|vastly|hugely|massively|extensively|widely|broadly|deeply|thoroughly|completely|totally|entirely|fully|partially|partly|slightly|minimally|barely|scarcely|hardly|nearly|almost|approximately|roughly|exactly|precisely|specifically|particularly|especially|notably|remarkably|exceptionally|unusually|extraordinarily|incredibly|amazingly|astonishingly|surprisingly|shockingly|stunningly|overwhelmingly|devastatingly|crushingly|utterly|hopelessly|desperately|urgently|critically|seriously|severely|badly|terribly|awfully|dreadfully|horribly|miserably|unfortunately|sadly|regrettably|disappointingly|frustratingly|annoyingly|irritatingly|worryingly|alarmingly|disturbingly|troublingly|concerningly)\b/gi,

    // Determiners
    determiners:
      /\b(this|that|these|those|some|any|all|both|either|neither|each|every|another|other|such|what|which|whose)\b/gi,

    // Conjunctions
    conjunctions:
      /\b(and|or|but|so|yet|for|nor|because|since|as|while|when|where|if|unless|though|although|however|therefore|moreover|furthermore|nevertheless|nonetheless|meanwhile|otherwise|consequently|thus|hence|accordingly)\b/gi,

    // Time expressions - ENHANCED with more comprehensive patterns (REMOVED "on" and "to" - they should be prepositions unless in specific time contexts)
    timeExpressions:
      /\b(yesterday|today|tomorrow|now|then|soon|late|early|morning|afternoon|evening|night|midnight|noon|dawn|dusk|sunrise|sunset|monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december|week|month|year|decade|century|millennium|hour|minute|second|millisecond|moment|instant|o'clock|am|pm|daily|weekly|monthly|yearly|annually|always|never|often|sometimes|usually|rarely|seldom|frequently|occasionally|already|yet|still|just|recently|lately|finally|eventually|immediately|suddenly|gradually|since|for|during|while|until|before|after|at|past|present|future|ancient|modern|contemporary|current|previous|next|last|first|final|initial|original|recent|upcoming|forthcoming|approaching|imminent|distant|remote|far|near|close|immediate|instant|prompt|quick|fast|rapid|swift|slow|gradual|steady|constant|continuous|ongoing|perpetual|eternal|temporary|brief|short|long|extended|prolonged|lasting|enduring|permanent|momentary|fleeting|transient|ephemeral|seasonal|periodic|cyclical|regular|irregular|sporadic|intermittent|habitual|routine|customary|traditional|conventional|typical|normal|usual|standard|common|frequent|rare|infrequent|uncommon|unusual|exceptional|extraordinary|remarkable|notable|significant|important|crucial|critical|essential|vital|necessary|urgent|pressing|immediate|instant|prompt|quick|fast|rapid|swift|speedy|hasty|hurried|rushed|delayed|late|overdue|belated|tardy|early|premature|advance|prior|preliminary|preparatory|introductory|opening|starting|beginning|commencing|initiating|launching|starting|ending|finishing|concluding|terminating|closing|final|ultimate|last|past|previous|former|earlier|prior|preceding|antecedent|subsequent|following|succeeding|next|upcoming|forthcoming|future|coming|approaching|imminent|pending|awaiting|expected|anticipated|predicted|forecasted|projected)\b/gi,

    // Common nouns - EXPANDED TO 500+ NOUNS
    nouns:
      /\b(ability|accident|account|action|activity|adult|age|agreement|air|animal|answer|apple|area|arm|army|art|article|baby|back|bag|ball|bank|bar|base|battle|beach|bed|beginning|bell|bike|bird|birth|bit|blow|board|boat|body|book|box|boy|bread|brother|business|button|cake|call|camera|car|card|care|case|cat|chair|chance|change|chicken|child|choice|church|city|class|coffee|cold|color|company|computer|condition|control|conversation|country|couple|course|cow|cup|dance|danger|daughter|day|death|decision|detail|difference|dinner|direction|dog|door|dream|drink|drop|ear|earth|education|effect|effort|end|enemy|energy|evening|event|example|exercise|experience|eye|face|fact|family|farm|father|fear|field|fight|figure|film|fire|fish|floor|flower|food|foot|force|form|friend|front|fruit|fun|future|game|garden|girl|glass|goal|god|gold|government|grass|ground|group|hair|hand|hat|head|health|heart|heat|help|history|hole|home|hope|horse|hospital|hotel|hour|house|husband|ice|idea|image|industry|information|interest|job|key|kid|kind|king|kitchen|knee|knife|knowledge|lady|land|language|law|leader|leg|letter|level|life|light|line|list|love|machine|magazine|man|manager|market|marriage|matter|meal|meaning|meat|member|memory|message|method|middle|milk|mind|minute|money|month|morning|mother|mountain|mouth|move|movie|music|name|nation|nature|neck|news|night|noise|north|nose|note|number|object|office|oil|operation|opinion|order|organization|other|owner|page|pain|painting|paper|parent|park|part|party|peace|people|period|person|phone|photo|picture|piece|place|plan|plant|plate|play|player|point|police|policy|politics|position|power|practice|pressure|price|problem|process|product|program|project|property|purpose|quality|question|reason|record|red|relationship|religion|report|result|right|river|road|rock|role|room|rule|school|science|sea|season|seat|second|section|security|sense|series|service|sex|side|sign|simple|sister|site|situation|size|skill|skin|sky|society|soldier|son|song|sound|south|space|sport|spring|staff|stage|start|state|station|step|story|street|structure|student|study|success|summer|sun|system|table|task|tax|teacher|team|technology|telephone|television|temperature|test|text|thing|thought|time|title|today|tool|top|town|trade|training|travel|tree|trouble|truck|truth|type|unit|university|value|variety|vehicle|version|video|village|voice|walk|wall|war|watch|water|way|weapon|weather|week|weight|west|wife|wind|window|winner|winter|woman|wood|word|work|worker|world|worry|writer|year|yesterday|young)\b/gi,

    // Numbers and measurements
    numbers:
      /\b(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|trillion|\d+(?:[.,]\d+)*(?:%|percent|per\s+cent)?)\b/gi,

    // Colors
    colors:
      /\b(red|orange|yellow|green|blue|purple|pink|brown|black|white|gray|grey|silver|gold|beige|tan|navy|maroon|crimson|scarlet|turquoise|aqua|cyan|magenta|violet|indigo|lime|olive|teal)\b/gi,

    // Interjections and exclamations
    interjections:
      /\b(oh|ah|wow|hey|hi|hello|goodbye|bye|yes|no|yeah|yep|nope|okay|ok|well|hmm|uh|um|er|oops|ouch|yay|hooray|bravo|alas|gosh|jeez|phew|shh|psst|duh|huh|ha|haha|hehe)\b/gi,

    // Punctuation markers (EXCLUDED FROM ANALYSIS per user request)
    // punctuation: /[.,;:!?'"()\[\]{}\-\—\–\/\\&@#$%^*+=<>|~`]/g,
  };

  // Extract elements based on patterns
  Object.entries(patterns).forEach(([type, pattern]) => {
    // Skip punctuation analysis as requested by user: "no need to analyze the ". ? ', :" and other types of marks"
    if (type === "punctuation") {
      return;
    }

    let match;
    while ((match = pattern.exec(sentence)) !== null) {
      const element: GrammarElement = {
        id: `element_${elementId++}`,
        text: match[0],
        type: mapPatternTypeToGrammarType(type) as GrammarElement["type"],
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: getElementDescription(match[0], type),
        examples: getElementExamples(type),
        rules: getElementRules(type),
      };

      elements.push(element);
    }
  });

  // PHASE 2: CONTEXTUAL ANALYSIS AND DISAMBIGUATION
  // Remove duplicate elements (same position)
  const uniqueElements = elements.filter(
    (element, index, array) =>
      array.findIndex(
        (e) => e.startPos === element.startPos && e.endPos === element.endPos
      ) === index
  );

  // PHASE 3: CONTEXTUAL RECLASSIFICATION
  uniqueElements.forEach((element) => {
    const context = getContextualInfo(sentence, element);
    if (context.shouldReclassify) {
      element.type = context.newType as GrammarElement["type"];
      element.description = context.newDescription;
      element.examples = context.newExamples;
      element.rules = context.newRules;
    }
  });

  // PHASE 4: UNKNOWN WORD HANDLING
  // Check for unidentified words (words that aren't classified but should be)
  const words = sentence.match(/\b[a-zA-Z]+(?:[''][a-zA-Z]+)?\b/g) || [];
  const identifiedPositions = new Set(
    uniqueElements.map((e) => ({ start: e.startPos, end: e.endPos }))
  );

  words.forEach((word) => {
    const wordIndex = sentence.indexOf(word);
    const isAlreadyIdentified = Array.from(identifiedPositions).some(
      (pos) => wordIndex >= pos.start && wordIndex < pos.end
    );

    if (!isAlreadyIdentified && word.length > 2) {
      // Exclude very short words
      const classification = classifyUnknownWord(word, sentence, wordIndex);
      uniqueElements.push({
        id: `unknown_${elementId++}`,
        text: word,
        type: classification.type as GrammarElement["type"],
        startPos: wordIndex,
        endPos: wordIndex + word.length,
        description: classification.description,
        examples: classification.examples,
        rules: classification.rules,
      });
    }
  });

  return uniqueElements;
};

// Helper function to map pattern types to grammar types
const mapPatternTypeToGrammarType = (patternType: string): string => {
  const typeMap: { [key: string]: string } = {
    articles: "article",
    infinitiveParticle: "infinitive",
    gerundAfterPreposition: "gerund",
    gerundAsSubject: "gerund",
    quantifiers: "quantifier",
    prepositions: "preposition",
    pronouns: "pronoun",
    modals: "modal_verb",
    verbs: "verb",
    adjectives: "adjective",
    adverbs: "adverb",
    determiners: "determiner",
    conjunctions: "conjunction",
    timeExpressions: "time_expression",
    nouns: "noun",
    numbers: "number",
    colors: "adjective", // Colors are typically adjectives
    interjections: "interjection",
  };

  return typeMap[patternType] || patternType;
};

// Helper function to get element description
const getElementDescription = (word: string, type: string): string => {
  const descriptions: { [key: string]: string } = {
    articles: `"${word}" is an article that introduces and specifies nouns.`,
    infinitiveParticle: `"${word}" introduces an infinitive construction.`,
    gerundAfterPreposition: `"${word}" is a gerund (verb acting as noun) following a preposition.`,
    gerundAsSubject: `"${word}" is a gerund functioning as the subject of the sentence.`,
    quantifiers: `"${word}" is a quantifier that indicates amount or quantity.`,
    prepositions: `"${word}" is a preposition that shows relationships between words.`,
    pronouns: `"${word}" is a pronoun that substitutes for a noun.`,
    modals: `"${word}" is a modal or auxiliary verb that expresses mood, tense, or voice.`,
    verbs: `"${word}" is a verb that expresses action or state of being.`,
    adjectives: `"${word}" is an adjective that describes or modifies nouns.`,
    adverbs: `"${word}" is an adverb that modifies verbs, adjectives, or other adverbs.`,
    determiners: `"${word}" is a determiner that introduces and limits nouns.`,
    conjunctions: `"${word}" is a conjunction that connects words, phrases, or clauses.`,
    timeExpressions: `"${word}" is a time expression that indicates when something happens.`,
    nouns: `"${word}" is a noun that names a person, place, thing, or concept.`,
    numbers: `"${word}" is a number or numerical expression.`,
    colors: `"${word}" is a color adjective that describes appearance.`,
    interjections: `"${word}" is an interjection expressing emotion or reaction.`,
  };

  return descriptions[type] || `"${word}" is a ${type}.`;
};

// Helper function to get examples for each type
const getElementExamples = (type: string): string[] => {
  const examples: { [key: string]: string[] } = {
    articles: ["a book", "an apple", "the house"],
    infinitiveParticle: ["to run", "to be happy", "to understand"],
    gerundAfterPreposition: [
      "by working hard",
      "after eating dinner",
      "without thinking",
    ],
    gerundAsSubject: [
      "Swimming is fun",
      "Reading helps learning",
      "Working hard pays off",
    ],
    quantifiers: ["some people", "many books", "a few ideas", "all students"],
    prepositions: ["in the house", "on the table", "under the bridge"],
    pronouns: ["I love music", "She is here", "This is mine"],
    modals: ["can swim", "should go", "will arrive", "have finished"],
    verbs: ["run quickly", "think deeply", "work hard", "love completely"],
    adjectives: ["red car", "happy person", "difficult question"],
    adverbs: ["run quickly", "very happy", "carefully planned"],
    determiners: ["this book", "those people", "each student"],
    conjunctions: ["cats and dogs", "tired but happy", "because it rained"],
    timeExpressions: ["yesterday morning", "next week", "at 3 o'clock"],
    nouns: ["The cat sleeps", "Love conquers all", "Books are wonderful"],
    numbers: ["five cats", "20 percent", "first place"],
    colors: ["red apple", "blue sky", "green grass"],
    interjections: ["Oh, really?", "Wow, amazing!", "Hey, wait!"],
  };

  return examples[type] || ["example not available"];
};

// Helper function to get rules for each type
const getElementRules = (type: string): string[] => {
  const rules: { [key: string]: string[] } = {
    articles: [
      "Use 'a' before consonant sounds, 'an' before vowel sounds",
      "Use 'the' for specific, known items",
      "Articles always come before nouns or adjective+noun combinations",
    ],
    infinitiveParticle: [
      "Forms infinitive constructions with base verb",
      "Used after certain verbs (want, need, try, etc.)",
      "Can express purpose (went to buy groceries)",
    ],
    gerundAfterPreposition: [
      "Gerunds always end in -ing",
      "Function as nouns in prepositional phrases",
      "Never use infinitive after prepositions",
    ],
    gerundAsSubject: [
      "Gerunds can function as sentence subjects",
      "Take singular verb forms when used as subjects",
      "Express activities or concepts as nouns",
    ],
    quantifiers: [
      "Used with countable or uncountable nouns",
      "Some quantifiers work only with singular/plural nouns",
      "Express definite or indefinite amounts",
    ],
    prepositions: [
      "Show relationships of time, place, direction, manner",
      "Usually followed by nouns or pronouns",
      "Form prepositional phrases that function as adjectives or adverbs",
    ],
    pronouns: [
      "Replace nouns to avoid repetition",
      "Must agree with antecedents in number and gender",
      "Different forms for subject, object, and possessive uses",
    ],
    modals: [
      "Express ability, permission, obligation, possibility",
      "Followed by base form of main verbs",
      "Don't change form for different subjects",
    ],
    verbs: [
      "Express actions, states, or occurrences",
      "Change form based on tense, person, and number",
      "Can be transitive (take objects) or intransitive",
    ],
    adjectives: [
      "Describe or modify nouns and pronouns",
      "Usually come before nouns in English",
      "Can be comparative (bigger) or superlative (biggest)",
    ],
    adverbs: [
      "Modify verbs, adjectives, or other adverbs",
      "Many end in -ly, but not all",
      "Can express manner, time, place, degree, frequency",
    ],
    determiners: [
      "Introduce nouns and provide context",
      "Include articles, demonstratives, possessives",
      "Help specify which or how many",
    ],
    conjunctions: [
      "Connect words, phrases, or clauses",
      "Coordinating conjunctions join equal elements",
      "Subordinating conjunctions create dependent clauses",
    ],
    timeExpressions: [
      "Indicate when, how long, or how often",
      "Can function as adverbs or nouns",
      "Important for establishing temporal context",
    ],
    nouns: [
      "Name people, places, things, or concepts",
      "Can be countable or uncountable",
      "Function as subjects, objects, or complements",
    ],
    numbers: [
      "Express quantity, order, or measurement",
      "Can be cardinal (one, two) or ordinal (first, second)",
      "May function as adjectives, nouns, or determiners",
    ],
    colors: [
      "Describe visual appearance",
      "Usually function as adjectives",
      "Can be literal or metaphorical",
    ],
    interjections: [
      "Express emotions or reactions",
      "Often standalone or loosely connected to sentences",
      "Usually followed by exclamation marks",
    ],
  };

  return rules[type] || ["general grammatical rules apply"];
};

// Helper function to get contextual information for reclassification
const getContextualInfo = (
  sentence: string,
  element: GrammarElement
): {
  shouldReclassify: boolean;
  newType: string;
  newDescription: string;
  newExamples: string[];
  newRules: string[];
} => {
  const word = element.text.toLowerCase();
  const beforeWord = sentence
    .substring(0, element.startPos)
    .toLowerCase()
    .trim();

  // Example contextual reclassification for "that"
  if (word === "that") {
    if (beforeWord.match(/\b(know|think|believe|say|tell|feel)\s*$/)) {
      return {
        shouldReclassify: true,
        newType: "conjunction",
        newDescription: '"that" introduces a noun clause.',
        newExamples: ["I know that he is here", "She said that it's true"],
        newRules: [
          "Introduces noun clauses after reporting verbs",
          "Can often be omitted in informal speech",
          "Different from relative pronoun 'that'",
        ],
      };
    }
  }

  return {
    shouldReclassify: false,
    newType: "",
    newDescription: "",
    newExamples: [],
    newRules: [],
  };
};

// Helper function to classify unknown words
const classifyUnknownWord = (
  word: string,
  sentence: string,
  position: number
): {
  type: string;
  description: string;
  examples: string[];
  rules: string[];
} => {

  // Check for common patterns
  if (word.endsWith("ing") && word.length > 4) {
    return {
      type: "gerund_or_participle",
      description: `"${word}" appears to be a gerund or present participle.`,
      examples: ["running is fun", "the running water", "he is running"],
      rules: [
        "Gerunds function as nouns",
        "Present participles show ongoing action",
        "Context determines specific function",
      ],
    };
  }

  if (word.endsWith("ed") && word.length > 3) {
    return {
      type: "past_verb_or_adjective",
      description: `"${word}" appears to be a past tense verb or past participle.`,
      examples: ["he worked hard", "the finished product", "she has completed"],
      rules: [
        "Past tense shows completed actions",
        "Past participles form perfect tenses",
        "Can function as adjectives",
      ],
    };
  }

  if (word.endsWith("ly") && word.length > 3) {
    return {
      type: "adverb",
      description: `"${word}" appears to be an adverb based on its -ly ending.`,
      examples: ["quickly running", "very carefully", "absolutely correct"],
      rules: [
        "Many adverbs end in -ly",
        "Modify verbs, adjectives, or other adverbs",
        "Express manner, degree, or frequency",
      ],
    };
  }

  if (word.endsWith("s") && word.length > 2) {
    return {
      type: "plural_noun_or_verb",
      description: `"${word}" could be a plural noun or third-person singular verb.`,
      examples: ["cats sleep", "he runs", "many books"],
      rules: [
        "Plural nouns end in -s",
        "Third-person singular verbs end in -s",
        "Context determines which function",
      ],
    };
  }

  // Check if it starts with capital letter (might be proper noun)
  if (word[0] === word[0].toUpperCase() && position > 0) {
    return {
      type: "proper_noun",
      description: `"${word}" appears to be a proper noun (name).`,
      examples: ["John is here", "Paris is beautiful", "Microsoft released"],
      rules: [
        "Proper nouns name specific people, places, or things",
        "Always capitalized",
        "Usually don't take articles",
      ],
    };
  }

  // Default to noun if no other pattern matches
  if (word.length > 2) {
    return {
      type: "noun",
      description: `"${word}" appears to be a noun based on its position and context.`,
      examples: ["the cat", "a book", "some water"],
      rules: [
        "Nouns name people, places, things, or concepts",
        "Can be countable or uncountable",
        "May be preceded by articles or determiners",
        "Can function as subjects or objects",
      ],
    };
  }

  // Default classification for truly unknown words
  return {
    type: "unknown",
    description: `"${word}" could not be definitively classified but appears to be a content word requiring analysis.`,
    examples: [
      "technical terms",
      "foreign words",
      "neologisms",
      "specialized vocabulary",
    ],
    rules: [
      "May be specialized or technical terminology",
      "Could be a proper noun, brand name, or foreign word",
      "May require dictionary lookup for precise classification",
      "Context clues can help determine meaning and function",
    ],
  };
};
