import styled from '@emotion/styled';

const StyledImagePreview = styled.div`
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .max_add_div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-self: flex-end;
    margin: 0 0 0 30px;
  }

  .image_container {
    width: fit-content;
    min-height: 120px;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;

    .img_holder_div {
      background-color: transparent;
      position: relative;
      height: fit-content;
      width: fit-content;
      margin: 0 5px;
      display: flex;

      .image_preview_span {
        background-color: grey;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 105px;
        height: 105px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;

export default StyledImagePreview;
