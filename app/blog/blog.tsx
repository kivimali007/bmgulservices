
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sadan-vedligeholder-du-dit-traegulv",
    title: "Sådan vedligeholder du dit trægulv",
    excerpt:
      "Få gode råd til hvordan du holder dit trægulv smukt, slidstærkt og velplejet i mange år.",
    date: "2026-11-20",
    category: "Gulvpleje",
    image: "/images/blog/gulvpleje.jpg",
  },
  {
    slug: "hvornar-skal-dit-gulv-slibes",
    title: "Hvornår skal dit gulv slibes?",
    excerpt:
      "Lær at genkende tegnene på at dit trægulv trænger til en professionel gulvafslibning.",
    date: "2026-11-15",
    category: "Gulvafslibning",
    image: "/images/blog/gulvafslibning.jpg",
  },
  {
    slug: "valg-af-gulvbehandling",
    title: "Hvilken gulvbehandling skal du vælge?",
    excerpt:
      "Vi guider dig til den rette behandling, så dit gulv får det udseende og den beskyttelse du ønsker.",
    date: "2026-11-10",
    category: "Gulvbehandling",
    image: "/images/blog/gulvbehandling.jpg",
  },
  {
    slug: "fordele-ved-professionel-gulvservice",
    title: "Fordele ved professionel gulvservice",
    excerpt:
      "Derfor kan professionel behandling gøre en stor forskel for både gulvets udseende og levetid.",
    date: "2026-11-05",
    category: "Gulvservice",
    image: "/images/blog/gulvservice.jpg",
  },
];

export const latestBlogPosts = [...blogPosts]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  .slice(0, 3);
