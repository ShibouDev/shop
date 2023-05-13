import * as S from "./styled"
const Container = ({children, justifyContent, black, column}) => {
    return(
       <S.Container justifyContent={justifyContent} black={black} column={column}>
        {children}
       </S.Container>
    )
}
export default Container