import styles from "./Home.module.css";
import styled from "styled-components";
import { tweets } from "../../utils/tweets";
function Home() {
  const Feed = styled.div`
    max-width: 42rem;
    width: 100%;
  `;
  return (
    <main className={styles.feed}>
      <Feed >
        {/* {tweets.map((tweet) => (
          <div key={tweet.id}>{tweet.tweet}</div>
        ))} */}
        <Tweet key="/>
      </Feed>
    </main>
  );
}

export default Home;
