import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 94vh; /* 화면 전체 높이 사용 */
  padding: 16px;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  width: 218px; /* 지정된 이미지 너비 */
  height: 230px; /* 지정된 이미지 높이 */
  max-width: 100%; /* 최대 크기 제한 */
  margin-top: 291px; /* 위에서부터 이미지까지의 간격 */
  margin-bottom: 20px; /* 이미지와 텍스트 간격 */
`;

export const Button = styled.button`
  position: relative; /* 로고와 텍스트의 개별 위치 조정을 위한 상대 위치 */
  width: 90%; /* 모바일 화면 너비에 맞게 */
  max-width: 360px; /* 최대 너비 제한 */
  padding: 14px 0;
  font-size: 18px; /* 버튼 텍스트 크기 */
  font-weight: bold; /* 버튼 텍스트 굵기 */
  text-align: center;
  background-color: #fee500; /* 버튼 배경색 */
  color: #000000; /* 텍스트 색상 */
  border: none;
  border-radius: 12px; /* 둥근 모서리 */
  cursor: pointer;
  margin-bottom: 20px; /* 버튼 하단 간격 */
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd400; /* 호버 시 색상 변경 */
  }

  img {
    position: absolute; /* 버튼 내부에서 로고를 위치 조정 */
    left: 20px; /* 버튼 왼쪽으로부터의 거리 */
    top: 50%; /* 버튼의 중앙에 수직 정렬 */
    transform: translateY(-50%); /* 수직 중앙 정렬 보정 */
    width: 24px; /* 로고 크기 */
    height: auto;
  }
`;
