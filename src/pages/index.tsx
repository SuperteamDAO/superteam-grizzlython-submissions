import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import List from '@/components/list/list';
import { Meta } from '@/layouts/Meta';
import { Default } from '@/templates/Default';

const Home = () => {
  return (
    <Default
      meta={
        <Meta
          title="Grizzlython Submissions | Superteam"
          description="Explore all the submissions for Grizzlython hackathon by Superteam members"
        />
      }
    >
      <Header />
      <List />
      <Footer />
    </Default>
  );
};

export default Home;
