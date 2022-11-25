import Main from "../components/Main";
import CurrentMatch from "../components/CurrentMatch";

export default function Home({ matches, teams, previous, current }) {
  return (
    <div>
      <CurrentMatch current={current} />
      <Main matches={matches} teams={teams} previous={previous} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://worldcupjson.net/matches/today");
  const res2 = await fetch("https://worldcupjson.net/teams");
  const res3 = await fetch("https://worldcupjson.net/matches/?by_date=ASC");
  const res4 = await fetch("https://worldcupjson.net/matches/current");
  const teamData = await res2.json();
  const teams = teamData.groups;
  const matches = await res.json();
  const previous = await res3.json();
  const current = await res4.json();

  return {
    props: {
      matches,
      teams,
      previous,
      current,
    },
  };
}
