import { DashboardLayout } from "@/components/common/layouts/dashboard-layout";
import Meta from "@/components/meta";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getServerAuthSession } from "@/server/auth";
import { User } from "@prisma/client";
import { GetServerSideProps } from "next";
import React from "react";

const Overview = ({ user }: { user: User }) => {
  return (
    <>
      <Meta title={`Overview | ${siteConfig.name}`} />
      <DashboardLayout user={user}>
        <div>Overview</div>
      </DashboardLayout>
    </>
  );
};

export default Overview;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  const user = session?.user;
  if (!user?.id)
    return {
      redirect: {
        destination: routes.signIn,
        permanent: false,
      },
    };
  return {
    props: {
      user,
    },
  };
};
