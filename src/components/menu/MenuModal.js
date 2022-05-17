import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menuData } from "../../services/menu";
import { idState } from "../../state";
import { Background, ModalContainer, ModalButton } from "../common/Modal";
import { Text, MenuInput, Title } from "./style";
import { useRecoilState } from "recoil";

const MenuModal = ({ openModal, setOpenModal, closeModal, title }) => {
  const uId = useRecoilValue(idState);
  const [inputs, setInputs] = useState({
    menu: "",
    price: "",
    request: "",
  });

  const { menu, price, request } = inputs;
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onPublish = () => {
    menuData(uId, openModal.postId, inputs).then((response) => {
      console.log(response);
      closeModal();
      //채팅페이지로 이동
      navigate(`/chat?pId=${openModal.postId}`, {
        state: {
          pId: openModal.postId,
          title: title,
          fee: response.fee,
        },
      });
    });
  };

  return (
    <>
      {openModal.isOpen ? (
        <Background onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Title>주문 정보 입력</Title>
            <MenuInput>
              <div>메뉴</div>
              <input
                placeholder="정확하게 작성해주세요"
                name="menu"
                value={menu}
                onChange={onChange}
              />
            </MenuInput>
            <MenuInput>
              <div>가격</div>
              <input
                placeholder="가격만 입력해주세요 (ex 10000)"
                name="price"
                value={price}
                onChange={onChange}
              />
            </MenuInput>
            <MenuInput>
              <div>요청사항</div>
              <input
                placeholder="정확하게 작성해주세요"
                name="request"
                value={request}
                onChange={onChange}
              />
            </MenuInput>
            <Text>
              확인 버튼을 누를 시,
              <br /> 나눔 채팅방으로 이동합니다
            </Text>
            <ModalButton onClick={onPublish}>확인</ModalButton>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};

export default MenuModal;
