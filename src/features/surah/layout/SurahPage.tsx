import { useRouter } from "next/router";
import { useGetSurahQuery } from "src/features/core/store/coreService";
import Image from "next/image";
import { SurahHeaderFrame } from "../components/SurahHeaderFrame";
import { SurahFrame } from "../components/SurahFrame";
import { useGetPageByNumberQuery } from "../store/surahService";
import { spawn } from "child_process";
export const SurahPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: surah, isLoading, isSuccess } = useGetSurahQuery(id as string);
  // const { data: surah, isLoading } = useGetPageByNumberQuery(id as string);
  console.log(surah);

  if (isLoading || !surah) {
    return <div>loading...</div>;
  }

  return (
    <main className="h-screen">
      <div className="text-xl text-red-600 max-h-[100vh] flex flex-col gap-2 px-3 mt-2 overflow-y-auto">
        <SurahHeaderFrame surah={surah?.data} />
        <SurahFrame surah={surah?.data} />
      </div>
    </main>
  );
};
