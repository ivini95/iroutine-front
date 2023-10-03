import NavigateProfile from "../components/profileComponents/navigateProfile";
import SalutionContainer from "../components/profileComponents/salutationContainer";


export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <SalutionContainer/>
        <NavigateProfile/>
      </div>
    </main>
  )
}
