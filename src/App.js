import './App.css';
import { graphql } from "@octokit/graphql";
import { useEffect } from 'react';

function App () {

  useEffect(()=>{
    const getQl = async () => {
      const graphqlWithAuth = graphql.defaults({
        headers: {
          authorization: `token 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`,
        },
      });
      const { repository } = await graphqlWithAuth(`
        {
          repository(owner: "codestates-seb", name: "agora-states-fe") {
            discussions(last: 10) {
              edges {
                node {
                  bodyText
                  createdAt
                  author {
                    login
                  }
                  title
                  url
                }
              }
            }
          }
        }
      `);
      console.log(repository);
    }

    getQl();
  },[]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
