import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Index = ({ raForms }) => {
  return (
    <div className="raForms-container">
      <h1>Risk Assessment Forms</h1>
      <div className="grid wrapper">
        {raForms.map(raForm => {
          return (
            <div key={raForm._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${raForm._id}`}>
                      <a>{raForm.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${raForm._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${raForm._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/raForms');
  const { data } = await res.json();

  return { raForms: data }
}

export default Index;