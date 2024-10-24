import mathNerd from "../src/assets/images/math-nerd.jpg";
import contentCreator from "../src/assets/images/content-creator.jpg";
import photographer from "../src/assets/images/photographer.jpg";

interface WidgetFeedProps {
  authorAvatar?: string;
  authorName: string;
  authorAbout: string;
}

export const widgetFeedProps: WidgetFeedProps[] = [
  {
    authorAvatar: mathNerd,
    authorName: "Victor Lathoshi",
    authorAbout: "Senior software engineer",
  },
  {
    authorAvatar: contentCreator,
    authorName: "Larry James",
    authorAbout: "Content Creator",
  },
  {
    authorAvatar: photographer,
    authorName: "Anthony Raymond",
    authorAbout: "Photographer",
  },
];
