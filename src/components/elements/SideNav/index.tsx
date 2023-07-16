import { signOut, signIn, useSession } from "next-auth/react";
import { sideNavLabels } from "y/constants/elements/SideNav";
import Link from "next/link";

export const SideNav = () => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href={`/`}>{sideNavLabels.HOME}</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>{sideNavLabels.PROFILE}</Link>
          </li>
        )}
        {user != null ? (
          <li>
            <button onClick={() => void signOut()}>
              {sideNavLabels.SIGN_OUT}
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signIn()}>
              {sideNavLabels.SIGN_IN}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
