import NoResultFallbackUi from "../shared/NoResultFallbackUi";

function DeshboardSearch() {
  return (
    <section className="flex items-center justify-center w-full h-full">
      <NoResultFallbackUi
        title="No Result"
        description="  There is no search for the word dwdwwdw, try using another keyword"
      />
    </section>
  );
}

export default DeshboardSearch;
