/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-01-29 18:04:58
 */
import { Component, EventTouch, _decorator } from "cc";
import { engine } from "../../core/Engine";
import { tips } from "../../core/gui/prompt/TipsManager";
import { ecs } from "../../core/libs/ECS";
import { Account } from "../account/Account";
import { SingletonModuleComp } from "../common/ecs/SingletonModuleComp";
import { RoleAnimatorType } from "../role/model/RoleEnum";

const { ccclass, property } = _decorator;

@ccclass('Demo')
export class Demo extends Component {
    private lang: boolean = true;

    onLoad() {
        var account = new Account();
        account.requestLoadPlayer();
        ecs.getSingleton(SingletonModuleComp).account = account;
    }

    /** 升级 */
    private btn_level_up(event: EventTouch, data: any) {
        var role = ecs.getSingleton(SingletonModuleComp).account.entity.AccountModel.role;
        if (role.entity.RoleLevel.lv < 100)
            role.entity.RoleLevel.lv++;
    }

    /** 转职弓箭 */
    private btn_change_job9(event: EventTouch, data: any) {
        var role = ecs.getSingleton(SingletonModuleComp).account.entity.AccountModel.role;
        role.changeJob(9);
    }

    /** 转职匕首 */
    private btn_change_job5(event: EventTouch, data: any) {
        var role = ecs.getSingleton(SingletonModuleComp).account.entity.AccountModel.role;
        role.changeJob(5);
    }

    /** 转职刀 */
    private btn_change_job1(event: EventTouch, data: any) {
        var role = ecs.getSingleton(SingletonModuleComp).account.entity.AccountModel.role;
        role.changeJob(1);
    }

    /** 攻击 */
    private btn_attack(event: EventTouch, data: any) {
        var role = ecs.getSingleton(SingletonModuleComp).account.entity.AccountModel.role;
        role.entity.RoleView.animator.setTrigger(RoleAnimatorType.Attack);
    }

    /** 多语言切换 */
    private btn_language(event: EventTouch, data: any) {
        console.log(engine.i18n.getLangByID("notify_show"));

        if (this.lang == false) {
            this.lang = true;
            engine.i18n.setLanguage("zh", () => { });
        }
        else {
            this.lang = false;
            engine.i18n.setLanguage("en", () => { });
        }
    }

    /** 弹出提示框 */
    private btn_common_prompt(event: EventTouch, data: any) {
        tips.test(() => {

        });
        tips.test(() => {

        });
    }

    /** 漂浮提示框 */
    private btn_notify_show(event: EventTouch, data: any) {
        engine.gui.toast("common_prompt_content");
    }

    /** 加载提示 */
    private netInstableOpen(event: EventTouch, data: any) {
        tips.netInstableOpen();
        setTimeout(() => {
            tips.netInstableClose();
        }, 2000);
    }

    /** 背景音乐 */
    private btn_audio_open1(event: EventTouch, data: any) {
        engine.audio.musicVolume = 0.5;
        engine.audio.playMusic("audios/nocturne");
    }

    /** 背景音效 */
    private btn_audio_open2(event: EventTouch, data: any) {
        engine.audio.playEffect("audios/Gravel");
    }
}
