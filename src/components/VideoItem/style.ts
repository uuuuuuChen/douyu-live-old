import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
export const VideoWrapper = styled.div`
    /* display: inline-block; */
    float: left;
    width: 50%;
    padding: 0 ${px2rem(5)} ${px2rem(5)} 0;
    /* padding: 0 ${px2rem(5)}; */
    /* margin-bottom: ${px2rem(10)}; */
    box-sizing: border-box;
    /* overflow: scroll; */
    .video-link{
        text-decoration: none;
        .image-container {
            position: relative;
            width: 100%;
            padding-bottom: 58%;  // 63
            .hotdu {
                position: absolute;
                top: -${px2rem(4)};
                left: 0;
                z-index: 998;
                box-sizing: border-box;
                padding-right: ${px2rem(5)};
                width: 100%;
                height: ${px2rem(18)};
                background: url(https://shark2.douyucdn.cn/front-publish/m-douyu-v3-master/assets/images/bg-shadow_e60f214.png) no-repeat;
                background-size: 100% 100%;
                border-radius: ${px2rem(4)} ${px2rem(4)} 0 0;
            }
            .iconhot {
                margin-left: ${px2rem(115)};
                /* display: block; */
                margin-right: ${px2rem(3)};
                width: ${px2rem(11)};
                height: ${px2rem(11)};
                font-size: ${px2rem(11)};
                font-weight: 700;
                color: #fff;
                }
            .barrage-count {
                    /* display: block; */
                    height: 100%;
                    line-height: ${px2rem(18)};
                    font-size: 10px;
                    color: #fff;
                }
            .image-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                /* height: 100%; */
                background-color: #e7e7e7;
                background-image: linear-gradient(transparent 50%, rgba(0, 0, 0, .5));
                border-radius: ${px2rem(6)};
                text-align: center;
                overflow: hidden;
                .tv {
                    width: ${px2rem(104)};
                    height: ${px2rem(101)};
                }
                .pic {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    /* height: 100%; */
                    z-index: 1;
                    opacity: 0;
                    transition: opacity .3s ease;
                    transform: translate3d(0, 0, 0);
                }
              
                .cover {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: ${px2rem(16)};
                    background-image: linear-gradient(180deg, rgba(33, 33, 33, 0),rgba(33, 33, 33, .5));
                    z-index: 2;
                }
                .info {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: ${px2rem(22)};
                    line-height: ${px2rem(22)};
                    font-size: ${px2rem(16)};
                    color: #ffffff;
                    text-align: left;
                    z-index: 3;
                    background: linear-gradient(180deg,rgba(33,33,33,0),rgba(33,33,33,.5));
                    span {
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .icon {
                        font-size: ${px2rem(12)};
                        padding: 0 ${px2rem(5)};
                    }
                    .play-count{
                        height: ${px2rem(18)};
                        line-height: ${px2rem(18)};
                        font-size: ${px2rem(10)};
                        color: #fff;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        /* margin-left: ${px2rem(8)}; */
                    }
                }
            }
        }
        .title {
            width: 100%;
            height: ${px2rem(27)};
            line-height: ${px2rem(27)};
            font-size: ${px2rem(12)};
            color: #333;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
    
`