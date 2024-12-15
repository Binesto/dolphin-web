import type { Metadata } from "next";
import ProfilePageDetail from "./page-content";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Title",
    description: "Description",
  };
}

export default ProfilePageDetail;