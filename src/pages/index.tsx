import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Stats from '@/components/header/stats';
import List from '@/components/list/list';
import { Meta } from '@/layouts/Meta';
import { Default } from '@/templates/Default';

const Home = () => {
  return (
    <Default
      meta={
        <Meta
          title="Superteam Submissions | Grizzlython Hackathon"
          description="Explore all the submissions for Grizzlython hackathon by Superteam members"
        />
      }
    >
      <Header />
      <Stats />
      <List />
      <Footer />
    </Default>
  );
};

export default Home;
