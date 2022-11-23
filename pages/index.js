import Main from "../components/Main";

export default function Home({ matches, teams, previous }) {
  return (
    <div>
      <Main matches={matches} teams={teams} previous={previous} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://worldcupjson.net/matches/today");
  const res2 = await fetch("https://worldcupjson.net/teams");
  const res3 = await fetch("https://worldcupjson.net/matches/?by_date=ASC");
  const data = await res2.json();
  const teams = data.groups;
  const matches = await res.json();
  const previous = await res3.json();

  return {
    props: {
      matches,
      teams,
      previous,
    },
  };
}
