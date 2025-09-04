const teamMembers = [
  { name: "Ketua", role: "Jeni Adi Hidayat", image: "/team-member-one.png" },
  { name: "Wakil Ketua", role: "Diva Marshelano AS", image: "/team-member-2.png" },
  {
    name: "Bendahara 1",
    role: "Naiman Husain S.",
    image: "/diverse-team-member-3.png",
  },
  { name: "Bendahara 2", role: "Ristin Iman A.", image: "/team-member-4.png" },
  { name: "Sekretaris 1", role: "Alya Azhar N.", image: "/team-member-5.jpg" },
  { name: "Sekretaris 2", role: "Keumala Tri R.", image: "/team-member-6.jpg" },
  { name: "Koor. Humas", role: "Gita Syafira A.", image: "/team-member-7.jpg" },
  { name: "Staff Humas", role: "Raihana Afiyah", image: "/team-member-8.jpg" },
  { name: "Staff Humas", role: "Wida Senja", image: "/team-member-9.jpg" },
  {
    name: "Staff Humas",
    role: "Alfira Indah B.",
    image: "/team-member-10.jpg",
  },
  {
    name: "Koor. Media",
    role: "Najwa Syafira N.S",
    image: "/team-member-11.jpg",
  },
  { name: "Staff Media", role: "Dimas Putra M.", image: "/team-member-12.jpg" },
  { name: "Staff Media", role: "Nazwa Aulia S.", image: "/team-member-13.jpg" },
  { name: "Staff Media", role: "Jovita Edgina", image: "/team-member-14.jpg" },
  {
    name: "Koor. Research",
    role: "Rizqa Hany S.",
    image: "/team-member-15.jpg",
  },
  {
    name: "Staff Research",
    role: "Farid Firdaus",
    image: "/team-member-16.jpg",
  },
  {
    name: "Staff Research",
    role: "Ridho Awaludin",
    image: "/team-member-17.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Get to know <span className="text-purple-400">About Us!</span>
          </h1>

          <p className="text-sm text-gray-300 max-w-4xl mx-auto leading-relaxed">
            COnsecteturmcididuntloremellitipsumsedalaboreslloremutlaborealiquaconseceturmcididuntdolab
            orealiquaulllamcotempordiduntutlaboreetdoloremagnaaliquaUtenimadminimveniamquisnostrudexer
            citationulllamcolaborisnisutaliquipexeacommodoconsequatDuisauteiruredolorinreprehenderitinvol
            uptatevelitessecillumfugiatnullapariaturExcepteursintoccaecatcupidatatnonproidentsuninculpaq
            uiofficiadeseruntmollitanimidestlaborumSedutperspiciatisundeomnisistenatuserrorsitvolupta
            temaccusantiumdoloremquelaudantiumtotamremaperiameaqueipsaquaeabilloinventoreveritatisetquas
            iarchitectobeataevitatedicasuntexplicaboNemoenimipsumvoluptatemquiavoluptassitaspernaturaut
            oditautfugitsedquiaconsequunturmagnilolorestosquirationevoluptatemnsequinesciuntnequeporro
            quisquamestquidoloremipsumquiadolorsitametconsecteturadipiscivelit
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Meet <span className="text-purple-400">Our Team</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
