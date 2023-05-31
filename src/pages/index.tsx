import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileCardLoading } from "../components/ProfileCardLoading";
import { useFindGithubUser } from "../hooks/useFindGitHubUser";

export default function Home() {
  const { user, loading, error, handleUserSearch } = useFindGithubUser()

  return (
    <>
      <Header />
      <Input
        handleUserSearch={handleUserSearch}
        isLoading={loading}
        error={error}
      />
      {loading ? (
        <ProfileCardLoading />
      ) : (
        !!Object.keys(user).length && <ProfileCard {...user} />
      )}
    </>
  )
}
