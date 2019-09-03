import React, { useContext } from "react";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export const findEndPlace = async(event : any) => {
    console.log(event);
}


export default ({navigation} : any) => {

    return (
        <Container>
          <Content>
            <Form>
              <Item fixedLabel>
                <Label>사용자</Label>
                <Input />
              </Item>
              <Item fixedLabel last>
                <Label>비밀번호</Label>
                <Input />
              </Item>
            </Form>
          </Content>
        </Container>
      );
}
