import styles from "@styles/Home.module.css";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import { useState } from "react";
import useIndex from "data/hooks/useIndex.page";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color={"error"}>{erro}</Typography>}
          {/* se houver erro, exibe o elemento com o erro */}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                <UserInformation
                  name={"Lucian Carlos"}
                  picture={
                    "https://scontent.fssz1-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/46866286_2227510580612541_8048237476789092352_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHulFTrEKYe8q6rEc8rkEG8zkmK0WA8bMDOSYrRYDxswHMUOSxEWmq7l9vCUZ1eq0_q4-HsHmnk0r2jkmPvXD_F&_nc_ohc=cLi1ISzU4M4AX-CYcgt&_nc_ht=scontent.fssz1-1.fna&tp=27&oh=d214471a7edc876dac5b5f712a26fac6&oe=60E6FF08"
                  }
                  rating={3}
                  description={"Sao Paulo"}
                />
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um Profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
