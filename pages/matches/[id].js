import { useRouter } from "next/router";
import Head from "next/head";
import MatchDetails from "../../components/MatchDetails/MatchDeatils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const MatchDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, error, data, isFetching } = useQuery(["match", id], () =>
    axios
      .get(`https://worldcupjson.net/matches/${id}?details=true`)
      .then((res) => res.data)
  );

  return (
    <main>
      <Head>
        <title>Match Details</title>
      </Head>
      {isLoading ? (
        <Spinner />
      ) : (
        <MatchDetails match={data} isFetching={isFetching} />
      )}
    </main>
  );
};

export default MatchDetail;
