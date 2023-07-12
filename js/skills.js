var skills = {
    Default: {
        HPBoost: {
            name_jp: "HPブースト",
            name_en: "HP Up",
            details: "Increases Max HP.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 0
            }
        },
        TPBoost: {
            name_jp: "TPブースト",
            name_en: "TP Up",
            details: "Increases Max TP.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 80
            }
        },
        FirstAid: {
            name_jp: "応急手当",
            name_en: "Bandage",
            details: "Recovers an ally's HP; can only be used from the menu.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 160
            }
        },
        ListenToExp: {
            name_jp: "聞きかじりの経験",
            name_en: "Combat Study",
            details: "For every level of this skill, the character gains that percent of experience from each battle while not in the active party.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 1,
            coords: {
                x: 0,
                y: 240
            }
        },
        Take: {
            name_jp: "伐採",
            name_en: "Take",
            details: "Allows character to use take gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 320
            }
        },
        Chop: {
            name_jp: "採掘",
            name_en: "Chop",
            details: "Allows character to use chop gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 400
            }
        },
        Mine: {
            name_jp: "採取",
            name_en: "Mine",
            details: "Allows character to use mine gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 480
            }
        }
    },
    Prince: {
        RoyalVeil: {
            name_jp: "王家の血統",
            name_en: "Royal Veil",
            details: "All allies will recover HP if your HP is high at the turn's end.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        MonarchMarch: {
            name_jp: "ロイヤルベール",
            name_en: "Monarch March",
            details: "Recover the party's HP with each step by singing gallant military songs.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 10
            }
        },
        RoyalLineage: {
            name_jp: "王者の凱歌",
            name_en: "Royal Lineage",
            details: "This royalty skill regains TP with each new enhancement received.",
            requires: "N/A",
            dep: {
                RoyalBell: 5
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 10
            }
        },
        TriumphantCry: {
            name_jp: "キングスマーチ",
            name_en: "Triumphant Cry",
            details: "All allies will recover HP if you are alive at the end of the battle.",
            requires: "N/A",
            dep: {
                KingsVictorySong: 5
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 169.8
            }
        },
        Reinforce: {
            name_jp: "リインフォース",
            name_en: "Reinforce",
            details: "When casting an enhancement spell on an ally they will recover HP.",
            requires: "N/A",
            dep: {
                DefenseCommand: 1
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 10
            }
        },
        NobilityProof: {
            name_jp: "王たる証",
            name_en: "Nobility Proof",
            details: "Your TP will recover when an enhancement spell's effect ends.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302.2,
                y: 412
            }
        },
        AttackOrder: {
            name_jp: "攻撃の号令",
            name_en: "Attack Order",
            details: "Allies' attack power will be increased for three turns.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 412
            }
        },
        GuardOrder: {
            name_jp: "防御の号令",
            name_en: "Guard Order",
            details: "Allies' defense will be increased for three turns.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 90
            }
        },
        ElementalBomb: {
            name_jp: "ファイアアームズ",
            name_en: "Elemental Bomb",
            details: "Dispels an ally's Elemental Arms enchantment to deal 3 instances of damage to random enemies.",
            requires: "Arms",
            dep: {
                AttackCommand: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 294
            }
        },
        Negotiation: {
            name_jp: "フリーズアームズ",
            name_en: "Negotiation",
            details: "Dispel all enhancement spells to recover HP.",
            requires: "Arms",
            dep: {
                AttackCommand: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 374
            }
        },
        Inspire: {
            name_jp: "ショックアームズ",
            name_en: "Inspire",
            details: "Dispel all stat decreases and recover TP.",
            requires: "Arms",
            dep: {
                AttackCommand: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 454
            }
        },
        AdNihilo: {
            name_jp: "エミットウェポン",
            name_en: "Ad Nihilo",
            details: "Dispel all enhancements on one enemy, deals non-elemental damage.",
            requires: "Head",
            dep: {
                AttackCommand: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 534
            }
        },
        FireArms: {
            name_jp: "リセットウェポン",
            name_en: "Fire Arms",
            details: "Enchant allies' weapon with fire and increase fire damage dealt for three turns.",
            requires: "Head",
            dep: {
                AttackCommand: 5,
                DefenseCommand: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 251
            }
        },
        FreezeArms: {
            name_jp: "予 防の号令",
            name_en: "FreezeArms",
            details: "Enchant allies' weapon with ice and increase ice damage dealt for three turns.",
            requires: "Head",
            dep: {
                DefenseCommand: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 90
            }
        },
        ShockArms: {
            name_jp: "覇気の号令",
            name_en: "ShockArms",
            details: "Enchant allies' weapon with volt and increase volt damage dealt for three turns.",
            requires: "Head",
            dep: {
                DefenseCommand: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 170
            }
        },
        RegalRadiance: {
            name_jp: "庇 護の号令",
            name_en: "Regal Radiance",
            details: "Dispels an ally's Elemental Arms enchantments to deal damage to all enemies. May stun.",
            requires: "Head",
            dep: {
                AmbitiousCommand: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 170
            }
        },
        PreventOrder: {
            name_jp: "エクスチェンジ",
            name_en: "Prevent Order",
            details: "Allies will gain ailment and bind protection for three turns. This enhancement is consumed after a bind or ailment is negated.",
            requires: "Head",
            dep: {
                ProofOfKingship: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453.2,
                y: 332
            }
        },
        ProtectOrder: {
            name_jp: "リニューライフ",
            name_en: "Protect Order",
            details: "For three turns, allies will gain HP when a turn ends.",
            requires: "Head",
            dep: {
                ProofOfKingship: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453.2,
                y: 412
            }
        },
        Knighthood: {
            name_jp: "クイックオーダー",
            name_en: "Knighthood",
            details: "The target ally's turn comes first.",
            requires: "Head",
            dep: {
                ProofOfKingship: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453.2,
                y: 492
            }
        }
    },

    Gladiator: {
        EndlessBattle: {
            name_jp: "常在戦場",
            name_en: "Endless Battle",
            details: "A skill for gladiators that raises physical attack power.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        SwordMastery: {
            name_jp: "剣マスタリー",
            name_en: "Sword Mastery",
            details: "Prerequisite for sword skills that raises sword damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 126
            }
        },
        ClubMastery: {
            name_jp: "鎚マスタリー",
            name_en: "Club Mastery",
            details: "Prerequisite for club skills that raises club damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 428.8
            }
        },
        Avenger: {
            name_jp: "スタンアタック",
            name_en: "Avenger",
            details: "Recover HP & TP whenever an ally is defeated.",
            requires: "N/A",
            dep: {
                Trance: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453.4,
                y: 25
            }
        },
        StunAttack: {
            name_jp: "ワイドエフェク ト",
            name_en: "Stun Attack",
            details: "May inflict stun damage with a normal attack.",
            requires: "N/A",
            dep: {
                SwordMastery: 5,
                HammerMastery: 5
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 277.4
            }
        },
        WildSwings: {
            name_jp: "アベンジャー",
            name_en: "Wild Swings",
            details: "Attack skills may cause splash damage to nearby enemies.",
            requires: "N/A",
            dep: {
                BerserkersOath: 1
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453.4,
                y: 328
            }
        },
        IronWill: {
            name_jp: "ブレイク",
            name_en: "Iron Will",
            details: "If HP is maxed and you are in the front row, recover TP.",
            requires: "Arms",
            dep: {
                SwordMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.4,
                y: 74.7
            }
        },
        BerserkerVow: {
            name_jp: "ラッシュ",
            name_en: "Berserker Vow",
            details: "Raise physical attack power of self and all enemies for 9 turns.",
            requires: "Arms",
            dep: {
                SwordMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.4,
                y: 478.7
            }
        },
        WolfHowl: {
            name_jp: "バインドカット",
            name_en: "Wolf Howl",
            details: "Decrease enemy defense for four turns. Stacks with status ailments.",
            requires: "Arms",
            dep: {
                SwordMastery: 3,
                Break: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.4,
                y: 175.7
            }
        },
        GrandColosseum: {
            name_jp: "ランページ",
            name_en: "Grand Colosseum",
            details: "Raise a bloody arena, allowing all fighters to focus their attacks more accurately. Raises accuracy and status infliction rate for 9 turns.",
            requires: "Arms",
            dep: {
                SwordMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.4,
                y: 276.7
            }
        },
        Break: {
            name_jp: "ブレイドレイヴ",
            name_en: "Break",
            details: "Sword: A slashing attack on a single enemy that lowers damage dealt.",
            requires: "Arms",
            dep: {
                SwordMastery: 10,
                Rush: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.4,
                y: 377.7
            }
        },
        Rush: {
            name_jp: "ク ラッシュブロー",
            name_en: "Rush",
            details: "Sword: Flank the enemy and slash them apart at random.",
            requires: "Arms",
            dep: {
                HammerMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 429
            }
        },
        BindCut: {
            name_jp: "アームブレイカー",
            name_en: "BindCut",
            details: "Sword: A strong slash at one enemy. May inflict leg bind.",
            requires: "Arms",
            dep: {
                HammerMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 126
            }
        },
        BloodThirst: {
            name_jp: "フリーズンブロー",
            name_en: "Bloodthirst",
            details: "Sword: Wait patiently then deliver a slash. The user heals based on damage dealt.",
            requires: "Arms",
            dep: {
                HammerMastery: 3,
                CrushBlow: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 328
            }
        },
        BladeRave: {
            name_jp: "ナインスマッシュ",
            name_en: "Blade Rave",
            details: "Sword: Rapid slashes at random enemies.",
            requires: "Arms",
            dep: {
                HammerMastery: 10,
                ArmBreaker: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 227
            }
        },
        CrushingBlow: {
            name_jp: "狂 戦士の誓い",
            name_en: "Crushing Blow",
            details: "Club: A strike attack that smashes enemy brains. May inflict confusion.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 453.4,
                y: 227
            }
        },
        ArmBreaker: {
            name_jp: "無我の境地",
            name_en: "Arm Breaker",
            details: "Club: A strike attack that smashes enemy arms. May inflict arm bind.",
            requires: "Head",
            dep: {
                BerserkersOath: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453.4,
                y: 126
            }
        },
        FreezingBlow: {
            name_jp: "チャージ",
            name_en: "Freezing Blow",
            details: "Club: A strike attack that smashes enemies with an ice element.",
            requires: "Arms",
            dep: {
                Avenger: 3,
                WolfHowl: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453.4,
                y: 429
            }
        },
        NineSmashes: {
            name_jp: "ウルフハウル",
            name_en: "Nine Smashes",
            details: "Club: An inaccurate strike attack that wallops one enemy repeatedly.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 453.4,
                y: 530
            }
        }
    },

    Hoplite: {
        Guardian: {
            name_jp: "ガーディアン",
            name_en: "Guardian",
            details: "A hoplite skill that reduces most damage taken. Decreases damage recieved from CUT/STAB/BASH/FIRE/ICE/VOLT attacks.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        SpearMastery: {
            name_jp: "盾マスタリー",
            name_en: "Spear Mastery",
            details: "Prerequisite for spear skills that raises spear damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 342
            }
        },
        ShieldMastery: {
            name_jp: "槍マスタリー",
            name_en: "Shield Mastery",
            details: "Prerequisite for shield skills that raises all defenses when equipped. Decreases damage recieved from CUT/STAB/BASH/FIRE/ICE/VOLT attacks when equipped with a shield.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 342
            }
        },
        Parry: {
            name_jp: "ガードヒール",
            name_en: "Parry",
            details: "A skill that may nullify damage received.",
            requires: "N/A",
            dep: {
                Revive: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 52
            }
        },
        Rhongomyniad: {
            name_jp: "パリィ",
            name_en: "Rhongomyniad",
            details: "Spear/Shield: Bash with your shield then thrust and slash with your spear. Deals an instance of BASH damage, then STAB damage, then CUT damage.",
            requires: "N/A",
            dep: {
                Taunt: 5
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 94
            }
        },
        RexHasta: {
            name_jp: "マテリアルパ リィ",
            name_en: "Rex Hasta",
            details: "Spear: Debuff the enemy into taking more damage this turn.",
            requires: "N/A",
            dep: {
                Taunt: 5
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 14
            }
        },
        ExploitWeakness: {
            name_jp: "ラインガード",
            name_en: "Exploit Weakness",
            details: "A litany that encourages allies to expose the enemy's weakness. Increases damage dealt to weakpoints for 3 turns.",
            requires: "Arms",
            dep: {
                ShieldMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 144
            }
        },
        Provoke: {
            name_jp: "ファイアガード",
            name_en: "Provoke",
            details: "Shield the party by drawing all enemy attacks to you. Increases chance of being targeted for 3 turns.",
            requires: "Arms",
            dep: {
                ShieldMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 304
            }
        },
        ShrugOff: {
            name_jp: "フリーズガード",
            name_en: "ShrugOff",
            details: "Fixed chance to heal yourself if you fail to parry an attack.",
            requires: "Arms",
            dep: {
                ShieldMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 384
            }
        },
        GáeBolg: {
            name_jp: "ショックガード",
            name_en: "Gáe Bolg",
            details: "Spear: A fast fire + pierce attack that can instantly kill or paralyze.",
            requires: "Arms",
            dep: {
                ShieldMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 464
            }
        },
        Gungnir: {
            name_jp: "ディバイドガード",
            name_en: "Gungnir",
            details: "Spear: A volt + pierce attack that never misses.",
            requires: "Arms",
            dep: {
                ShieldMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 224
            }
        },
        Geirskögul: {
            name_jp: "オーバーガード",
            name_en: "Geirskögul",
            details: "Spear: An ice + slash attack that strikes all enemies, lowering attack.",
            requires: "Arms",
            dep: {
                ShieldMastery: 8,
                EnGarde: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 544
            }
        },
        Aegis: {
            name_jp: "チェンジステップ",
            name_en: "Aegis",
            details: "Shield: Reduces elemental damage sustained by allies.",
            requires: "Legs",
            dep: {
                SpearMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 234
            }
        },
        Hoplon: {
            name_jp: "ブリッツリッター",
            name_en: "Hoplon",
            details: "Shield: Reduces physical damage sustained by allies.",
            requires: "Legs",
            dep: {
                SpearMastery: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 450
            }
        },
        Phalanx: {
            name_jp: "ロングストライド",
            name_en: "Phalanx",
            details: "Shield: Reduces nearly all forms of damage sustained by allies.",
            requires: "Legs",
            dep: {
                SpearMastery: 7,
                ChangeStep: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 342
            }
        },
        Gradivus: {
            name_jp: "リバイブ",
            name_en: "Gradivus",
            details: "Spear: A vampiric piercing attack that returns life to the user.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 52
            }
        },
        Bodyguard: {
            name_jp: "決 死の防壁",
            name_en: "Bodyguard",
            details: "Shield: Take damage in one ally's place for one turn.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 544
            }
        },
        Overwatch: {
            name_jp: "挑発",
            name_en: "Overwatch",
            details: "Shield: Attacks on an ally that exceed your HP are void for 1 turn.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 52
            }
        },
        Vigilance: {
            name_jp: "警戒行進",
            name_en: "Vigilance",
            details: "Heightened caution will lower the encounter rate for a short period.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 544
            }
        }
    },

    Buccaneer: {
        Trickster: {
            name_jp: "トリックスター",
            name_en: "Trickster",
            details: "Whenever you use an offensive skill, TP is restored.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        RapierMastery: {
            name_jp: "突剣マスタリー",
            name_en: "Rapier Mastery",
            details: "Improves physical damage with Rapiers; required for Rapier skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 28
            }
        },
        GunMastery: {
            name_jp: "銃マスタリー",
            name_en: "Gun Mastery",
            details: "Improves physical damage with Guns; required for Gun skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 515.8
            }
        },
        SelfTaughtSwordplay: {
            name_jp: "我流の剣術",
            name_en: "Swashbuckling",
            details: "When using a normal attack, there is a chance to strike multiple times.",
            requires: "N/A",
            dep: {
                RapierMastery: 8,
                GunMastery: 8
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 190.6
            }
        },
        LadyLuck: {
            name_jp: "幸運の女神",
            name_en: "Lady Luck",
            details: "Increase critical rate when using normal attacks.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 353.2
            }
        },
        LimitBoost: {
            name_jp: "リミットブース ト",
            name_en: "Limit Boost",
            details: "Increase the rate at which the Limit Gauge increases.",
            requires: "N/A",
            dep: {
                LadyLuck: 3,
                EagleEye: 3
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 190.6
            }
        },
        InTheDark: {
            name_jp: "インザダーク",
            name_en: "Lights Out",
            details: "Rapier: A thrust attack aimed at the eyes of an enemy; has a chance to blind the enemy.",
            requires: "Arms",
            dep: {
                RapierMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 28
            }
        },
        ChaseSaber: {
            name_jp: "チェイスセーバー",
            name_en: "Chase Saber",
            details: "Rapier: Matches with allies' cut attacks; performs a chase with a Rapier.",
            requires: "Legs",
            dep: {
                RapierMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 150
            }
        },
        ChaseBlow: {
            name_jp: "チェイスブロー",
            name_en: "Chase Blow",
            details: "Rapier: Matches with allies' blunt attacks; performs a chase with a Rapier.",
            requires: "Legs",
            dep: {
                RapierMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 272
            }
        },
        ChaseThrust: {
            name_jp: "チェイススラスト",
            name_en: "Chase Thrust",
            details: "Rapier: Matches with allies' thrust attacks; performs a chase with a Rapier.",
            requires: "Legs",
            dep: {
                RapierMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 394
            }
        },
        Hanging: {
            name_jp: "ハンギング",
            name_en: "Hanging",
            details: "Rapier: A thrust attack aimed at the head of one enemy; has a chance to bind the enemy's head.",
            requires: "Arms",
            dep: {
                RapierMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 516
            }
        },
        QuickDraw: {
            name_jp: "ク イックドロー",
            name_en: "Quick Draw",
            details: "Gun: Quickly draws out a gun; thrust attacks randomly fired at every enemy at the beginning of the turn.",
            requires: "Arms",
            dep: {
                GunMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 28
            }
        },
        ChaseFlame: {
            name_jp: "チェイスフレイム",
            name_en: "Chase Flame",
            details: "Gun: Matches with allies' flame attacks; performs a chase with a gun.",
            requires: "Legs",
            dep: {
                GunMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 150
            }
        },
        ChaseIce: {
            name_jp: "チェイスアイス",
            name_en: "Chase Ice",
            details: "Gun: Matches with allies' ice attacks; performs a chase with a gun.",
            requires: "Legs",
            dep: {
                GunMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 272
            }
        },
        ChaseThunder: {
            name_jp: "チェイスサンダー",
            name_en: "Chase Thunder",
            details: "Gun: Matches with allies' thunder attacks; performs a chase with a gun.",
            requires: "Legs",
            dep: {
                GunMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 394
            }
        },
        RapidFire: {
            name_jp: "ラピッドファイア",
            name_en: "Rapid Fire",
            details: "Gun: A thrust attack that drives 3 rapid shots into the enemy at once.",
            requires: "Arms",
            dep: {
                GunMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 516
            }
        },
        MillionThrust: {
            name_jp: "ミリオンスラスト",
            name_en: "Pincushion",
            details: "Rapier/Gun: Thrust attacks at every enemy randomly; damage increases with increased AGI.",
            requires: "Arms",
            dep: {
                RapierMastery: 10,
                GunMastery: 10
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 353.2
            }
        },
        EagleEye: {
            name_jp: "イーグルアイ",
            name_en: "Eagle Eye",
            details: "For 3 turns, an enemy's DEF is lowered.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 28
            }
        },
        Troublemaking: {
            name_jp: "トラブルメイク",
            name_en: "Trouble Maker",
            details: "For a certain number of steps, encounters are increased.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 515.8
            }
        }
    },

    Ninja: {
        Smokescreen: {
            name_jp: "煙りの末",
            name_en: "Keburi no Sue",
            details: "Decreases TP consumption and allows the Ninja to do full melee damage from the back row.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        DaggerMastery: {
            name_jp: "短剣マスタリー",
            name_en: "Knife Mastery",
            details: "Improves physical damage with Knives; required for Knife skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 265
            }
        },
        Conceal: {
            name_jp: "潜伏",
            name_en: "Senpuku",
            details: "Increase evasion rate.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 506
            }
        },
        Acrobatics: {
            name_jp: "軽業",
            name_en: "Karuwaza",
            details: "TP is recovered when evading an attack.",
            requires: "N/A",
            dep: {
                NinpouSarutobi: 3,
                NinpouCloudCover: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 506
            }
        },
        Decapitation: {
            name_jp: "首切",
            name_en: "Kubikiri",
            details: "When using a normal attack, there's a chance to instantly kill an enemy.",
            requires: "N/A",
            dep: {
                NinpouWaterMirror: 3,
                NinpouCaltrop: 5
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 373
            }
        },
        FleshBullet: {
            name_jp: "肉弾",
            name_en: "Nikudan",
            details: "Upon your death, you deal FIRE damage to the enemy.",
            requires: "N/A",
            dep: {
                NinpouBeckoning: 3,
                NinpouClone: 1
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 49
            }
        },
        ShadowWeave: {
            name_jp: "影 縫",
            name_en: "Kagenui",
            details: "Knife: A slash attack that stitches an enemy's shadow; has a chance to Bind Legs.",
            requires: "Arms",
            dep: {
                DaggerMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 157
            }
        },
        Meshizuna: {
            name_jp: "飯綱",
            name_en: "Izuna",
            details: "Knife: A cut attack at one enemy; has a chance to Petrify.",
            requires: "Arms",
            dep: {
                DaggerMastery: 3,
                ShadowWeave: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 265
            }
        },
        HawkWings: {
            name_jp: "鷹乃羽",
            name_en: "Takanoha",
            details: "Knife: A cut attack that randomly strikes every enemy many times at high speeds.",
            requires: "Arms",
            dep: {
                DaggerMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 373
            }
        },
        PluralSlash: {
            name_jp: "多元抜刀",
            name_en: "Tagen Battou",
            details: "Knife: A coordinated attack with clones randomly performs a cut attack at every enemy; the clone disappear after using this skill.  Damage is increased based on the number of clones consumed.  Only the damage from 1 clone is shown below.  For the complete damage table, see the table in the Help/About section.",
            requires: "Arms",
            dep: {
                DaggerMastery: 10,
                FleshBullet: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 157
            }
        },
        NinpouFukimibari: {
            name_jp: "忍 法 含針",
            name_en: "Fukubari",
            details: "A thrust attack at 3 enemies with needles held in the mouth; has a chance to inflict Sleep.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 374
            }
        },
        NinpouWaterMirror: {
            name_jp: "忍法 水鏡",
            name_en: "Suikyou",
            details: "Chance to spread target enemy's status ailments to other enemies.",
            requires: "Head",
            dep: {
                NinpouFukimibari: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 332
            }
        },
        NinpouCaltrop: {
            name_jp: "忍法 撒菱",
            name_en: "Makibishi",
            details: "A cut counterattack with fixed damage to enemies that have attacked the designated row; has a chance to inflict Poison.",
            requires: "Arms",
            dep: {
                NinpouFukimibari: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 412
            }
        },
        NinpouHeatHaze: {
            name_jp: "忍法 陽炎",
            name_en: "Kagerou",
            details: "Create a shadow image of yourself from thin air to act as a decoy.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 49
            }
        },
        NinpouBeckoning: {
            name_jp: "忍法 招鳥",
            name_en: "Otori",
            details: "For 3 turns, the designated ally will be the target of all enemy attacks.",
            requires: "Head",
            dep: {
                NinpouHeatHaze: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 7
            }
        },
        NinpouClone: {
            name_jp: "忍法 分身",
            name_en: "Bunshin",
            details: "Sacrifice half of your HP and TP to create a fully functional image from thin air. This clone can also use skills.",
            requires: "Head",
            dep: {
                NinpouHeatHaze: 3
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 151,
                y: 87
            }
        },
        NinpouSarutobi: {
            name_jp: "忍法 猿飛",
            name_en: "Sarutobi",
            details: "For 1 turn, there's a chance to nullify enemy physical attacks.",
            requires: "Legs",
            dep: {
                Conceal: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 464
            }
        },
        NinpouCloudCover: {
            name_jp: "忍法 雲隠",
            name_en: "Kumogakure",
            details: "Sacrifice half of your HP to increase evasion.",
            requires: "Legs",
            dep: {
                Conceal: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 544
            }
        },
        EscapeArts: {
            name_jp: "遁走の術",
            name_en: "Tonsou Jutsu",
            details: "Escape from battle and return to the floor entrance or Geomagnetic Field.",
            requires: "Legs",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 213
            }
        }
    },

    Monk: {
        FocusEnergy: {
            name_jp: "練気の法",
            name_en: "Form Qi",
            details: "The amount of HP recovered by healing skills is increased.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        FistMastery: {
            name_jp: "拳マスタリー",
            name_en: "Fist Mastery",
            details: "Increases Physical damage caused when unarmed by a percentage, and also improves the displayed base power of character that is unarmed (no weapon in 1st slot) by the skill level.  Required for fist skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 370
            }
        },
        PilgrimsGain: {
            name_jp: "行者の利益",
            name_en: "Ascetic Reward",
            details: "If the Monk falls in combat, the HP of every ally is recovered.  Works only once per battle.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302.2,
                y: 348
            }
        },
        ArtOfBloodReturn: {
            name_jp: "血返しの法",
            name_en: "Blood Return",
            details: "If an ally falls in combat, the Monk's TP is restored.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302.2,
                y: 428
            }
        },
        PilgrimsDeed: {
            name_jp: "行者の功徳",
            name_en: "Ascetic Deeds",
            details: "If the Monk uses a skill, HP is restored.",
            requires: "N/A",
            dep: {
                PilgrimsGain: 3,
                ArtOfBloodReturn: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453.2,
                y: 390
            }
        },
        ChakraZeal: {
            name_jp: "チャクラの覚醒",
            name_en: "Waking Chakra",
            details: "Increases the rate of natural recovery of status ailments and binds on the monk.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 544
            }
        },
        Healing: {
            name_jp: "ヒーリング",
            name_en: "Healing",
            details: "Heal a single target of some HP.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 125
            }
        },
        FullHealing: {
            name_jp: "フルヒーリング",
            name_en: "Full Heal",
            details: "Fully restore a target's HP.",
            requires: "Head",
            dep: {
                Healing: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302.2,
                y: 167
            }
        },
        LineHeal: {
            name_jp: "ラインヒール",
            name_en: "Line Heal",
            details: "Heal the HP of an entire row of allies.",
            requires: "Head",
            dep: {
                Healing: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.2,
                y: 247
            }
        },
        PartyHeal: {
            name_jp: "パーティヒール",
            name_en: "Party Heal",
            details: "Heals the HP of all allies.",
            requires: "Head",
            dep: {
                LineHeal: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453.2,
                y: 247
            }
        },
        Refresh: {
            name_jp: "リフレッシュ",
            name_en: "Refresh",
            details: "Restore status ailments.",
            requires: "Head",
            dep: {
                Healing: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.2,
                y: 7
            }
        },
        BindRecovery: {
            name_jp: "バインドリカバリ",
            name_en: "Unbind",
            details: "Restores binds.",
            requires: "Head",
            dep: {
                Healing: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.2,
                y: 87
            }
        },
        Resurrect: {
            name_jp: "リザレクト",
            name_en: "Resurrect",
            details: "Revives a fallen ally.",
            requires: "Head",
            dep: {
                Refresh: 2,
                BindRecovery: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453.2,
                y: 49
            }
        },
        ForceImpact: {
            name_jp: "気功 拳",
            name_en: "Kikouken",
            details: "Fist: A blunt attack that sends spirit at one enemy; has a chance to Paralyze the enemy.",
            requires: "Arms",
            dep: {
                FistMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 196
            }
        },
        BurstFist: {
            name_jp: "壊炎拳",
            name_en: "Breakfire Fist",
            details: "Fist: Randomly strike all enemies; combines blunt/flame attack.",
            requires: "Arms",
            dep: {
                FistMastery: 3,
                ChakraZeal: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 544
            }
        },
        CounterI: {
            name_jp: "カウンターI",
            name_en: "Counter",
            details: "Fist: Counterattacks with a blunt attack against enemy physical attacks.",
            requires: "Arms",
            dep: {
                FistMastery: 8
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 283
            }
        },
        CounterII: {
            name_jp: "カウンターII",
            name_en: "Retaliate",
            details: "Fist: Counterattacks with a blunt attack against enemy elemental attacks.",
            requires: "Arms",
            dep: {
                FistMastery: 8
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 370
            }
        },
        DarknessFist: {
            name_jp: "暗黒拳",
            name_en: "Darkness Fist",
            details: "Fist: A blunt attack at all enemies at the expense of sacrificing HP; has a chance to curse the enemy.",
            requires: "Arms",
            dep: {
                FistMastery: 10,
                BurstFist: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 457
            }
        },
        WalkingOverFire: {
            name_jp: "火渡りの行",
            name_en: "Fire Walk",
            details: "Reduce damage taken from damage tiles for a certain number of steps.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 10
            }
        }
    },

    Zodiac: {
        EtherMastery: {
            name_jp: "エーテルマスター",
            name_en: "Ether Mastery",
            details: "Increase damage caused by FIRE, ICE, and VOLT attacks.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        FlameMastery: {
            name_jp: "炎マスタリー",
            name_en: "Fire Mastery",
            details: "Increase damage caused by FIRE skills; required for FIRE skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 49
            }
        },
        IceMastery: {
            name_jp: "氷マスタリー",
            name_en: "Ice Mastery",
            details: "Increase damage caused by ICE skills; required for ICE skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 181
            }
        },
        ThunderMastery: {
            name_jp: "雷マスタリー",
            name_en: "Volt Mastery",
            details: "Increase damage caused by VOLT skills; required for VOLT skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 317
            }
        },
        SingularityTheorem: {
            name_jp: "特異点定理",
            name_en: "Singularity",
            details: "Increases damage if attacking an enemy's weak point, including both elemental weakness (Fire, Ice, VOLT) and physical damage weakness (Cut, Blunt, Thrust).",
            requires: "N/A",
            dep: {
                DarkEther: 5
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 302,
                y: 487
            }
        },
        ReturnEther: {
            name_jp: "リターンエーテ ル",
            name_en: "Etheric Return",
            details: "The Zodiac recovers TP when killing an enemy.",
            requires: "N/A",
            dep: {
                SingularityTheorem: 5,
                EtherConcentration: 5
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 449
            }
        },
        FlameAstrology: {
            name_jp: "炎の星術",
            name_en: "Fire Star",
            details: "FIRE: A formula that brings forth flames by use of astrology; attacks one enemy with a FIRE spell.",
            requires: "Head",
            dep: {
                FlameMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 7
            }
        },
        FlameConstellation: {
            name_jp: "炎の連星術",
            name_en: "Binary Fire",
            details: "FIRE: A formula that brings forth a great inferno by use of astrology; attacks every enemy with a FIRE spell.",
            requires: "Head",
            dep: {
                FlameMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 87
            }
        },
        FlameForesight: {
            name_jp: "炎の先見術",
            name_en: "Fire Prophecy",
            details: "FIRE: Prevents the FIRE attacks of one designated enemy and counterattack that target with a FIRE spell.",
            requires: "Head",
            dep: {
                FlameAstrology: 5,
                FlameConstellation: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 49
            }
        },
        IceAstrology: {
            name_jp: "氷の星術",
            name_en: "Ice Star",
            details: "ICE: A formula that brings forth blocks of ice by use of astrology; attacks one enemy with an ICE spell.",
            requires: "Head",
            dep: {
                IceMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 139
            }
        },
        IceConstellation: {
            name_jp: "氷の連星術",
            name_en: "Binary Ice",
            details: "ICE: A formula that brings forth a great ice spear by use of astrology; attacks every enemy with an ICE spell.",
            requires: "Head",
            dep: {
                IceMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 219
            }
        },
        IceForesight: {
            name_jp: "氷の先見術",
            name_en: "Ice Prophecy",
            details: "ICE: Prevents the ICE attacks of one designated enemy and counterattack that target with an ICE spell.",
            requires: "Head",
            dep: {
                IceAstrology: 5,
                IceConstellation: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 181
            }
        },
        ThunderAstrology: {
            name_jp: "雷の星術",
            name_en: "Volt Star",
            details: "VOLT: A formula that brings forth a lightning strike by use of astrology; attacks one enemy with a VOLT spell.",
            requires: "Head",
            dep: {
                ThunderMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 275
            }
        },
        ThunderConstellation: {
            name_jp: "雷の連星術",
            name_en: "Binary Thunder",
            details: "VOLT: A formula that brings forth a great VOLTbolt by use of astrology; attacks every enemy with a VOLT spell.",
            requires: "Head",
            dep: {
                ThunderMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 355
            }
        },
        ThunderForesight: {
            name_jp: "雷の先見術",
            name_en: "Volt Prophecy",
            details: "VOLT: Prevents the VOLT attacks of one designated enemy and counterattack that target with a VOLT spell.",
            requires: "Head",
            dep: {
                ThunderAstrology: 5,
                ThunderConstellation: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 317
            }
        },
        Meteor: {
            name_jp: "メテオ",
            name_en: "Meteor",
            details: "Causes a meteorite from the cosmos to come flying and randomly performs a powerful blunt attack at all enemies randomly.",
            requires: "Head",
            dep: {
                ReturnEther: 3,
                PlanetObservation: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 543
            }
        },
        EtherConcentration: {
            name_jp: "エーテル圧縮",
            name_en: "Etheric Charge",
            details: "Concentrate the mind and raise the damage of FIRE, ICE and VOLT attacks for the next turn.",
            requires: "Head",
            dep: {
                DarkEther: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 407
            }
        },
        DarkEther: {
            name_jp: "ダークエーテル",
            name_en: "Dark Ether",
            details: "On this turn only, the skills that a row uses do not cost TP.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 449
            }
        },
        PlanetObservation: {
            name_jp: "星体観測",
            name_en: "Horoscope",
            details: "Indicates the location of nearby F.O.E.s on the map for a certain number of steps.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 543
            }
        }
    },

    Wildling: {
        BeastHeart: {
            name_jp: "獣の心",
            name_en: "Beast Soul",
            details: "Increases Max HP, ATK, and DEF of summoned beasts.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        AnimalFriendship: {
            name_jp: "獣たちの友情",
            name_en: "Nature Pact",
            details: "On dying, there is a chance to take the place of the summoned beast.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 212
            }
        },
        BeastKingMastery: {
            name_jp: "獣王マスタリー",
            name_en: "Wild Mastery",
            details: "Increase the chance for summoned beasts to inflict status ailments; required to summon beasts.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 212
            }
        },
        BeastReturn: {
            name_jp: "ビースト帰還",
            name_en: "Dismiss Beast",
            details: "Return a summoned beast and recover the TP that was consumed during the summoning.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 362
            }
        },
        BeastRoar: {
            name_jp: "ビー ストロア",
            name_en: "Beast Roar",
            details: "The sound of a loud roar lowers the ATK of all enemies.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 515
            }
        },
        BeastsOath: {
            name_jp: "獣の警戒",
            name_en: "Alertness",
            details: "Decreases the chance of enemy preemptive attacks.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 5,
            coords: {
                x: 151,
                y: 515
            }
        },
        Drumming: {
            name_jp: "ドラミング",
            name_en: "Primal Drums",
            details: "The sound of loud drumming lowers the DEF of all enemies.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 515
            }
        },
        SacrificeI: {
            name_jp: "捨身の心得I",
            name_en: "Sacrifice I",
            details: "Have a chance that the summoned beast will take physical damage in place of allies in the same row.",
            requires: "N/A",
            dep: {
                AnimalFriendship: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 83
            }
        },
        SacrificeII: {
            name_jp: "捨身の心得II",
            name_en: "Sacrifice II",
            details: "Have a chance that the summoned beast will take elemental damage in place of allies in the same row.",
            requires: "N/A",
            dep: {
                AnimalFriendship: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 341
            }
        },
        SummonBird: {
            name_jp: "大鳥招来",
            name_en: "Call Bird",
            details: "Summons a large bird that does a Thrust attack and can Bind Head to one enemy.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 59
            }
        },
        SummonElephant: {
            name_jp: "巨象招来",
            name_en: "Call Elephant",
            details: "Summons an elephant that attacks all enemies and can cause confusion.  After the initial attack, it will only attack a single enemy.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 7,
                SummonVenomfly: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 313
            }
        },
        SummonHypnoOwl: {
            name_jp: "催眠梟招来",
            name_en: "Call Owl",
            details: "Summons an owl that has a chance to cause every enemy to fall asleep.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 10
            }
        },
        SummonLionKing: {
            name_jp: "獅子王招来",
            name_en: "Call Lion",
            details: "Summons a sleeping lion king that paralyzes or petrifies all enemies when it wakes up.  Deals greater damage to enemies that already have a status ailment.  After its attack, it goes back to sleep.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 10,
                SacrificeI: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 83
            }
        },
        SummonMole: {
            name_jp: "土竜招来",
            name_en: "Call Mole",
            details: "Summons a mole that does a Slash attack and can Bind Legs to one enemy.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 160
            }
        },
        SummonRagingBull: {
            name_jp: "暴れ野牛招来",
            name_en: "Call Cow",
            details: "Summons a bull that does a Thrust attack on random enemies and can cause paralysis.  After the initial attack, it will only attack a single enemy.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 7,
                SummonHypnoOwl: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 111
            }
        },
        SummonSlime: {
            name_jp: "不定型生物招来",
            name_en: "Call Ooze",
            details: "Summons a slime that does a Slash attack and can inflict decay on one enemy.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 6,
                AnimalFriendship: 10
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 212
            }
        },
        SummonSnake: {
            name_jp: "大蛇招来",
            name_en: "Call Snake",
            details: "Summons a large snake that does a Hit attack and can Bind Arms to one enemy.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 261
            }
        },
        SummonTiger: {
            name_jp: "剣虎招来",
            name_en: "Call Tiger",
            details: "Summons the saber-toothed tiger that tries to instantly kill all enemies.  After that, it counters any attacks that it receives.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 10,
                SacrificeII: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 341
            }
        },
        SummonVenomfly: {
            name_jp: "毒アゲハ招来",
            name_en: "Call Insect",
            details: "Summons a venomfly which does a Slash attack and has a chance to inflict one enemy with poison.  Check the Help/About section to see detailed explanations regarding all summoned beasts.",
            requires: "Arms",
            dep: {
                BeastKingMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 414
            }
        }
    },

    Arbalist: {
        GiantKill: {
            name_jp: "ジャイアントキル",
            name_en: "Giant Kill",
            details: "Increase damage against enemies whose HP is greater than 200% of the Arbalist's HP.  (e.g. If Arbalist has 100 HP, then enemy must have more than 200 HP).",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        CrossbowMastery: {
            name_jp: "弩マスタリー",
            name_en: "Bolt Mastery",
            details: "Improves physical damage with Bolts; required for Bolt skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 151,
                y: 276
            }
        },
        SurefireConcentration: {
            name_jp: "正射必中",
            name_en: "Proper Form",
            details: "Increase accuracy of skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 5,
            coords: {
                x: 151,
                y: 15
            }
        },
        NightVision: {
            name_jp: "ナイトビジョン",
            name_en: "Night Vision",
            details: "Increase critical hit rate during the night.",
            requires: "N/A",
            dep: {
                IlluminatingShot: 3,
                SmokeBomb: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453.2,
                y: 499
            }
        },
        Extend: {
            name_jp: "エクステンド",
            name_en: "Extend",
            details: "When a monster is killed, the Arbalist restores some HP.",
            requires: "N/A",
            dep: {
                SurefireConcentration: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 15
            }
        },
        DoubleAction: {
            name_jp: "ダブルアクショ ン",
            name_en: "Double Action",
            details: "When using a skill that targets a single enemy, there is a chance to perform the skill a second time.",
            requires: "N/A",
            dep: {
                RearMortarBombardment: 4,
                HighSpeedAPBullet: 4
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 339
            }
        },
        HeavyShot: {
            name_jp: "ヘビーショット",
            name_en: "Heavy Shot",
            details: "Bolt: A thrust attack at one enemy by using a projectile that is heavier than normal.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 212.8
            }
        },
        RearMortarBombardment: {
            name_jp: "前陣迫撃砲術",
            name_en: "Front Mortar",
            details: "Bolt: Damage is increased when used from the front row; a thrust attack at one enemy with a projectile for short distance usage.",
            requires: "Arms",
            dep: {
                HeavyShot: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 212.8
            }
        },
        SnipeI: {
            name_jp: "スナイプⅠ",
            name_en: "Snipe",
            details: "Bolt: Prepares weapon and waits; at the end of the turn, a thrust attack that snipes enemies that are afflicted by status abnormalities.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 15
            }
        },
        SnipeII: {
            name_jp: "スナイプⅡ",
            name_en: "Sharpshooter",
            details: "Bolt: Prepares weapon and waits; at the end of the turn, a thrust attack that snipes enemies that have any bind conditions.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 102
            }
        },
        RandomShot: {
            name_jp: "ランダムショット",
            name_en: "Strafe",
            details: "Bolt: Fires projectiles in succession; thrust attack at all enemies randomly.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 189
            }
        },
        FireBarrage: {
            name_jp: "ファイアバラージ",
            name_en: "Fire Barrage",
            details: "Bolt: Fires a shell that is mixed with a special gunpowder; attacks all enemies; combines Thrust/FIRE attack.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 276
            }
        },
        FreezeBarrage: {
            name_jp: "フリーズバラージ",
            name_en: "Ice Barrage",
            details: "Bolt: Fires a shell that is mixed with a special gunpowder; attacks every enemy; combines Thrust/ICE attack.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 363
            }
        },
        ThunderBarrage: {
            name_jp: "サンダーバラージ",
            name_en: "Volt Barrage",
            details: "Bolt: Fires a shell that is mixed with a special gunpowder; attacks every enemy; combines Thrust/THUNDER attack.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 450
            }
        },
        HighSpeedAPBullet: {
            name_jp: "高速徹甲弾",
            name_en: "Armor Piercer",
            details: "Bolt: A thrust attack at one enemy with an armor piercing bullet; ignores the enhancements of the enemy.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 339
            }
        },
        Rainfall: {
            name_jp: "レインフォール",
            name_en: "Cloudbuster",
            details: "Bolt: Fires projectiles up in the sky; on the next turn, a thrust attack descends upon all enemies.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 10
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 537
            }
        },
        IlluminatingShot: {
            name_jp: "照 明弾",
            name_en: "Pop Flares",
            details: "For 3 turns, the accuracy of all allies increases.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 302.2,
                y: 457
            }
        },
        SmokeBomb: {
            name_jp: "発煙弾",
            name_en: "Smoke Grenade",
            details: "Drop a smoke bomb that has a chance to blind all enemies.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 302.2,
                y: 537
            }
        },
        Ambush: {
            name_jp: "アンブッシュ",
            name_en: "Ambush",
            details: "The chance of getting a preemptive attack on enemies increases for a certain number of steps.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 102
            }
        }
    },

    Farmer: {
        NaturesBlessing: {
            name_jp: "大自然の恵み",
            name_en: "Earth's Bounty",
            details: "As long as the Farmer is alive at the end of battle, all allies gain bonus EXP.  This effect stacks with other Farmers that have this skill and are in the active party.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        Braveheart: {
            name_jp: "ブレイブハート",
            name_en: "Brave Heart",
            details: "Every turn that the Farmer's HP is full, TP is recovered.",
            requires: "N/A",
            dep: {
                MomentOfInjury: 5
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 170
            }
        },
        BravingRain: {
            name_jp: "アメニモマケズ",
            name_en: "Rain or Shine",
            details: "For a certain number of steps, all allies become immune to damage and mud tiles.",
            requires: "N/A",
            dep: {
                DetectionMaster: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 412
            }
        },
        CampMaster: {
            name_jp: "キャンプマス ター",
            name_en: "Camp Mastery",
            details: "HP and TP healed from Tents is increased, dead party members and petrified party members are also restored.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 492
            }
        },
        CPR: {
            name_jp: "応急蘇生",
            name_en: "Slap Awake",
            details: "Revive a person outside of battle.",
            requires: "N/A",
            dep: {
                CampMaster: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 534
            }
        },
        CryToCeaseAttack: {
            name_jp: "鳴かずば討たれず",
            name_en: "Play Possum",
            details: "For 3 turns, the Farmer is less likely to be targeted by enemies.",
            requires: "Head",
            dep: {
                Lullaby: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 10
            }
        },
        CursedEyeOfWeak: {
            name_jp: "弱り目に祟り目",
            name_en: "Rotten Egg",
            details: "During 4 turns, all enemies have their ATK decreased. Those enemies already afflicted by a status condition have a greater ATK reduction.",
            requires: "Arms",
            dep: {
                Lullaby: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 170
            }
        },
        DetectionMaster: {
            name_jp: "探 知マスター",
            name_en: "Keen Eye",
            details: "For a certain number of steps, the location of every F.O.E. is displayed on the map.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 412
            }
        },
        DismantleMastery: {
            name_jp: "解体マスター",
            name_en: "Waste Not",
            details: "Increases the drop rate of items acquired from battle.  This effect stacks with other Farmers that have this skill and are in the active party.",
            requires: "N/A",
            dep: {
                CampMaster: 3
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 454
            }
        },
        ForagingMastery: {
            name_jp: "収穫マスター",
            name_en: "Harvestry",
            details: "Increases the number of times the Farmer can use Take, Chop and Mine gathering spots, independently from Take, Chop and Mine.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 5,
            coords: {
                x: 302,
                y: 332
            }
        },
        Loitering: {
            name_jp: "みちくさ",
            name_en: "Horseplay",
            details: "Lets 1 hour pass by.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 1,
            coords: {
                x: 0,
                y: 251
            }
        },
        Lullaby: {
            name_jp: "子守唄",
            name_en: "Lullaby",
            details: "Farmer falls asleep, but also has a chance to put each enemy to sleep.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 90
            }
        },
        MomentOfInjury: {
            name_jp: "怪我の功名",
            name_en: "Sympathy Pain",
            details: "If the Farmer is afflicted by a negative status effect, there is a chance to transfer them to an enemy.",
            requires: "Arms",
            dep: {
                CursedEyeOfWeak: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 170
            }
        },
        MysterySeed: {
            name_jp: "不思議な種",
            name_en: "Strange Seeds",
            details: "At the end of a turn, all enemies will be afflicted by random binds.",
            requires: "Arms",
            dep: {
                Lullaby: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 90
            }
        },
        ReturnMaster: {
            name_jp: "帰宅マスター",
            name_en: "To Market",
            details: "Teleports the party out of the dungeon and back to town.  Same effect as a warp wire.",
            requires: "N/A",
            dep: {
                DetectionMaster: 1
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 151,
                y: 332
            }
        },
        SafeWalking: {
            name_jp: "安全歩行",
            name_en: "Safe Stroll",
            details: "For a certain number of steps, the encounter rate with enemies becomes zero.",
            requires: "N/A",
            dep: {
                DetectionMaster: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 492
            }
        },
        SplitSpirit: {
            name_jp: "五分の魂",
            name_en: "Persistence",
            details: "Once per battle, there's a chance that the Farmer is automatically revived if dead.",
            requires: "N/A",
            dep: {
                CryToCeaseAttack: 5,
                MysterySeed: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 52
            }
        },
        TwoCropsAYear: {
            name_jp: "二毛作",
            name_en: "Double Crop",
            details: "Restores the Farmer's ability to use Take, Chop and Mine spots.",
            requires: "N/A",
            dep: {
                ForagingMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 374
            }
        },
        WildSmell: {
            name_jp: "野生の嗅覚",
            name_en: "Keen Nose",
            details: "Increase the chance of acquiring a rare item from a take, chop or mine spot.  This effect stacks with other Farmers that have this skill and are in the active party.",
            requires: "N/A",
            dep: {
                ForagingMastery: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 294
            }
        }
    },

    Shogun: {
        DualWield: {
            name_jp: "弐の太刀",
            name_en: "Second Sword",
            details: "Allows equipping of two weapons and increases damage when attacking with two weapons.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        KatanaMastery: {
            name_jp: "刀マスタリー",
            name_en: "Katana Mastery",
            details: "Improves physical damage with Katanas; required for Katana skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 443.8
            }
        },
        Endure: {
            name_jp: "食いしばり",
            name_en: "Endure",
            details: "Has a chance of surviving death with 1 HP once per battle.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 256
            }
        },
        BloodstainedSpear: {
            name_jp: "血染めの朱槍",
            name_en: "Bloody Lance",
            details: "Increases the ATK of the Shogun whenever an ally or enemy is defeated in battle.",
            requires: "N/A",
            dep: {
                Endure: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 336
            }
        },
        RestoreWill: {
            name_jp: "士気回復",
            name_en: "Morale Boost",
            details: "If the Shogun is revived during battle, all allies have their HP restored.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 148
            }
        },
        SuicideAssistant: {
            name_jp: "介錯",
            name_en: "Kaishaku",
            details: "When allies or enemies are below a certain amount of HP, there is a chance to instantly kill them.",
            requires: "Arms",
            dep: {
                RestoreWill: 1,
                Endure: 1
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 148
            }
        },
        HiltSmash: {
            name_jp: "柄落 し",
            name_en: "Hilt Strike",
            details: "Katana: A blunt attack that strikes one enemy with the hilt; has a chance to stun the enemy.",
            requires: "Arms",
            dep: {
                KatanaMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 363.8
            }
        },
        MorningStar: {
            name_jp: "明星",
            name_en: "Myoujou",
            details: "Katana: A cut attack that randomly strikes out at every enemy; attack power increases during the day.",
            requires: "Arms",
            dep: {
                KatanaMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 443.8
            }
        },
        Catastrophe: {
            name_jp: "禍時",
            name_en: "Magatoki",
            details: "Katana: A cut attack that randomly strikes out at every enemy; attack power increases during the night.",
            requires: "Arms",
            dep: {
                KatanaMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 523.8
            }
        },
        OlympicSword: {
            name_jp: "五輪の剣",
            name_en: "5-Ring Sword",
            details: "Katana: A cut attack that randomly strikes out at every enemy; the maximum number of strikes doubles if two weapons are equipped.",
            requires: "Arms",
            dep: {
                KatanaMastery: 10,
                GreatMilitarist: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 256
            }
        },
        SpiritualUnification: {
            name_jp: "精神統一",
            name_en: "Unified Spirit",
            details: "For three turns, the Shogun become immune to binds.",
            requires: "Head",
            dep: {
                Endure: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 444
            }
        },
        GreatMilitarist: {
            name_jp: "大武辺者",
            name_en: "Daifuhensha",
            details: "For three turns, ATK and DEF is raised and the and the chance that enemies attack the Shogun increases.",
            requires: "Head",
            dep: {
                Endure: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 256
            }
        },
        VanguardsPrestige: {
            name_jp: "先陣の名誉",
            name_en: "Fore Honor",
            details: "Assigns someone to be the vanguard for 3 turns, increasing their ATK, lowering their DEF, and lets them act first.",
            requires: "Head",
            dep: {
                RestoreWill: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 40
            }
        },
        RearGuardsHonor: {
            name_jp: "殿軍の誉れ",
            name_en: "Rear Dignity",
            details: "Assigns someone to be the rear guard for 3 turns, increasing their DEF, lowering their ATK, and having them act last.",
            requires: "Head",
            dep: {
                RestoreWill: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 40
            }
        },
        AssumeFormation: {
            name_jp: "野伏せの陣立",
            name_en: "Ambush Stance",
            details: "Command a row assume battle formation, causing them to counter enemy attacks that target that row.",
            requires: "Arms",
            dep: {
                VanguardsPrestige: 3,
                RearGuardsHonor: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 40
            }
        },
        Ikkitousen: {
            name_jp: "一騎当千",
            name_en: "Warrior Might",
            details: "While disregarding defense completely, chase the attacks of every ally.",
            requires: "Legs",
            dep: {
                SpiritualUnification: 3,
                BloodstainedSpear: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 444
            }
        },
        SimultaneousFiring: {
            name_jp: "一斉射撃",
            name_en: "Fusillade",
            details: "Commands everyone with a gun or a crossbow to fire at one enemy.",
            requires: "Arms",
            dep: {
                RestoreWill: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 148
            }
        },
        RagingDragonFormation: {
            name_jp: "乱れ竜の陣",
            name_en: "Blitz Command",
            details: "Commands every ally to strike one enemy simultaneously with their equipped weapon.",
            requires: "Arms",
            dep: {
                SimultaneousFiring: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 148
            }
        },
        RetreatToWin: {
            name_jp: "逃げるが勝ち",
            name_en: "Retreat",
            details: "Causes everyone to try and escape.  Escaping chance increases with higher levels of the ability.",
            requires: "Legs",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 40
            }
        }
    },

    Yggdroid: {
        ReflectiveEnergy: {
            name_jp: "省エネ",
            name_en: "Sleep Mode",
            details: "TP is restored when inflicted with Binds.  The more binds, the more TP is restored.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        DataAnalysis: {
            name_jp: "データ解析",
            name_en: "Data Mining",
            details: "ATK and critical rate is increased for normal attacks.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 206
            }
        },
        DarkVision: {
            name_jp: "暗視",
            name_en: "Infravision",
            details: "Accuracy and evasion is increased during the night.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 110.1
            }
        },
        AntibodyIncubation: {
            name_jp: "抗体培養",
            name_en: "Virus Scanner",
            details: "Increases status ailment resistance.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 0,
                y: 14
            }
        },
        Overheat: {
            name_jp: "オーバーヒート",
            name_en: "Overheat",
            details: "Increases ATK, but in exchange, HP will be consumed each turn.  Since this skill is passive, it cannot be turned off.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 377
            }
        },
        ElectromagneticBarrier: {
            name_jp: "電磁バリア",
            name_en: "EM Barrier",
            details: "When being attacked, there is a chance that you may paralyze the enemy and counterattack THUNDER elemental attacks.",
            requires: "N/A",
            dep: {
                Overheat: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 377
            }
        },
        RedBot: {
            name_jp: "レッドボット",
            name_en: "Red Bot",
            details: "Deploys a fire bot in an empty space that chases the FIRE attacks of all allies.",
            requires: "Head",
            dep: {
                DataAnalysis: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 262
            }
        },
        BlueBot: {
            name_jp: "ブルーボット",
            name_en: "Blue Bot",
            details: "Deploys an ice bot in an empty space that chases the ICE attacks of all allies.",
            requires: "Head",
            dep: {
                DataAnalysis: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 262
            }
        },
        YellowBot: {
            name_jp: "イエロボット",
            name_en: "Yellow Bot",
            details: "Deploys a thunder bot in an empty space that chases the THUNDER attacks of all allies.",
            requires: "Head",
            dep: {
                DataAnalysis: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 262
            }
        },
        Resupply: {
            name_jp: "補給",
            name_en: "Resupply",
            details: "Supplies energy to bots and recovers the HP of every bot.",
            requires: "Head",
            dep: {
                DataAnalysis: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 150
            }
        },
        CoordinatedAttack: {
            name_jp: "一斉攻撃",
            name_en: "All Out",
            details: "Simultaneous attack to one enemy with deployed bots and the Yggdroid.",
            requires: "Head",
            dep: {
                DataAnalysis: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 49
            }
        },
        Reflector: {
            name_jp: "リフレクター",
            name_en: "Reflector",
            details: "If there are bots deployed, prevent attacks of the same attribute and counterattack with that attribute.",
            requires: "Head",
            dep: {
                Resupply: 3,
                CoordinatedAttack: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 98
            }
        },
        Shoot: {
            name_jp: "シュート",
            name_en: "Shoot",
            details: "Attacks one enemy with attributes of deployed bots.  The number of bots deployed and their types determines the amount of damage done.  Having all three types of bots deployed maximizes the damage.  All bots are destroyed after using this skill.  Only damage done by 3 bots, one of each type, is shown below.  For the complete damage table, see the table in the Help/About section.",
            requires: "Head",
            dep: {
                Resupply: 5,
                CoordinatedAttack: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 98
            }
        },
        PartsRecovery: {
            name_jp: "パーツ回収",
            name_en: "Defrag",
            details: "Recover all parts, removing binds.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 492
            }
        },
        Purge: {
            name_jp: "パージ",
            name_en: "Core Dump",
            details: "Releases all parts and adds every bind condition.",
            requires: "N/A",
            dep: {
                PartsRecovery: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 377
            }
        },
        RocketPunch: {
            name_jp: "ロケットパンチ",
            name_en: "Rocket Punch",
            details: "Fires both arms causing two blunt attacks towards one enemy; the Yggdroid's arm is bound after use.",
            requires: "Arms",
            dep: {
                PartsRecovery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 548
            }
        },
        RocketHeadbutt: {
            name_jp: "ロケット頭突き",
            name_en: "Rocket Headbutt",
            details: "Fires head causing thrust attacks at every enemy; the Yggdroid's head is bound after use.",
            requires: "Head",
            dep: {
                PartsRecovery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 548
            }
        },
        RocketJump: {
            name_jp: "ロケットジャンプ",
            name_en: "Rocket Jump",
            details: "For one turn only, all attacks directed at the Yggdroid will miss; the Yggdroid's legs are bound afterwards.",
            requires: "Legs",
            dep: {
                PartsRecovery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 548
            }
        },
        HPCannon: {
            name_jp: "HP砲",
            name_en: "HP Cannon",
            details: "Non-elemental attack towards one enemy; only usable when the Yggdroid has every bind condition; the less HP the Yggdroid has, the greater the power of this skill.",
            requires: "N/A",
            dep: {
                Purge: 5,
                Overheat: 10
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 377
            }
        }
    }
};
