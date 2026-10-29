/* minchanjazz.com — content that changes often.
   Every text field has an English (en) and a Korean (ko) version. Keep both in sync.
   To add a show: copy one object in `shows`, change the fields, done.
   To add a video: copy one object in `videos`; set featured: true on the three that should show on the homepage. */
window.CONTENT = {
  email: "minchan1016@gmail.com",
  cal: "https://cal.com/minchanjazz",
  instagram: "https://www.instagram.com/minchan_jazz/",
  handle: "@minchan_jazz",

  shows: [
    {
      day: "16–17", when: { en: "Oct 2026", ko: "2026년 10월" },
      title: { en: "Jazzkeller, Frankfurt", ko: "Jazzkeller, 프랑크푸르트" },
      desc: { en: "Two nights at Frankfurt's historic jazz club, with a European quartet.", ko: "프랑크푸르트의 오래된 재즈 클럽에서 유럽 쿼텟과 함께하는 이틀 밤." },
      chips: [{ en: "Next show", ko: "다음 공연", hot: true }, { en: "Germany", ko: "독일" }, { en: "Two nights", ko: "이틀 공연" }],
      link: "https://www.jazzkeller.com/", linkLabel: { en: "Tickets", ko: "티켓" }
    },
    {
      day: "TBA", dayKo: "미정", when: { en: "Seoul", ko: "서울" },
      title: { en: "Minchan Kim Group, Seoul", ko: "김민찬 그룹, 서울" },
      desc: { en: "A home-court night with my own band and new material. Date and venue announced here first.", ko: "제 밴드와 새 곡으로 꾸미는 홈 무대입니다. 날짜와 장소는 여기서 가장 먼저 알립니다." },
      chips: [{ en: "Korea", ko: "한국" }, { en: "Own music", ko: "자작곡" }],
      link: "#notify", linkLabel: { en: "Notify me", ko: "알림 받기" }, ghost: true
    }
  ],

  past: [
    { en: "Fat Cat Jazz Club, Ulaanbaatar · tour & masterclass, Aug 2026", ko: "Fat Cat Jazz Club, 울란바토르 · 투어와 마스터클래스, 2026년 8월" },
    { en: "Jeju Island · Jul 2026", ko: "제주 · 2026년 7월" },
    { en: "Spain tour · Jun 2026", ko: "스페인 투어 · 2026년 6월" },
    { en: "Minchan Kim Quartet Korea tour · with Tony Lakatos, Ilan Eisenzweig & Kim Daeho, May 2026", ko: "김민찬 쿼텟 한국 투어 · Tony Lakatos, Ilan Eisenzweig, 김대호와 함께, 2026년 5월" },
    { en: "Smalls, New York · Jesse Davis Quartet, Mar 2026", ko: "Smalls, 뉴욕 · Jesse Davis Quartet, 2026년 3월" },
    { en: "Mezzrow, New York · Anthony Wonsey Quartet", ko: "Mezzrow, 뉴욕 · Anthony Wonsey Quartet" },
    { en: "Marians Jazzroom, Bern", ko: "Marians Jazzroom, 베른" },
    { en: "Jarasum Jazz Festival", ko: "자라섬 재즈 페스티벌" },
    { en: "Munrae Jazz Festival, Seoul", ko: "문래 재즈 페스티벌, 서울" },
    { en: "Hermann's Jazz Festival, Victoria BC · Daniel Ko Trio", ko: "Hermann's Jazz Festival, 캐나다 빅토리아 · Daniel Ko Trio" },
    { en: "EBS Space, Seoul · Jesse Davis Quartet", ko: "EBS 스페이스 공감 · Jesse Davis Quartet" },
    { en: "Russia tour", ko: "러시아 투어" }
  ],

  videos: [
    { featured: true, grad: "g1", id: "p9S0IkI3BvQ", year: "2025",
      title: { en: "Jesse Davis Quartet with Antonio Hart, Jazz Forum, Tarrytown", ko: "Jesse Davis Quartet with Antonio Hart, Jazz Forum, 태리타운" },
      desc: { en: "\"Minority\" (Gigi Gryce). Two alto saxophones, one rhythm section, no set list. February 2025.", ko: "\"Minority\"(Gigi Gryce). 알토 색소폰 둘, 리듬 섹션 하나, 세트리스트 없음. 2025년 2월." } },
    { featured: true, grad: "g2", id: "-IXNskx_lUs", year: "",
      title: { en: "Tony Lakatos Quartet, \"Broadway\"", ko: "Tony Lakatos Quartet, \"Broadway\"" },
      desc: { en: "With Hungarian saxophonist Tony Lakatos, one of the European masters I keep coming back to.", ko: "헝가리 색소포니스트 Tony Lakatos와 함께. 제가 계속 돌아가게 되는 유럽의 거장 중 한 사람입니다." } },
    { featured: true, grad: "g3", id: "fyL90PFDfqc", year: "",
      title: { en: "Kenny Washington Quartet, live at Birdland Neuburg", ko: "Kenny Washington Quartet, Birdland Neuburg 라이브" },
      desc: { en: "A full set with vocalist Kenny Washington in Germany.", ko: "보컬리스트 Kenny Washington과 독일에서 함께한 풀 세트." } },
    { featured: false, grad: "g4", id: "4yz0rK8hI_U", year: "",
      title: { en: "Anthony Wonsey Trio with Kenny Washington, Meyhouse Jazz", ko: "Anthony Wonsey Trio with Kenny Washington, Meyhouse Jazz" },
      desc: { en: "Live stream from Meyhouse Jazz, with pianist Anthony Wonsey.", ko: "피아니스트 Anthony Wonsey와 함께한 Meyhouse Jazz 라이브 스트림." } },
    { featured: false, grad: "g5", id: "rpgCX3N0ooE", year: "",
      title: { en: "Jesse Davis Quartet, live stream from Birdland Hamburg", ko: "Jesse Davis Quartet, Birdland Hamburg 라이브 스트림" },
      desc: { en: "A full night with Jesse in Hamburg.", ko: "함부르크에서 제시와 함께한 하룻밤 전체." } },
    { featured: false, grad: "g1", id: "YJYpv4NQi5A", year: "2022",
      title: { en: "Gaël Horellou Quartet, \"The More I See You\", Jazz Ivry", ko: "Gaël Horellou Quartet, \"The More I See You\", Jazz Ivry" },
      desc: { en: "With French saxophonist Gaël Horellou, near Paris. March 2022.", ko: "프랑스 색소포니스트 Gaël Horellou와 파리 근교에서. 2022년 3월." } },
    { featured: false, grad: "g2", id: "PWFCNBTw7P8", year: "",
      title: { en: "\"Minor Swing\" / \"Giant Steps\" with Steve Carrington & Billy Edwards", ko: "\"Minor Swing\" / \"Giant Steps\" with Steve Carrington & Billy Edwards" },
      desc: { en: "Tenor sax Steve Carrington, bass Billy Edwards.", ko: "테너 색소폰 Steve Carrington, 베이스 Billy Edwards." } }
  ],

  press: [
    { year: "2019", url: "https://rooftoponthehanok.com/2019/11/06/interview-with-minchan-kim/",
      title: { en: "An Interview with Minchan Kim", ko: "김민찬 인터뷰" },
      outlet: { en: "Rooftop on the Hanok · on growing up in Daejeon, Kyunghee, and playing a hundred cities", ko: "Rooftop on the Hanok · 대전에서 자란 시절, 경희대, 그리고 백여 도시의 무대에 관하여" } },
    { year: "2017", url: "https://www.discogs.com/release/14529088-Jesse-Davis-Soul-Searchin-Live-In-Seoul",
      title: { en: "Jesse Davis, Soul Searchin': Live in Seoul", ko: "Jesse Davis, 《Soul Searchin': Live in Seoul》" },
      outlet: { en: "Nagel Heyer Records · recorded live at EBS Space, Seoul · drums", ko: "Nagel Heyer Records · 서울 EBS 스페이스 라이브 녹음 · 드럼" } }
  ],

  /* Photos for the press page. credit = photographer, when known. */
  photos: [
    { src: "img/portrait-smile.jpg", alt: "Minchan Kim, portrait", credit: "" },
    { src: "img/portrait-ride.jpg", alt: "Minchan Kim holding a ride cymbal", credit: "" },
    { src: "img/portrait-snare.jpg", alt: "Minchan Kim with a snare drum", credit: "" },
    { src: "img/profile-standing.jpg", alt: "Minchan Kim in profile, snare in hand", credit: "Steven Gargadennec" },
    { src: "img/live-color.jpg", alt: "Minchan Kim live, blue stage", credit: "Ph. Polo", wide: true },
    { src: "img/live-bw-carreau.jpg", alt: "Minchan Kim live, black and white", credit: "Jean-François Carreau" },
    { src: "img/live-bw-kit.jpg", alt: "Minchan Kim at the kit", credit: "", wide: true },
    { src: "img/live-bw-1.jpg", alt: "Minchan Kim live, stick raised", credit: "", wide: true },
    { src: "img/cymbal-hands.jpg", alt: "Hands on a cymbal", credit: "" }
  ],

  /* Partners & endorsements. status: "endorsed" | "using" | "recommend". link/code are optional (affiliate or special links go here). */
  partners: [
    { status: "endorsed", since: "", link: "http://www.soundzaid.com/", code: "", img: "img/soundzaid-iem.jpg",
      cat: { en: "In-ear monitors", ko: "인이어 모니터" },
      name: { en: "SOUNDZAID", ko: "사운즈에이드 (SOUNDZAID)" },
      what: { en: "My custom in-ears, and my longtime official supporter.", ko: "제 전용 이어폰을 만들어 주는, 오랜 공식 후원자입니다." },
      why: { en: "On stage the most important thing is hearing each other exactly. SOUNDZAID builds the fine, detailed monitor sound that musicians rely on on stage, and my own custom in-ears come from them. They have supported me for a long time, and I am proud to call them my official partner.", ko: "무대 위에서 가장 중요한 것은 서로의 소리를 정확하게 듣는 일입니다. 사운즈에이드는 뮤지션들이 무대에서 사용하는 섬세하고 세밀한 모니터 사운드를 제공하는 곳이고, 제 전용 이어폰도 이곳에서 만들어졌습니다. 오랜 시간 변함없이 저를 후원해 주신 공식 파트너입니다." } },
    { status: "endorsed", since: "2026", link: "", code: "",
      cat: { en: "Drumsticks", ko: "드럼스틱" },
      name: { en: "[Brand name]", ko: "[브랜드명]" },
      what: { en: "The sticks in my bag since this year.", ko: "올해부터 가방에 들어 있는 스틱입니다." },
      why: { en: "A stick has to disappear in my hand. Balance before weight, a tip that gives a clear ride sound at low volume, and consistency from pair to pair. The company reached out after following my work for a while and asked what I actually play. That is how I like to start.", ko: "스틱은 손에서 사라져야 합니다. 무게보다 균형, 작은 볼륨에서도 라이드 소리가 또렷한 팁, 그리고 짝마다 같은 품질. 이 회사는 제 연주를 한동안 지켜본 뒤 연락해서 제가 실제로 뭘 쓰는지부터 물었습니다. 저는 그렇게 시작하는 관계가 좋습니다." } },
    { status: "recommend", since: "2026", link: "https://www.withminlim.com", code: "",
      cat: { en: "Coaching", ko: "코칭" },
      name: { en: "Min Lim Coaching", ko: "Min Lim Coaching" },
      what: { en: "Executive and life coaching for people who build things, in Korean and English. Min is my coach.", ko: "무언가를 만드는 사람들을 위한 코칭. 한국어와 영어로 진행합니다. 제 코치입니다." },
      why: { en: "Musicians get lessons for their hands and nothing for the rest. In a few months with Min I stopped waiting for one person to open the next door and started building the doors myself: this website, new music, a book. If you think too much before you play, or before you ask, talk to her.", ko: "뮤지션은 손을 위한 레슨은 받아도 나머지를 위한 레슨은 받지 않습니다. 민과 몇 달을 보내면서, 누군가 다음 문을 열어 주길 기다리는 대신 제가 문을 만들기 시작했습니다. 이 웹사이트, 새 음악, 책이 그 결과입니다. 연주하기 전에, 혹은 부탁하기 전에 생각이 너무 많다면 민과 이야기해 보세요." } }
  ],

  works: [
    { swatch: "linear-gradient(90deg,var(--lime),var(--green),var(--sky))", link: "#notify",
      eyebrow: { en: "In the studio", ko: "스튜디오에서" },
      title: { en: "New music, written on the road", ko: "길 위에서 쓴 새 음악" },
      desc: { en: "Pieces I sketched in New York and Mongolia, now being recorded as singles on the way to a first album under my own name.", ko: "뉴욕과 몽골에서 스케치한 곡들을 싱글로 녹음하고 있습니다. 제 이름을 건 첫 앨범으로 가는 길입니다." },
      btn: { en: "Hear it first", ko: "가장 먼저 듣기" } },
    { swatch: "linear-gradient(90deg,var(--mustard),var(--orange),var(--red))", link: "#notify",
      eyebrow: { en: "Book, in progress", ko: "책, 집필 중" },
      title: { en: "What do you think jazz is?", ko: "재즈가 뭐라고 생각하시나요?" },
      desc: { en: "A book for people who have never listened to jazz, built from weekly conversations about the stages, teachers and stories behind my twenty years of playing.", ko: "재즈를 한 번도 들어본 적 없는 사람들을 위한 책입니다. 지난 스무 해의 무대와 스승, 이야기를 매주 대화로 풀어 엮고 있습니다." },
      btn: { en: "Get notified", ko: "소식 받기" } },
    { swatch: "linear-gradient(90deg,var(--red),#4A3E3C,var(--teal))", link: "https://www.discogs.com/release/14529088-Jesse-Davis-Soul-Searchin-Live-In-Seoul", external: true,
      eyebrow: { en: "Discography", ko: "디스코그래피" },
      title: { en: "Jesse Davis, <em>Soul Searchin': Live in Seoul</em>", ko: "Jesse Davis, 《Soul Searchin': Live in Seoul》" },
      desc: { en: "Nagel Heyer Records, 2017. Recorded live at EBS Space, Seoul, with Jesse Davis (alto sax), Paul Kirby (piano) and Martin Zenker (bass). A recording with saxophonist Daniel Ko and more sideman dates are being catalogued.", ko: "Nagel Heyer Records, 2017. 서울 EBS 스페이스 라이브 녹음. Jesse Davis(알토 색소폰), Paul Kirby(피아노), Martin Zenker(베이스). 색소포니스트 Daniel Ko와의 녹음을 비롯한 사이드맨 음반을 정리하고 있습니다." },
      btn: { en: "Release details", ko: "음반 정보" } }
  ]
};
