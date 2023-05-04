import Button from "../../ui-lib-components/Button"
import Icon, {allowedIcons} from "../../ui-lib-components/Icon"
import {allowedColor} from "../../ui-lib-components/Icon/Icon"

type LikedButtonProps = {
    isLiked: boolean | undefined,
    onLike: () => void,
    onUnLike: () => void
}

export const LikedButton:React.FC<LikedButtonProps> =({isLiked, onLike, onUnLike}) => {
    const handleLike = () => {
        const likeCallback = isLiked ? onUnLike : onLike

        likeCallback()
    }
    return (
        <Button onClick={() => handleLike()}>
            <Icon iconName={allowedIcons.like} color={isLiked ? allowedColor.gold : allowedColor.white} />
        </Button>
    )
}