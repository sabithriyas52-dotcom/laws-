/**
 * data.js — Constitution of India Data Layer
 * Acts as the "backend" / content database for this static site.
 * All article content, navigation structure, and search index live here.
 */

const NAV_STRUCTURE = [
  {
    section: "Overview",
    items: [
      { id: "preamble", label: "Preamble", icon: "📜" },
      { id: "overview", label: "All Parts – At a Glance", icon: "🗂" },
    ]
  },
  {
    section: "Bare Acts",
    items: [
      { id: "contractAct", label: "Indian Contract Act, 1872", icon: "📜" },
    ]
  },
  {
    section: "Fundamental Rights (Part III)",
    items: [
      { id: "part3",  label: "Part III – Overview", icon: "🛡" },
      { id: "art14",  label: "Art. 14 – Equality", icon: "⚖" },
      { id: "art19",  label: "Art. 19 – Freedoms", icon: "🗣" },
      { id: "art21",  label: "Art. 21 – Life & Liberty", icon: "❤" },
      { id: "art32",  label: "Art. 32 – Remedies (Writs)", icon: "⚡" },
    ]
  },
  {
    section: "Directive Principles (Part IV)",
    items: [
      { id: "part4",  label: "Part IV – DPSPs", icon: "📋" },
    ]
  },
  {
    section: "Fundamental Duties",
    items: [
      { id: "duties", label: "Art. 51A – Duties", icon: "🎖" },
    ]
  },
  {
    section: "Government Structure",
    items: [
      { id: "president",  label: "The President", icon: "🏛" },
      { id: "parliament", label: "Parliament", icon: "👥" },
      { id: "judiciary",  label: "The Judiciary", icon: "⚖" },
      { id: "emergency",  label: "Emergency Provisions", icon: "🚨" },
    ]
  },
  {
    section: "Amendments",
    items: [
      { id: "amendments", label: "Key Amendments", icon: "📝" },
    ]
  }
];

/* ─────────────────────────────────────────────
   PAGE ORDER (for prev/next navigation)
───────────────────────────────────────────── */
const PAGE_ORDER = [
  "preamble","overview","contractAct","part3","art14","art19","art21","art32",
  "part4","duties","president","parliament","judiciary","emergency","amendments"
];

/* ─────────────────────────────────────────────
   SEARCH INDEX
───────────────────────────────────────────── */
const SEARCH_INDEX = [
  { id: "preamble",   tag: "Preamble",          title: "The Preamble",                              keywords: "sovereign socialist secular democratic republic justice liberty equality fraternity 1949" },
  { id: "overview",   tag: "Structure",          title: "All Parts – Constitution at a Glance",     keywords: "parts articles schedules 395 448 longest written 1950 republic day" },
  { id: "contractAct",tag: "Bare Act",           title: "Indian Contract Act, 1872",                keywords: "contract offer acceptance consideration promise agreement voidable void breach indemnity guarantee bailment agency" },
  { id: "part3",      tag: "Part III",           title: "Fundamental Rights (Articles 12–35)",      keywords: "fundamental rights six right equality freedom exploitation religion cultural remedies justiciable" },
  { id: "art14",      tag: "Article 14",         title: "Right to Equality",                        keywords: "equality before law equal protection reasonable classification intelligible differentia untouchability discrimination" },
  { id: "art19",      tag: "Article 19",         title: "Right to Freedom",                         keywords: "freedom speech expression assembly association movement residence profession trade reasonable restrictions" },
  { id: "art21",      tag: "Article 21",         title: "Protection of Life and Personal Liberty",  keywords: "right to life privacy dignity livelihood health education environment speedy trial puttaswamy" },
  { id: "art32",      tag: "Article 32",         title: "Right to Constitutional Remedies",         keywords: "habeas corpus mandamus prohibition certiorari quo warranto writs heart soul ambedkar" },
  { id: "part4",      tag: "Part IV",            title: "Directive Principles of State Policy",     keywords: "DPSP non-justiciable uniform civil code equal pay panchayat prohibition cow slaughter Irish" },
  { id: "duties",     tag: "Article 51A",        title: "Fundamental Duties",                       keywords: "fundamental duties constitution flag anthem sovereignty 42nd amendment 11 duties swaran singh" },
  { id: "president",  tag: "Part V – Art. 52",   title: "The President of India",                   keywords: "president electoral college indirect election 5 years executive legislative emergency powers ordinance" },
  { id: "parliament", tag: "Part V – Art. 79",   title: "Parliament of India",                      keywords: "lok sabha rajya sabha house people council states money bill joint sitting speaker chairman" },
  { id: "judiciary",  tag: "Part V – Art. 124",  title: "The Judiciary",                            keywords: "supreme court high court judicial review basic structure kesavananda bharati chief justice collegium" },
  { id: "emergency",  tag: "Part XVIII",         title: "Emergency Provisions",                     keywords: "national emergency 352 president rule 356 financial emergency 360 44th amendment safeguards" },
  { id: "amendments", tag: "Part XX – Art. 368", title: "Key Constitutional Amendments",            keywords: "amendment 42nd 44th 61st 73rd 86th 101st 103rd 106th GST women reservation basic structure" },
];

