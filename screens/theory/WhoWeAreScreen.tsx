import { ScrollView, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { s } from "../../Style";

const oathText =
  "I swear (or affirm) That I will be faithful And bear true allegiance To His Majesty King Charles the Third King of Canada His Heirs and Successors And that I will faithfully observe The laws of Canada Including the Constitution Which recognizes and affirms The Aboriginal and treaty rights of First Nations, Inuit and Métis peoples And fulfil my duties as a Canadian citizen.";
const WhoWeAreScreen = () => {
  return (
    <ScrollView>
      <Text style={s.heading}>Who we are</Text>
      <Text style={s.text}>
        Canada is known around the world as a strong and free country. Canadians
        are proud of their unique identity. We have inherited the oldest
        continuous constitutional tradition in the world. We are the only
        <Text style={s.textHighlighted}>
          constitutional monarchy in North America
        </Text>
        . Our institutions uphold a commitment to{" "}
        <Text style={s.textHighlighted}>Peace, Order, and Good Government</Text>
        , a key phrase in Canada’s original constitutional document in 1867, the
        British North America Act. A belief in ordered liberty, enterprise, hard
        work and fair play has enabled Canadians to build a prosperous society
        in a rugged environment from our Atlantic shores to the Pacific Ocean
        and to the Arctic Circle—so much so that poets and songwriters have
        hailed Canada as the “Great Dominion.” To understand what it means to be
        Canadian, it is important to know about our{" "}
        <Text style={s.textHighlighted}>
          three founding peoples — Aboriginal, French and British
        </Text>
        .
      </Text>

      <Text style={s.heading}>Aboriginal peoples</Text>
      <Text style={s.text}>
        The ancestors of Aboriginal peoples are believed to have migrated from
        Asia many thousands of years ago. They were well established here long
        before explorers from Europe first came to North America. Diverse,
        vibrant First Nations cultures were rooted in religious beliefs about
        their relationship to the Creator, the natural environment and each
        other.
      </Text>

      <Text style={s.text}>
        Aboriginal and treaty rights are in the Canadian Constitution.{" "}
        <Text style={s.textHighlighted}>
          Territorial rights were first guaranteed through the Royal
          Proclamation of 1763 by King George III
        </Text>{" "}
        and established the basis for negotiating treaties with the newcomers —
        treaties that were not always fully respected.
      </Text>
      <Text style={s.text}>
        From the 1800s until the 1980s, the federal government placed many
        Aboriginal children in residential schools to educate and assimilate
        them into mainstream Canadian culture. The schools were poorly funded
        and inflicted hardship on the students; some were physically abused.
        Aboriginal languages and cultural practices were mostly prohibited. In
        2008, Ottawa formally apologized to the former students.
      </Text>

      <Text style={s.text}>
        In today’s Canada, Aboriginal peoples enjoy renewed pride and confidence
        and have made significant achievements in agriculture, the environment,
        business, and the arts. Today, the term{" "}
        <Text style={s.textHighlighted}>
          Aboriginal peoples refer to three distinct groups
        </Text>
        : Indian refers to all Aboriginal people who are not Inuit or Métis. In
        the 1970s, the term First Nations began to be used. Today, about half of
        First Nations people live on reserve land in about 600 communities while
        the other half live off-reserve, mainly in urban centers.
      </Text>

      <Text style={s.heading}>Unity in Diversity</Text>
    </ScrollView>
  );
};

export default WhoWeAreScreen;

const styles = StyleSheet.create({});
