import PropTypes from "prop-types";
import DesktopContainer from "./RespnsiveContainers/DesktopContainer";
import MobileContainer from "./RespnsiveContainers/MobileContainer";
import React from "react";
import { Button, Icon, Container, Divider, Grid, Header, Image, List, Segment } from "semantic-ui-react";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const App = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Sample text
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Pellentesque urna nibh, eleifend non mauris ut, fringilla aliquet elit. Fusce a mattis augue. Aenean neque sapien, imperdiet vulputate elit eget, interdum sollicitudin metus. Ut luctus
              porta augue, condimentum pretium.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Just a header
            </Header>
            <p style={{ fontSize: "1.33em" }}>Sed maximus ac tellus ut fringilla. Fusce posuere tristique justo, id posuere.</p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src="/img/cat.jpg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button as="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" icon labelPosition="right" secondary size="huge">
              Find out more
              <Icon name="right arrow" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Some epic quote"
            </Header>
            <p style={{ fontSize: "1.33em" }}>You won't believe what happened next</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I can't believe it's not real"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Icon name="user circle"/>
              <b>John</b> CEO of Big Company inc.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          What more stuff?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Fusce non velit leo. Quisque eget dapibus quam, quis facilisis ex. Praesent at eleifend diam. Integer convallis tempor neque eget efficitur. Mauris eget lectus at risus volutpat porttitor. Nullam venenatis.
        </p>
        <Button as="a" href="https://www.youtube.com/watch?v=oavMtUWDBTM" size="large">
          Read More
        </Button>

        <Divider as="h4" className="header" horizontal style={{ margin: "3em 0em", textTransform: "uppercase" }}>
          <p>Case Studies</p>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Yea that happened
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Quisque ipsum nunc, egestas sed dictum non, sagittis et quam. Sed dolor mi, tristique in commodo sed, porttitor vel ante. Suspendisse feugiat enim sed tellus placerat efficitur. Nunc eu nisl vitae.
        </p>
        <Button as="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Links" />
              <List link inverted>
                <List.Item as="a" href="https://www.pexels.com/@pixabay">Photos by Pixabay from Pexels</List.Item>
                <List.Item as="a" href="https://react.semantic-ui.com/">Page UI</List.Item>
                <List.Item as="a" href="https://github.com/alenl2/komp-si">Page source</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                <List.Item>web@komp.si</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>komp.si</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default App;
