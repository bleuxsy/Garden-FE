import styled from "styled-components";

/* ✅ 전체 컨테이너 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; /* ✅ 화면 전체 높이 */
  background-color: #ffffff;
  padding-bottom: 0; /* ✅ 하단 여백 제거 */
  overflow: hidden; /* ✅ 스크롤바 제거 */
`;

/* ✅ 상단 헤더 */
export const Header = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
  background-color: #f5f5f5;
  position: relative;
`;

/* ✅ 뒤로 가기 아이콘 */
export const BackIcon = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  cursor: pointer;
`;

/* ✅ 프로필 카드 */
export const ProfileCard = styled.div`
  width: 100%;
  background-color: #fafafa;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  margin-top: 30px; /* ✅ 여백 조정 */
`;

/* ✅ 프로필 이미지 컨테이너 */
export const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

/* ✅ 프로필 이미지 */
export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
`;

/* ✅ 카메라 아이콘 */
export const CameraIcon = styled.img`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/* ✅ 사용자 이름 */
export const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
`;

/* ✅ 사용자 정보 섹션 */
export const InfoSection = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 20px;
`;

/* ✅ 정보 라벨 */
export const InfoLabel = styled.span`
  font-size: 14px;
  color: gray;
`;

/* ✅ 정보 값 */
export const InfoValue = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

/* ✅ 버튼 감싸는 컨테이너 */
export const ActionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute; /* ✅ 화면 아래 고정 */
  bottom: 90px; /* ✅ 하단바 위쪽으로 배치 */
  left: 50%;
  transform: translateX(-50%);
`;

/* ✅ 로그아웃 버튼 */
export const LogoutButton = styled.button`
  width: 90%;
  background-color: #4caf50;
  color: white;
  margin-top: 410px;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #388e3c;
    transform: scale(1.02);
  }
`;

/* ✅ 탈퇴하기 텍스트 */
export const QuitText = styled.div`
  font-size: 14px;
  color: black;
  margin-top: 10px; /* ✅ 버튼과 간격 조정 */
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
