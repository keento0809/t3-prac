import { NewTweetForm } from "y/components/elements/Form/NewTweetForm";
import { Header } from "y/components/elements/Header";
import { Layout } from "y/components/elements/Layout";
import { MainLayout } from "y/components/elements/Layout/MainLayout";
import { SideNav } from "y/components/elements/SideNav";

export const Top = () => {
  return (
    <>
      <Layout>
        <SideNav />
        <MainLayout>
          <Header />
          <NewTweetForm />
        </MainLayout>
      </Layout>
    </>
  );
};