/* ─────────────────────────────────────────────
   PAGE CONTENT
───────────────────────────────────────────── */
const PAGES = {

  preamble: {
    tag: "Adopted 26 November 1949",
    title: "Preamble to the Constitution",
    meta: "The Preamble declares the guiding principles, objectives and the philosophical foundation of the Constitution.",
    html: `
      <div class="preamble-quote">
        <p>WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a
        <strong>SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</strong>
        and to secure to all its citizens:<br><br>
        JUSTICE, social, economic and political;<br>
        LIBERTY of thought, expression, belief, faith and worship;<br>
        EQUALITY of status and of opportunity;<br>
        and to promote among them all<br>
        FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation —<br><br>
        IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY
        <strong>ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.</strong></p>
      </div>

      <div class="section-block">
        <h2>Key Words Explained</h2>
        <p><strong>Sovereign:</strong> India is completely free from external control and can conduct its own foreign and domestic affairs.</p>
        <p><strong>Socialist:</strong> Added by the 42nd Amendment (1976). The state shall strive to reduce inequalities in income, status, and opportunities through democratic means — not through abolition of private property.</p>
        <p><strong>Secular:</strong> Also added by the 42nd Amendment. India has no official state religion. All religions are treated equally by the state and every citizen enjoys freedom of conscience.</p>
        <p><strong>Democratic:</strong> The government derives its authority from the will of the people, expressed through free and fair elections based on universal adult franchise.</p>
        <p><strong>Republic:</strong> The head of state — the President — is an elected representative, not a hereditary monarch. No person holds a constitutional office by birthright.</p>
      </div>

      <div class="section-block">
        <h2>Legal Status of the Preamble</h2>
        <p>In <em>Kesavananda Bharati v. State of Kerala</em> (1973), the Supreme Court held that the Preamble is part of the Constitution. In <em>LIC of India v. Consumer Education</em> (1995), it was reaffirmed that the Preamble can be used to interpret ambiguous provisions of the Constitution.</p>
        <p>The Preamble was amended only once — by the <strong>42nd Amendment (1976)</strong>, which inserted the words "socialist," "secular," and "integrity."</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Kesavananda Bharati v. State of Kerala</strong> (1973) — the Supreme Court held that the Preamble is an integral part of the Constitution and affirmed the basic structure doctrine.</li>
          <li><strong>LIC of India v. Consumer Education</strong> (1995) — the Court confirmed that the Preamble may be used to interpret ambiguous constitutional provisions.</li>
        </ul>
      </div>
    `
  },

  overview: {
    tag: "Structure",
    title: "The Constitution – All Parts at a Glance",
    meta: "The Constitution of India is the longest written constitution of any sovereign nation in the world.",
    html: `
      <div class="stats-row">
        <div class="stat-box"><div class="stat-num">22</div><div class="stat-label">Parts</div></div>
        <div class="stat-box"><div class="stat-num">448</div><div class="stat-label">Articles</div></div>
        <div class="stat-box"><div class="stat-num">12</div><div class="stat-label">Schedules</div></div>
        <div class="stat-box"><div class="stat-num">106</div><div class="stat-label">Amendments</div></div>
      </div>

      <div class="section-block">
        <h2>Background</h2>
        <p>The Constitution was drafted by the Constituent Assembly, which met for the first time on 9 December 1946. Dr. B.R. Ambedkar chaired the Drafting Committee. The Constitution was adopted on 26 November 1949 and came into force on <strong>26 January 1950</strong> — celebrated as Republic Day. The original Constitution had 395 Articles in 22 Parts and 8 Schedules.</p>
      </div>

      <div class="section-block">
        <h2>The 22 Parts</h2>
        <div class="card-grid">
          ${[
            ["Part I",      "Arts. 1–4",    "The Union & its Territory"],
            ["Part II",     "Arts. 5–11",   "Citizenship"],
            ["Part III",    "Arts. 12–35",  "Fundamental Rights"],
            ["Part IV",     "Arts. 36–51",  "Directive Principles of State Policy"],
            ["Part IVA",    "Art. 51A",     "Fundamental Duties"],
            ["Part V",      "Arts. 52–151", "The Union Government"],
            ["Part VI",     "Arts. 152–237","The State Governments"],
            ["Part VII",    "—",            "States in Part B (Repealed)"],
            ["Part VIII",   "Arts. 239–242","The Union Territories"],
            ["Part IX",     "Arts. 243–243O","Panchayats"],
            ["Part IXA",    "Arts. 243P–243ZG","Municipalities"],
            ["Part X",      "Arts. 244–244A","Scheduled & Tribal Areas"],
            ["Part XI",     "Arts. 245–263","Relations between Centre & States"],
            ["Part XII",    "Arts. 264–300A","Finance, Property, Contracts"],
            ["Part XIII",   "Arts. 301–307","Trade & Commerce within India"],
            ["Part XIV",    "Arts. 308–323","Services under the Union & States"],
            ["Part XIVA",   "Arts. 323A–323B","Tribunals"],
            ["Part XV",     "Arts. 324–329","Elections"],
            ["Part XVI",    "Arts. 330–342","Special Provisions for SC/ST"],
            ["Part XVII",   "Arts. 343–351","Official Language"],
            ["Part XVIII",  "Arts. 352–360","Emergency Provisions"],
            ["Part XIX",    "Arts. 361–367","Miscellaneous"],
            ["Part XX",     "Art. 368",     "Amendment of the Constitution"],
            ["Part XXI",    "Arts. 369–392","Temporary & Transitional Provisions"],
            ["Part XXII",   "Arts. 393–395","Short Title, Commencement, etc."],
          ].map(([p,a,t]) => `
            <div class="info-card">
              <div class="card-num">${p} · ${a}</div>
              <div class="card-title">${t}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Kesavananda Bharati v. State of Kerala</strong> (1973) — the Supreme Court established the basic structure doctrine, limiting Parliament's power to amend the Constitution.</li>
          <li><strong>Minerva Mills v. Union of India</strong> (1980) — the Court held that Fundamental Rights and Directive Principles are complementary and must be balanced together.</li>
        </ul>
      </div>
    `
  },

  part3: {
    tag: "Part III",
    title: "Fundamental Rights (Articles 12–35)",
    meta: "Fundamental Rights are justiciable — citizens can approach courts if these rights are violated.",
    html: `
      <div class="section-block">
        <h2>Overview</h2>
        <p>Part III of the Constitution (Articles 12–35) guarantees Fundamental Rights to all citizens (and in some cases, all persons on Indian soil). They are called "fundamental" because they are essential for the all-round development of the individual and are enforceable by the courts.</p>
        <p>Originally seven, the <strong>Right to Property</strong> (Article 31) was removed from the list by the <strong>44th Amendment (1978)</strong> and made a mere legal right under Article 300A.</p>
      </div>

      <div class="section-block">
        <h2>The Six Fundamental Rights</h2>
        <div class="card-grid wide">
          ${[
            ["Arts. 14–18", "Right to Equality",                 "Equality before law; no discrimination on grounds of religion, race, caste, sex, or birth; abolition of untouchability; abolition of titles."],
            ["Arts. 19–22", "Right to Freedom",                  "Freedom of speech and expression, peaceful assembly, association, movement, residence, and profession. Rights of arrested persons."],
            ["Arts. 23–24", "Right against Exploitation",        "Prohibition of human trafficking and forced labour (begar). Prohibition of employment of children below 14 in factories, mines, or hazardous occupations."],
            ["Arts. 25–28", "Right to Freedom of Religion",      "Freedom of conscience and free profession, practice, and propagation of religion. No religious instruction in state-funded schools."],
            ["Arts. 29–30", "Cultural and Educational Rights",   "Right of minorities to conserve their language, script, and culture. Right of minorities to establish and administer educational institutions."],
            ["Arts. 32–35", "Right to Constitutional Remedies",  "Right to approach the Supreme Court for enforcement of Fundamental Rights. Dr. Ambedkar called this the heart and soul of the Constitution."],
          ].map(([arts,title,desc]) => `
            <div class="info-card">
              <div class="card-num">${arts}</div>
              <div class="card-title">${title}</div>
              <div class="card-desc">${desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="section-block">
        <h2>Limitations on Fundamental Rights</h2>
        <p>Fundamental Rights are not absolute. The Constitution itself provides for reasonable restrictions. For example, Art. 19 freedoms can be restricted in the interests of sovereignty, security, public order, morality, or contempt of court. During a National Emergency (Art. 352), rights under Art. 19 are automatically suspended. Rights under Arts. 20 and 21 can never be suspended.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>State of Madras v. Champakam Dorairajan</strong> (1951) — the Court held that Fundamental Rights prevail over Directive Principles when a law is in direct conflict with both.</li>
          <li><strong>Minerva Mills v. Union of India</strong> (1980) — the Court reaffirmed that Fundamental Rights and Directive Principles are complementary and together form the Constitution's core.</li>
        </ul>
      </div>
    `
  },

  art14: {
    tag: "Article 14",
    title: "Right to Equality",
    meta: "Part III – Fundamental Rights | Articles 14–18",
    html: `
      <div class="highlight-box">
        "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Art. 14</span> Two Concepts in One</h2>
        <p>Article 14 embodies two distinct but related concepts:</p>
        <ul>
          <li><strong>Equality before law</strong> (borrowed from English common law) — a <em>negative</em> concept meaning absence of special privilege. No person, whatever their rank or condition, is above the law.</li>
          <li><strong>Equal protection of laws</strong> (borrowed from the 14th Amendment to the US Constitution) — a <em>positive</em> concept meaning the state shall give equal treatment to persons similarly situated.</li>
        </ul>
        <p>The Supreme Court in <em>E.P. Royappa v. State of Tamil Nadu</em> (1974) held that Art. 14 strikes at arbitrariness in state action and ensures fairness and equality of treatment.</p>
      </div>

      <div class="section-block">
        <h2>Doctrine of Reasonable Classification</h2>
        <p>Art. 14 does not forbid classification — it forbids <strong>class legislation</strong>. The state may treat different groups differently, provided the classification satisfies two tests:</p>
        <ol>
          <li>The classification must be based on an <strong>intelligible differentia</strong> (a clear, understandable difference that distinguishes the group from others).</li>
          <li>The differentia must have a <strong>rational nexus</strong> with the object the legislation seeks to achieve.</li>
        </ol>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Art. 15</span> No Discrimination</h2>
        <p>The State shall not discriminate against any citizen on grounds <em>only</em> of religion, race, caste, sex, or place of birth. However, the State can make special provisions for women, children, socially and educationally backward classes, SCs, and STs.</p>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Art. 16</span> Equality of Opportunity in Public Employment</h2>
        <p>There shall be equality of opportunity for all citizens in matters of public employment or appointment to any office under the State. Reservation of appointments for backward classes (including SC/ST) is permitted if they are not adequately represented in state services.</p>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Arts. 17–18</span> Abolition of Untouchability & Titles</h2>
        <p><strong>Art. 17</strong> abolishes "untouchability" and forbids its practice in any form. Enforcement is through the Protection of Civil Rights Act, 1955.</p>
        <p><strong>Art. 18</strong> abolishes titles. The state shall not confer any title (other than military or academic distinctions). Citizens shall not accept titles from foreign states.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>E.P. Royappa v. State of Tamil Nadu</strong> (1974) — the Supreme Court held that Article 14 forbids arbitrariness in state action and that equality is a dynamic concept.</li>
          <li><strong>State of West Bengal v. Anwar Ali Sarkar</strong> (1952) — the Court explained that Article 14 requires an intelligible differentia and a rational relation to the legislative objective.</li>
        </ul>
      </div>
    `
  },

  art19: {
    tag: "Article 19",
    title: "Right to Freedom",
    meta: "Part III – Fundamental Rights | Articles 19–22",
    html: `
      <div class="highlight-box">
        "All citizens shall have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions; to move freely throughout the territory of India; to reside and settle in any part of the territory of India; and to practise any profession, or to carry on any occupation, trade or business."
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Art. 19(1)</span> The Six Freedoms</h2>
        <ul>
          <li><strong>(a)</strong> Freedom of speech and expression — includes the right to know, freedom of the press, right to advertise, right to broadcast.</li>
          <li><strong>(b)</strong> Right to assemble peaceably and without arms.</li>
          <li><strong>(c)</strong> Right to form associations, unions, or cooperative societies.</li>
          <li><strong>(d)</strong> Right to move freely throughout India.</li>
          <li><strong>(e)</strong> Right to reside and settle in any part of India.</li>
          <li><strong>(g)</strong> Right to practise any profession, trade, or business (subject to professional qualifications).</li>
        </ul>
        <p>Note: Clause (f) — right to acquire, hold, and dispose of property — was deleted by the 44th Amendment (1978).</p>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Art. 19(2)–(6)</span> Reasonable Restrictions</h2>
        <p>These freedoms are not absolute. The State can impose <em>reasonable restrictions</em> on each right. For the freedom of speech (clause a), restrictions are permissible on grounds of:</p>
        <ul>
          <li>Sovereignty and integrity of India</li>
          <li>Security of the state</li>
          <li>Friendly relations with foreign states</li>
          <li>Public order</li>
          <li>Decency or morality</li>
          <li>Contempt of court</li>
          <li>Defamation</li>
          <li>Incitement to an offence</li>
        </ul>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Arts. 20–22</span> Other Freedoms</h2>
        <p><strong>Art. 20</strong> — Protection against arbitrary conviction: no ex-post-facto law; no double jeopardy; no self-incrimination. (Cannot be suspended even during Emergency.)</p>
        <p><strong>Art. 21</strong> — Protection of life and personal liberty. (See dedicated page.)</p>
        <p><strong>Art. 22</strong> — Protection against arbitrary arrest: right to be informed of grounds of arrest, right to consult a lawyer, and production before a magistrate within 24 hours.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Romesh Thappar v. State of Madras</strong> (1950) — the Supreme Court held that freedom of speech and expression is a fundamental right essential to democracy.</li>
          <li><strong>Bennett Coleman & Co. v. Union of India</strong> (1972) — the Court recognised the freedom of the press as part of Article 19(1)(a).</li>
        </ul>
      </div>
    `
  },

  art21: {
    tag: "Article 21",
    title: "Protection of Life and Personal Liberty",
    meta: "Part III – Fundamental Rights | The most expansively interpreted article of the Constitution",
    html: `
      <div class="highlight-box">
        "No person shall be deprived of his life or personal liberty except according to procedure established by law."
      </div>

      <div class="section-block">
        <h2>Evolution of Article 21</h2>
        <p>Initially, in <em>A.K. Gopalan v. State of Madras</em> (1950), the Supreme Court gave Art. 21 a narrow reading — "procedure established by law" meant any law passed by the legislature, however harsh.</p>
        <p>This changed dramatically in <em>Maneka Gandhi v. Union of India</em> (1978), where the Court held that the procedure must be fair, just, and reasonable — not merely any procedure the legislature prescribes. This effectively imported the American concept of <strong>due process</strong> into Art. 21.</p>
      </div>

      <div class="section-block">
        <h2>Rights Read into Article 21</h2>
        <p>Through decades of judicial interpretation, Art. 21 has become a repository of numerous unenumerated rights:</p>
        <ul>
          <li>Right to live with human dignity</li>
          <li>Right to livelihood (<em>Olga Tellis v. Bombay Municipal Corporation</em>, 1985)</li>
          <li>Right to health and emergency medical care</li>
          <li>Right to a clean and healthy environment</li>
          <li>Right to education (now explicit under Art. 21A)</li>
          <li>Right against solitary confinement and bar fetters</li>
          <li>Right to speedy trial</li>
          <li>Right against handcuffing</li>
          <li>Right against delayed execution</li>
          <li>Right to legal aid</li>
          <li><strong>Right to Privacy</strong> — unanimously affirmed by a 9-judge Constitution Bench in <em>K.S. Puttaswamy v. Union of India</em> (2017)</li>
        </ul>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Art. 21A</span> Right to Education</h2>
        <p>Inserted by the <strong>86th Amendment (2002)</strong>: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine." This led to the Right of Children to Free and Compulsory Education (RTE) Act, 2009.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>A.K. Gopalan v. State of Madras</strong> (1950) — the Supreme Court initially gave Article 21 a narrow meaning, treating "procedure established by law" as any law passed by the legislature.</li>
          <li><strong>Maneka Gandhi v. Union of India</strong> (1978) — the Court held that the procedure must be fair, just, and reasonable, expanding Article 21 into a substantive right.</li>
          <li><strong>K.S. Puttaswamy v. Union of India</strong> (2017) — the Court unanimously affirmed the right to privacy as intrinsic to Article 21.</li>
        </ul>
      </div>
    `
  },

  art32: {
    tag: "Article 32",
    title: "Right to Constitutional Remedies",
    meta: "Part III – Dr. Ambedkar called this the 'heart and soul' of the Constitution",
    html: `
      <div class="highlight-box">
        "The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed."
      </div>

      <div class="section-block">
        <h2>Significance</h2>
        <p>Without a remedy, a right is meaningless. Article 32 makes the Supreme Court the <em>guarantor</em> and <em>protector</em> of Fundamental Rights. Dr. B.R. Ambedkar described it as the "most important article of the Constitution — an article without which this Constitution would be a nullity."</p>
        <p>Article 226 gives High Courts similar powers (with wider jurisdiction, extending even to non-Fundamental Rights). Article 32 is itself a Fundamental Right and cannot be suspended except during a National Emergency.</p>
      </div>

      <div class="section-block">
        <h2>The Five Constitutional Writs</h2>
        <table class="writ-table">
          <thead>
            <tr><th>Writ</th><th>Meaning</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="writ-name">Habeas Corpus</span><br><span class="writ-meaning">You must have the body</span></td>
              <td>Latin for "present the body"</td>
              <td>Commands that a detained person be brought before the court. The most important writ to protect personal liberty against illegal detention by the state or a private person.</td>
            </tr>
            <tr>
              <td><span class="writ-name">Mandamus</span><br><span class="writ-meaning">We command</span></td>
              <td>Latin for "we command"</td>
              <td>Directs a public authority, tribunal, or inferior court to perform a public duty it is legally obligated to perform but has failed or refused to do.</td>
            </tr>
            <tr>
              <td><span class="writ-name">Prohibition</span><br><span class="writ-meaning">To forbid</span></td>
              <td>Latin for "to prohibit"</td>
              <td>Issued by a higher court to an inferior court or tribunal ordering it to stop proceedings it has no jurisdiction to conduct. It prevents usurpation of jurisdiction.</td>
            </tr>
            <tr>
              <td><span class="writ-name">Certiorari</span><br><span class="writ-meaning">To be certified</span></td>
              <td>Latin for "to be informed of"</td>
              <td>Issued to quash an order already passed by an inferior court or tribunal if it acted without jurisdiction, in excess of jurisdiction, or in violation of natural justice.</td>
            </tr>
            <tr>
              <td><span class="writ-name">Quo Warranto</span><br><span class="writ-meaning">By what authority</span></td>
              <td>Latin for "by what authority"</td>
              <td>Challenges the legal right of a person to hold a substantive public office. It tests whether the holder has a lawful title to the office being occupied.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section-block">
        <h2>Public Interest Litigation (PIL)</h2>
        <p>A major judicial innovation, PIL allows any public-spirited citizen to approach the Supreme Court (under Art. 32) or a High Court (under Art. 226) for the enforcement of Fundamental Rights of disadvantaged groups who cannot themselves access the court. The Supreme Court liberalised locus standi in the 1980s under Chief Justice P.N. Bhagwati.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Keshavananda Bharati v. State of Kerala</strong> (1973) — the Supreme Court affirmed that Article 32 is a basic feature of the Constitution and upholds constitutional remedies.</li>
          <li><strong>S.P. Gupta v. Union of India</strong> (1981) — the Court expanded public interest litigation and relaxed locus standi so citizens could enforce fundamental rights on behalf of others.</li>
        </ul>
      </div>
    `
  },

  part4: {
    tag: "Part IV",
    title: "Directive Principles of State Policy (Articles 36–51)",
    meta: "DPSPs are non-justiciable guidelines that direct the state towards creating a welfare state.",
    html: `
      <div class="section-block">
        <h2>Nature & Significance</h2>
        <p>Borrowed from the <strong>Irish Constitution</strong> (which in turn borrowed from the Spanish Constitution of 1931), DPSPs are "positive obligations" on the state. They represent the socio-economic goals of the Constitution — they aim to create a <em>social and economic democracy</em>, as opposed to political democracy created by Fundamental Rights.</p>
        <p>Though not enforceable by courts (<em>non-justiciable</em>), they are "fundamental in the governance of the country" (Art. 37) and it shall be the duty of the state to apply them in making laws.</p>
      </div>

      <div class="section-block">
        <h2>Classification of DPSPs</h2>
        <p>DPSPs can be broadly grouped into three categories:</p>
        <ul>
          <li><strong>Socialistic:</strong> Arts. 38, 39, 39A, 41, 42, 43, 43A, 47 — relating to social and economic justice.</li>
          <li><strong>Gandhian:</strong> Arts. 40, 43, 43B, 46, 47, 48 — based on Gandhian principles of village self-government, cottage industries, prohibition, and welfare of weaker sections.</li>
          <li><strong>Liberal-Intellectual:</strong> Arts. 44, 45, 48, 48A, 49, 50, 51 — relating to UCC, environment, separation of judiciary, etc.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Key Directive Principles</h2>
        <ul>
          <li><strong>Art. 39(b):</strong> Material resources of the community distributed to subserve the common good.</li>
          <li><strong>Art. 39(d):</strong> Equal pay for equal work for both men and women.</li>
          <li><strong>Art. 40:</strong> Organisation of village panchayats (now Fundamental Law under 73rd Amendment).</li>
          <li><strong>Art. 41:</strong> Right to work, education, and public assistance in unemployment, old age, and sickness.</li>
          <li><strong>Art. 44:</strong> Uniform Civil Code for all citizens — one of the most debated DPSPs.</li>
          <li><strong>Art. 45:</strong> Early childhood care and education for children below six years.</li>
          <li><strong>Art. 46:</strong> Promote educational and economic interests of SCs, STs, and weaker sections.</li>
          <li><strong>Art. 47:</strong> Raise the level of nutrition; improve public health; prohibit intoxicating drinks and drugs.</li>
          <li><strong>Art. 48A:</strong> Protection and improvement of the environment and safeguarding of forests and wildlife.</li>
          <li><strong>Art. 50:</strong> Separation of the judiciary from the executive in public services.</li>
          <li><strong>Art. 51:</strong> Promotion of international peace and security; respect for international law.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Conflict with Fundamental Rights</h2>
        <p>Initially, Fundamental Rights were held supreme (<em>State of Madras v. Champakam Dorairajan</em>, 1951). Parliament then amended the Constitution to give precedence to DPSPs. In <em>Minerva Mills v. Union of India</em> (1980), the Supreme Court struck a balance: Fundamental Rights and DPSPs are complementary — neither is superior to the other, and both together constitute the core of the Constitution.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>State of Madras v. Champakam Dorairajan</strong> (1951) — the Court held that Fundamental Rights override Directive Principles when a law violates both.</li>
          <li><strong>Minerva Mills v. Union of India</strong> (1980) — the Court ruled that Directive Principles and Fundamental Rights are complementary and must be harmonised.</li>
        </ul>
      </div>
    `
  },

  duties: {
    tag: "Article 51A",
    title: "Fundamental Duties",
    meta: "Inserted by the 42nd Amendment (1976) on the recommendation of the Swaran Singh Committee.",
    html: `
      <div class="section-block">
        <h2>Background</h2>
        <p>Fundamental Duties were not in the original Constitution. They were added by the <strong>42nd Amendment, 1976</strong> (Swaran Singh Committee recommendation). A 11th duty was added by the <strong>86th Amendment, 2002</strong>. Modelled on the Soviet Constitution, they are non-justiciable but have moral force.</p>
      </div>

      <div class="section-block">
        <h2>The 11 Fundamental Duties (Art. 51A)</h2>
        <p>It shall be the duty of every citizen of India:</p>
        <ol>
          <li>To abide by the Constitution and respect its ideals, institutions, the National Flag and the National Anthem.</li>
          <li>To cherish and follow the noble ideals that inspired the national struggle for freedom.</li>
          <li>To uphold and protect the sovereignty, unity, and integrity of India.</li>
          <li>To defend the country and render national service when called upon.</li>
          <li>To promote harmony and the spirit of common brotherhood amongst all citizens; to renounce practices derogatory to the dignity of women.</li>
          <li>To value and preserve the rich heritage of our composite culture.</li>
          <li>To protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.</li>
          <li>To develop scientific temper, humanism, and the spirit of inquiry and reform.</li>
          <li>To safeguard public property and to abjure violence.</li>
          <li>To strive towards excellence in all spheres of individual and collective activity.</li>
          <li><em>(Added 2002)</em> To provide opportunities for education to children between the age of six and fourteen years — a duty on parents/guardians.</li>
        </ol>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>S.R. Bommai v. Union of India</strong> (1994) — the Court emphasised constitutional morality and the role of Fundamental Duties in interpreting rights and federal powers.</li>
          <li><strong>Indian Youth Congress v. Union of India</strong> (2010) — the Supreme Court observed that Fundamental Duties provide guidance for citizens and public authorities in promoting social justice.</li>
        </ul>
      </div>
    `
  },

  president: {
    tag: "Part V – Arts. 52–62",
    title: "The President of India",
    meta: "The President is the constitutional head of the Union — a nominal executive in a parliamentary democracy.",
    html: `
      <div class="section-block">
        <h2><span class="article-num-badge">Art. 52</span> The Office</h2>
        <p>Article 52 states: "There shall be a President of India." The President is the formal head of the Executive, the first citizen of India, and the Supreme Commander of the Defence Forces.</p>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Arts. 54–55</span> Election</h2>
        <p>The President is elected <em>indirectly</em> by an <strong>Electoral College</strong> comprising elected members of both Houses of Parliament and the elected members of the Legislative Assemblies of all states and UTs with legislatures. The election is by proportional representation using the <strong>Single Transferable Vote (STV)</strong> system, with a uniform scale of representation.</p>
      </div>

      <div class="section-block">
        <h2><span class="article-num-badge">Arts. 56–58</span> Term & Qualifications</h2>
        <ul>
          <li>Term: <strong>5 years</strong>. Eligible for re-election (no limit).</li>
          <li>Must be a citizen of India; at least 35 years of age; qualified to be a member of the Lok Sabha.</li>
          <li>Must not hold any office of profit under Union, State, or local government.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Powers of the President</h2>
        <p><strong>Executive Powers (Art. 53):</strong> All executive action of the Union is formally taken in the President's name. The President appoints the PM, Cabinet Ministers, Governors, Judges of the Supreme Court and High Courts, the Attorney General, the Comptroller and Auditor General, members of the UPSC, the Election Commission, and other key officials.</p>
        <p><strong>Legislative Powers:</strong> Summons, prorogues, and dissolves Parliament. Addresses joint sittings. Gives assent to Bills. Can promulgate <em>Ordinances</em> (Art. 123) when Parliament is not in session — these have the force of a law but must be approved within 6 weeks of reassembly.</p>
        <p><strong>Financial Powers:</strong> Money Bills require the President's prior recommendation. Annual Budget is presented to Parliament under Art. 112.</p>
        <p><strong>Emergency Powers:</strong> Proclaims National Emergency (Art. 352), State Emergency / President's Rule (Art. 356), and Financial Emergency (Art. 360).</p>
        <p><strong>Veto Powers (Art. 111):</strong> The President can give assent, withhold assent, or (for non-money bills) return the bill for reconsideration. If Parliament passes it again, assent is mandatory. However, the President has <em>absolute veto</em> on bills reserved for consideration.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>S.R. Bommai v. Union of India</strong> (1994) — the Supreme Court limited the misuse of Article 356 and affirmed judicial review over presidential proclamations of state emergency.</li>
          <li><strong>A.D.M. Jabalpur v. Shivkant Shukla</strong> (1976) — the Court controversially held that personal liberties could be suspended during Emergency, a view later criticised and effectively overturned in subsequent jurisprudence.</li>
        </ul>
      </div>
    `
  },

  parliament: {
    tag: "Part V – Arts. 79–122",
    title: "Parliament of India",
    meta: "Parliament is the supreme legislative organ of India — the supreme law-making body of the Union.",
    html: `
      <div class="section-block">
        <h2><span class="article-num-badge">Art. 79</span> Composition</h2>
        <p>Parliament of India consists of: the <strong>President</strong>, the <strong>Rajya Sabha</strong> (Council of States – Upper House), and the <strong>Lok Sabha</strong> (House of the People – Lower House).</p>
      </div>

      <div class="section-block">
        <h2>Lok Sabha – House of the People</h2>
        <div class="card-grid wide">
          <div class="info-card">
            <div class="card-num">Arts. 81–83</div>
            <div class="card-title">Key Facts</div>
            <div class="card-desc">
              <ul style="padding-left:1.2rem; margin-top:6px;">
                <li>Maximum strength: <strong>552</strong> (530 from states, 20 from UTs, 2 nominated Anglo-Indians — provision removed by 104th Amendment, 2020)</li>
                <li>Present effective strength: 543 elected seats</li>
                <li>Members directly elected by the people on the basis of universal adult franchise</li>
                <li>Term: <strong>5 years</strong> (unless dissolved earlier by the President)</li>
                <li>Presided over by the <strong>Speaker</strong> (elected by Lok Sabha members)</li>
                <li>Minimum age to contest: 25 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section-block">
        <h2>Rajya Sabha – Council of States</h2>
        <div class="card-grid wide">
          <div class="info-card">
            <div class="card-num">Arts. 80–84</div>
            <div class="card-title">Key Facts</div>
            <div class="card-desc">
              <ul style="padding-left:1.2rem; margin-top:6px;">
                <li>Maximum strength: <strong>250</strong> (238 elected + 12 nominated by President)</li>
                <li>12 members nominated for eminence in literature, science, art, or social service</li>
                <li>A <strong>permanent body</strong> — cannot be dissolved. One-third members retire every 2 years</li>
                <li>Members' term: 6 years</li>
                <li>Presided over by the <strong>Vice-President</strong> (ex officio Chairman)</li>
                <li>Minimum age to contest: 30 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section-block">
        <h2>Legislative Process</h2>
        <p>An <strong>ordinary bill</strong> can originate in either House and must be passed by both. A <strong>Money Bill</strong> (Art. 110) can only originate in the Lok Sabha — the Rajya Sabha can only suggest amendments (not reject). A <strong>Constitutional Amendment Bill</strong> (Art. 368) must be passed by a special majority in both Houses separately (no joint sitting).</p>
        <p>In case of disagreement between Houses on an ordinary bill, the President may convene a <strong>joint sitting</strong> (Art. 108) where the bill is decided by majority of total members of both Houses present and voting. (Lok Sabha's larger membership generally prevails.)</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Kesavananda Bharati v. State of Kerala</strong> (1973) — the Supreme Court held that Parliament’s power to amend the Constitution is subject to the basic structure doctrine.</li>
          <li><strong>Indira Nehru Gandhi v. Raj Narain</strong> (1975) — the Court emphasised the importance of free and fair elections and the rule of law in democratic governance.</li>
        </ul>
      </div>
    `
  },

  judiciary: {
    tag: "Part V – Arts. 124–147",
    title: "The Judiciary",
    meta: "An independent judiciary is a basic feature of the Constitution that cannot be abrogated.",
    html: `
      <div class="section-block">
        <h2><span class="article-num-badge">Art. 124</span> The Supreme Court of India</h2>
        <p>The Supreme Court is the apex judicial body of India, consisting of the Chief Justice of India and up to 33 other judges (strength increased by Parliament from time to time). Judges are appointed by the President in consultation with the <em>collegium</em> (Chief Justice + 4 senior-most judges).</p>
        <p>A judge can be removed only by an order of the President passed after an address by both Houses of Parliament in the same session by a <em>special majority</em> (impeachment). No judge has ever been successfully impeached.</p>
      </div>

      <div class="section-block">
        <h2>Jurisdiction of the Supreme Court</h2>
        <ul>
          <li><strong>Original Jurisdiction (Art. 131):</strong> Disputes between the Centre and states, or between two or more states.</li>
          <li><strong>Appellate Jurisdiction (Arts. 132–134):</strong> Appeals from High Courts in constitutional, civil, and criminal matters.</li>
          <li><strong>Advisory Jurisdiction (Art. 143):</strong> The President may refer questions of law or public importance to the SC for its opinion. The SC's opinion is not binding.</li>
          <li><strong>Writ Jurisdiction (Art. 32):</strong> For enforcement of Fundamental Rights.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>High Courts (Arts. 214–231)</h2>
        <p>Every state has a High Court (Art. 214). High Courts exercise original, appellate, and supervisory jurisdiction over subordinate courts. They have wider writ jurisdiction under Art. 226 than the Supreme Court under Art. 32 — they can issue writs for purposes other than enforcement of Fundamental Rights too.</p>
      </div>

      <div class="section-block">
        <h2>Judicial Review & Basic Structure Doctrine</h2>
        <p>The power of courts to examine the constitutional validity of legislative and executive action is called <strong>judicial review</strong>. It is implied in the Constitution through Arts. 13, 32, and 226.</p>
        <p>In the landmark <em>Kesavananda Bharati v. State of Kerala</em> (1973, 13-judge bench), the Supreme Court held that while Parliament can amend any part of the Constitution (including Fundamental Rights), it cannot amend or destroy the <strong>basic structure</strong> of the Constitution. Features held to be part of basic structure include: supremacy of the Constitution, republican and democratic form of government, secular character, separation of powers, federal character, judicial review, rule of law, free and fair elections, and independence of the judiciary.</p>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Kesavananda Bharati v. State of Kerala</strong> (1973) — established the basic structure doctrine and reinforced the judiciary’s power to strike down unconstitutional amendments.</li>
          <li><strong>S.P. Gupta v. Union of India</strong> (1981) — the Court expanded transparency in judicial appointments and confirmed the independence of the higher judiciary.</li>
        </ul>
      </div>
    `
  },

  emergency: {
    tag: "Part XVIII – Arts. 352–360",
    title: "Emergency Provisions",
    meta: "The Constitution provides for three types of emergencies to deal with extraordinary situations.",
    html: `
      <div class="section-block">
        <h2>Three Types of Emergency</h2>
        <div class="card-grid">
          ${[
            ["Art. 352", "National Emergency", "Proclaimed if the security of India or any part is threatened by war, external aggression, or armed rebellion (originally 'internal disturbance' — changed to 'armed rebellion' by 44th Amendment). Suspended Fundamental Rights under Art. 19 automatically. Has been proclaimed three times: 1962 (war with China), 1971 (war with Pakistan), 1975 (internal disturbance — the controversial Emergency by Indira Gandhi)."],
            ["Art. 356", "President's Rule (State Emergency)", "Proclaimed when the government of a state cannot be carried on in accordance with the provisions of the Constitution. The state is governed by the President through the Governor. Has been imposed over 100 times. Safeguards were added by the 44th Amendment and Bommai case (1994) to prevent misuse."],
            ["Art. 360", "Financial Emergency", "Proclaimed when the financial stability or credit of India or any part is threatened. The Centre can give directions to states regarding financial matters. Has never been proclaimed in India."],
          ].map(([art,title,desc]) => `
            <div class="info-card" style="grid-column: span 2;">
              <div class="card-num">${art}</div>
              <div class="card-title">${title}</div>
              <div class="card-desc" style="margin-top:6px;">${desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="section-block">
        <h2>Safeguards (Added by 44th Amendment, 1978)</h2>
        <ul>
          <li>National Emergency (Art. 352) must be proclaimed on the basis of written advice of the Cabinet (not just the PM).</li>
          <li>Must be approved by both Houses of Parliament by a <strong>special majority</strong> (2/3 members present + voting AND majority of total membership) within one month.</li>
          <li>Lok Sabha can pass a resolution by simple majority to revoke the Emergency.</li>
          <li>Arts. 20 and 21 can <strong>never</strong> be suspended even during Emergency.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>A.D.M. Jabalpur v. Shivkant Shukla</strong> (1976) — the Court controversially held that habeas corpus could be suspended during Emergency, a ruling later rejected by constitutional morality.</li>
          <li><strong>S.R. Bommai v. Union of India</strong> (1994) — the Supreme Court restricted the arbitrary use of Article 356 and made judicial review a safeguard against misuse of President's Rule.</li>
        </ul>
      </div>
    `
  },

  contractAct: {
    tag: "Act No. 9 of 1872",
    title: "Indian Contract Act, 1872",
    meta: "A foundational statute of Indian contract law, covering offer, acceptance, consideration, performance, breach, indemnity, guarantee, bailment and agency.",
    html: `
      <div class="section-block">
        <h2>About the Act</h2>
        <p>The Indian Contract Act, 1872 is the primary law governing contracts in India. It came into force on <strong>1 September 1872</strong> and applies throughout India, except the State of Jammu and Kashmir.</p>
        <p>The Act defines important concepts such as offer, acceptance, consideration, free consent, capacity to contract, and the distinction between valid, voidable and void agreements.</p>
      </div>

      <div class="section-block">
        <h2>Key Definitions</h2>
        <ul>
          <li><strong>Proposal</strong> (offer): a willingness to do or abstain from doing something to obtain assent.</li>
          <li><strong>Acceptance</strong>: assent to a proposal, which converts the proposal into a promise.</li>
          <li><strong>Promise</strong>: a proposal when accepted.</li>
          <li><strong>Consideration</strong>: something done or abstained from at the desire of the promisor, which is the price for the promise.</li>
          <li><strong>Agreement</strong>: every promise and every set of promises forming consideration for each other.</li>
          <li><strong>Contract</strong>: an agreement enforceable by law.</li>
          <li><strong>Voidable contract</strong>: enforceable at the option of one party only.</li>
          <li><strong>Void agreement</strong>: an agreement not enforceable by law.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Offer, Acceptance and Revocation</h2>
        <p>Sections 3–9 explain how proposals and acceptances are communicated, when they are complete, and how they may be revoked.</p>
        <ul>
          <li>A proposal can be revoked before acceptance is complete as against the proposer.</li>
          <li>An acceptance must be absolute and unqualified.</li>
          <li>Performance of a condition in a proposal may amount to acceptance.</li>
          <li>Acceptance is complete against the proposer when it is put into a course of transmission.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Essentials of a Valid Contract</h2>
        <p>Sections 10–30 set out the conditions required for an agreement to become a contract:</p>
        <ul>
          <li>Parties must be competent to contract (age of majority, sound mind, not disqualified by law).</li>
          <li>Consent must be free — not caused by coercion, undue influence, fraud, misrepresentation or mistake.</li>
          <li>Consideration must be lawful and not forbidden by law, fraudulent, injurious to person or property, or opposed to public policy.</li>
          <li>Agreements without consideration are void unless they fall within specified exceptions.</li>
          <li>Agreements in restraint of marriage, trade or legal proceedings are generally void.</li>
          <li>Wagering agreements are void.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Contingent Contracts</h2>
        <p>Sections 31–36 deal with contracts that depend on uncertain future events.</p>
        <ul>
          <li>Such contracts cannot be enforced until the event happens.</li>
          <li>If the event becomes impossible, the contract becomes void.</li>
          <li>If the contract depends on an event not happening, it becomes enforceable once the event becomes impossible.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Performance of Contracts</h2>
        <p>Sections 37–67 govern how contracts must be performed, the duties of parties, time and place of performance, and the effect of default.</p>
        <ul>
          <li>Parties must either perform or offer to perform their promises unless performance is excused.</li>
          <li>Offers must be unconditional and made at a proper time and place.</li>
          <li>When joint promisers are involved, liability is joint and several unless otherwise agreed.</li>
          <li>Failure to perform on time may make the contract voidable if time is of the essence.</li>
          <li>An agreement to do an impossible act is void, and a contract becomes void when performance becomes impossible or unlawful.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Indemnity and Guarantee</h2>
        <p>Sections 124–147 explain contracts of indemnity and guarantee.</p>
        <ul>
          <li>An indemnity contract protects one party from loss caused by the promisor's conduct or another person.</li>
          <li>A guarantee is a promise to perform the obligation of a third person if that person defaults.</li>
          <li>Surety liability is co-extensive with that of the principal debtor unless otherwise agreed.</li>
          <li>Continuing guarantees may be revoked as to future transactions, and death of the surety revokes continuation except as to past transactions.</li>
          <li>Sureties are discharged by release of the principal debtor, improper variation of the contract, or impairment of the surety's remedy.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Bailment and Pledge</h2>
        <p>Sections 148–181 cover bailment and pledge.</p>
        <ul>
          <li>Bailment is delivery of goods for a purpose, with the promise to return or dispose of them as directed.</li>
          <li>The bailee must take care of the goods with ordinary prudence and may not make unauthorised use of them.</li>
          <li>The pawnee (bailee in pledge) may retain pledged goods for debt, interest, and expenses, and may sell them after reasonable notice if the pawnor defaults.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Agency</h2>
        <p>Sections 182–238 define agency and describe the rights and duties of agents and principals.</p>
        <ul>
          <li>An agent acts on behalf of a principal and can bind the principal by acts done within authority.</li>
          <li>Authority may be express or implied, and may be revoked unless the agent has an interest in the subject matter.</li>
          <li>Agents must act with reasonable skill, diligence, and according to the principal's directions or trade custom.</li>
          <li>The principal must indemnify the agent for lawful acts done in good faith and for injury caused by the principal's neglect.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Notable Repealed Chapters</h2>
        <p>Chapter VII (Sections 76–123) was repealed by the Sale of Goods Act, 1930 (Act No. 3 of 1930).</p>
      </div>
    `
  },

  amendments: {
    tag: "Part XX – Article 368",
    title: "Key Constitutional Amendments",
    meta: "As of 2024, the Constitution has been amended 106 times. Article 368 provides the amendment procedure.",
    html: `
      <div class="section-block">
        <h2>Amendment Procedure (Art. 368)</h2>
        <p>An amendment bill must be passed by a <strong>special majority</strong> of Parliament — a majority of the total membership of each House <em>and</em> a majority of not less than two-thirds of the members present and voting. Certain provisions also require ratification by not less than <em>half of the state legislatures</em> (e.g., election of the President, distribution of legislative powers, Supreme Court and High Court provisions).</p>
        <p>The <strong>basic structure doctrine</strong> (<em>Kesavananda Bharati</em>, 1973) limits Parliament's amending power — it cannot destroy the basic features of the Constitution.</p>
      </div>

      <div class="section-block">
        <h2>Landmark Amendments</h2>
        <ul class="amendment-list">
          ${[
            ["1st",   1951, "First Amendment",         "Added 9th Schedule (laws placed here are immune from judicial review); validated land reform laws; allowed reasonable restrictions on free speech."],
            ["7th",   1956, "States Reorganisation",   "Reorganised states on linguistic lines following the States Reorganisation Act, 1956. Abolished Part A, B, C, D classification of states."],
            ["24th",  1971, "Parliament's Power",      "Affirmed Parliament's power to amend any provision of the Constitution, including Fundamental Rights."],
            ["42nd",  1976, "Mini Constitution",       "Added 'socialist', 'secular', 'integrity' to Preamble; inserted Fundamental Duties (Art. 51A); gave supremacy of DPSPs over certain FRs; created administrative tribunals."],
            ["44th",  1978, "Restoration",             "Restored many rights changed by the 42nd Amendment; removed Right to Property from Fundamental Rights (now Art. 300A); introduced safeguards against misuse of Emergency powers."],
            ["61st",  1989, "Voting Age",              "Reduced the voting age from 21 to 18 years, extending franchise to crores of young citizens."],
            ["73rd",  1992, "Panchayati Raj",          "Gave constitutional status to Panchayati Raj institutions; inserted Part IX and 11th Schedule with 29 subjects."],
            ["74th",  1992, "Urban Local Bodies",      "Gave constitutional status to Municipalities; inserted Part IXA and 12th Schedule with 18 subjects."],
            ["86th",  2002, "Right to Education",      "Inserted Art. 21A — free and compulsory education for children aged 6–14 as a Fundamental Right. Led to the RTE Act, 2009."],
            ["97th",  2011, "Cooperative Societies",   "Added right to form cooperative societies as a Fundamental Right and inserted Part IXB relating to cooperative societies."],
            ["101st", 2016, "GST",                     "Introduced the Goods and Services Tax (GST) — the biggest tax reform since independence. Created the GST Council."],
            ["103rd", 2019, "EWS Reservation",         "Provided 10% reservation for Economically Weaker Sections (EWS) in government jobs and educational institutions, over and above existing reservations."],
            ["104th", 2020, "Reservation Extension",   "Extended the reservation for SCs and STs in the Lok Sabha and state assemblies for another 10 years (till 2030). Removed the Anglo-Indian nominated seats."],
            ["106th", 2023, "Women's Reservation",     "Reserved one-third of seats for women in Lok Sabha and state legislative assemblies. Comes into effect after delimitation following the next Census."],
          ].map(([num, yr, title, desc]) => `
            <li class="amendment-item">
              <div class="amendment-num">${num}</div>
              <div class="amendment-body">
                <div class="amendment-title">${title} <span class="year">(${yr})</span></div>
                <div class="amendment-desc">${desc}</div>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="section-block">
        <h2>Case Law & Judgments</h2>
        <ul class="reference-list">
          <li><strong>Kesavananda Bharati v. State of Kerala</strong> (1973) — the Supreme Court held that Parliament cannot alter the basic structure of the Constitution.</li>
          <li><strong>Minerva Mills v. Union of India</strong> (1980) — the Court reaffirmed that the amending power under Article 368 is limited by the Constitution's basic structure.</li>
          <li><strong>I.R. Coelho v. State of Tamil Nadu</strong> (2007) — the Court ruled that laws placed in the Ninth Schedule after April 24, 1973, can still be reviewed if they violate fundamental rights.</li>
        </ul>
      </div>
    `
  }

};
