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
                DefenseOrder: 1
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
                AttackOrder: 1
            },
            active: TRUE,
            max: 10,
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
                AttackOrder: 1
            },
            active: TRUE,
            max: 10,
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
                AttackOrder: 1
            },
            active: TRUE,
            max: 10,
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
                AttackOrder: 3
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
                AttackOrder: 5,
                DefenseOrder: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 251
            }
        },
        FreezeArms: {
            name_jp: "予 防の号令",
            name_en: "Freeze Arms",
            details: "Enchant allies' weapon with ice and increase ice damage dealt for three turns.",
            requires: "Head",
            dep: {
                DefenseOrder: 3
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
            name_en: "Shock Arms",
            details: "Enchant allies' weapon with volt and increase volt damage dealt for three turns.",
            requires: "Head",
            dep: {
                DefenseOrder: 5
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
                NobilityProof: 1
            },
            active: TRUE,
            max: 5,
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
                NobilityProof: 3
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
            details: "The specified ally will act first this turn.",
            requires: "Head",
            dep: {
                NobilityProof: 5
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
            max: 5,
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
            max: 5,
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
            name_en: "Bind Cut",
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
            max: 10,
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
            max: 10,
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
            max: 5,
            coords: {
                x: 151,
                y: 52
            }
        },
        Rhongomyniad: {
            name_jp: "パリィ",
            name_en: "Rhongomyniad",
            details: "Spear/Shield: Bash with your shield then thrust and slash with your spear. Deals an instance of Strike damage, then Pierce damage, then Slash damage.",
            requires: "N/A",
            dep: {
                Taunt: 5
            },
            active: FALSE,
            max: 10,
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
            max: 10,
            coords: {
                x: 453,
                y: 14
            }
        },
        ExploitWeakness: {
            name_jp: "ラインガード",
            name_en: "Exploit Weakness",
            details: "A litany that encourages allies to expose the enemy's weakness. Increases damage dealt to any enemy weakness for 3 turns.",
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
            max: 5,
            coords: {
                x: 151,
                y: 304
            }
        },
        ShrugOff: {
            name_jp: "フリーズガード",
            name_en: "ShrugOff",
            details: "Fixed chance to heal yourself if you fail to parry an attack that you are the specific target of.",
            requires: "Arms",
            dep: {
                ShieldMastery: 5
            },
            active: TRUE,
            max: 5,
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
            max: 10,
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
            max: 10,
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
            max: 5,
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
            max: 5,
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
            details: "Replenish TP if you chase or kill an enemy.",
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
        Swashbuckling: {
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
        DrunkenBrawler: {
            name_jp: "リミットブース ト",
            name_en: "DrunkenBrawler",
            details: "Rapier: Increase evasion and fight with your rapier and fists.",
            requires: "Rapier",
            dep: {
                LadyLuck: 3,
                EagleEye: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 190.6
            }
        },
        EagleEye: {
            name_jp: "インザダーク",
            name_en: "Eagle Eye",
            details: "Lowers one enemy's physical defense for three turns.",
            requires: "Arms",
            dep: {
                RapierMastery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 28
            }
        },
        QuickDraw: {
            name_jp: "チェイスセーバー",
            name_en: "Quick Draw",
            details: "Rapier/Gun: Random pierce attacks to all enemies, decreasing slash resistance.",
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
        RapidFire: {
            name_jp: "チェイスブロー",
            name_en: "Rapid Fire",
            details: "Gun: A piercing attack that fires 3 bullets, decreasing pierce resistance.",
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
       ChaseFlame: {
            name_jp: "チェイススラスト",
            name_en: "Chase Flame",
            details: "Rapier/Gun: Perform a fire follow-up  to an ally's attack.",
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
        ChaseIce: {
            name_jp: "ハンギング",
            name_en: "Chase Ice",
            details: "Rapier/Gun: Perform an ice follow-up  to an ally's attack.",
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
        ChaseVolt: {
            name_jp: "ク イックドロー",
            name_en: "Chase Volt",
            details: "Rapier/Gun: Perform a volt follow-up  to an ally's attack.",
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
        LightsOut: {
            name_jp: "チェイスフレイム",
            name_en: "Lights Out",
            details: "Rapier: A pierce attack that may blind the enemy.",
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
        Hanging: {
            name_jp: "チェイスアイス",
            name_en: "Hanging",
            details: "Rapier/Gun: A pierce attack that may bind the enemy's head.",
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
       ChaseWeapon: {
            name_jp: "チェイスサンダー",
            name_en: "Chase Weapon",
            details: "Perform a follow-up to an ally's attack with current weapon's attritutes.",
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
       LimitBoost: {
            name_jp: "ラピッドファイア",
            name_en: "Limit Boost",
            details: "The limit gauge will increase faster.",
            requires: "Arms",
            dep: {
                GunMastery: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 302,
                y: 516
            }
        },
        CheersMatey: {
            name_jp: "ミリオンスラスト",
            name_en: "Cheers, Matey!",
            details: "When receiving a buff, execute a normal attack on a random enemy.",
            requires: "Arms",
            dep: {
                RapierMastery: 10,
                GunMastery: 10
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 151,
                y: 353.2
            }
        },
        Pincushion: {
            name_jp: "イーグルアイ",
            name_en: "Pincushion",
            details: "Rapier/Gun: Random pierce attacks boosted by the user's agility.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 28
            }
        },
        DoubleTap: {
            name_jp: "トラブルメイク",
            name_en: "Double Tap",
            details: "Gun: A piercing attack that hits twice, decreasing strike resistance.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 515.8
            }
        }
    },

    Ninja: {
        MysticCalm: {
            name_jp: "煙りの末",
            name_en: "Mystic Calm",
            details: "Decreases TP consumption and allows the Ninja to do full melee damage from the back row.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        Beheading: {
            name_jp: "短剣マスタリー",
            name_en: "Beheading",
            details: "Normal attacks may be fatal blows.",
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
        Katon: {
            name_jp: "潜伏",
            name_en: "Katon",
            details: "Fire Ninjutsu creates an explosion over an enemy. May bind head.",
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
        Reflexes: {
            name_jp: "軽業",
            name_en: "Reflexes",
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
        Hyouton: {
            name_jp: "首切",
            name_en: "Hyouton",
            details: "Ice Ninjutsu freezes the air under an enemy. May bind legs.",
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
        KnifeMastery: {
            name_jp: "肉弾",
            name_en: "Knife Mastery",
            details: "Prerequisite for knife skills that raises knife damage dealt.",
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
        Raiton: {
            name_jp: "影 縫",
            name_en: "Raiton",
            details: "Volt Ninjutsu conjures lightning towards an enemy. May bind arms.",
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
        Otori: {
            name_jp: "飯綱",
            name_en: "Otori",
            details: "Makes enemies target one ally for three turns.",
            requires: "Arms",
            dep: {
                DaggerMastery: 3,
                ShadowWeave: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 265
            }
        },
        NinpoSmoke: {
            name_jp: "鷹乃羽",
            name_en: "Ninpo: Smoke",
            details: "Sacrifice HP for a significant evasion boost for three turns.",
            requires: "Arms",
            dep: {
                DaggerMastery: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 373
            }
        },
        NinpoDouble: {
            name_jp: "多元抜刀",
            name_en: "Ninpo: Double",
            details: "Use half your HP and TP to create a copy of yourself in the party.",
            requires: "Arms",
            dep: {
                DaggerMastery: 10,
                FleshBullet: 3
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 302,
                y: 157
            }
        },
        SeitonTenchu: {
            name_jp: "忍 法 含針",
            name_en: "Seiton Tenchu",
            details: "Knife: Deliver heavenly punishment by slicing through ailing enemies.",
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
        NinpoNeedles: {
            name_jp: "忍法 水鏡",
            name_en: "Ninpo: Needles",
            details: "Ninjutsu: Conjure anesthetic needles that may make an enemy drowsy.",
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
        Ninjutsu: {
            name_jp: "忍法 撒菱",
            name_en: "Ninjutsu",
            details: "Prerequisite for ninja techniques. Passively increases evasion.",
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
        NinpoShuriken: {
            name_jp: "忍法 陽炎",
            name_en: "Ninpo: Shuriken",
            details: "Ninjutsu: Throw poisoned shurikens at a group of enemies.",
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
        ShadowBind: {
            name_jp: "忍法 招鳥",
            name_en: "Shadow Bind",
            details: "Knife: A surprise slash attack that may leave the enemy paralyzed.",
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
        HawkStrike: {
            name_jp: "忍法 分身",
            name_en: "Hawk Strike",
            details: "Knife: Slash attack to random enemies, damage is based on the user's agility.",
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
        Izuna: {
            name_jp: "忍法 猿飛",
            name_en: "Izuna",
            details: "Knife: Slash attack to one enemy. May cause petrification.",
            requires: "Legs",
            dep: {
                Conceal: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 464
            }
        },
        Chimatsuri: {
            name_jp: "忍法 雲隠",
            name_en: "Chimatsuri",
            details: "Ninjutsu: Torture a bound enemy with piercing techniques.",
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
        Genjutsu: {
            name_jp: "遁走の術",
            name_en: "Genjutsu",
            details: "Ninjutsu: A disorienting pierce attack that may leave the enemy confused.",
            requires: "Legs",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 213
            }
        }
    },

    Monk: {
        FormQi: {
            name_jp: "練気の法",
            name_en: "Form Qi",
            details: "A passive that enhances healing skills and lowers the monk's presence.",
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
        AsceticDeeds: {
            name_jp: "行者の利益",
            name_en: "Ascetic Deeds",
            details: "Recover HP each time you use a skill in battle.",
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
        FullCleansing: {
            name_jp: "血返しの法",
            name_en: "Full Cleansing",
            details: "Heals status effects and binds on allies. Range increases with level.",
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
        BloodReturn: {
            name_jp: "行者の功徳",
            name_en: "Blood Return",
            details: "Sacrifice health to bless the party with TP.",
            requires: "N/A",
            dep: {
                PilgrimsGain: 3,
                ArtOfBloodReturn: 3
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453.2,
                y: 390
            }
        },
        Sanctify: {
            name_jp: "チャクラの覚醒",
            name_en: "Sanctify",
            details: "Purify the battlefield, raising the elemental resistance of all characters for 9 turns.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 5,
            coords: {
                x: 302,
                y: 544
            }
        },
        Kikouken: {
            name_jp: "ヒーリング",
            name_en: "Kikouken",
            details: "Fist: Perform quick jabs at all enemies' weak points. May stun.",
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
        Healing: {
            name_jp: "フルヒーリング",
            name_en: "Healing",
            details: "Healing qi will recover one ally's HP.",
            requires: "Head",
            dep: {
                Healing: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.2,
                y: 167
            }
        },
        PartyHeal: {
            name_jp: "ラインヒール",
            name_en: "Party Heall",
            details: "Healing qi will recover all allies' HP.",
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
        FullHeal: {
            name_jp: "パーティヒール",
            name_en: "Full Heal",
            details: "Healing qi will recover all HP for one ally.",
            requires: "Head",
            dep: {
                LineHeal: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453.2,
                y: 247
            }
        },
        Counter: {
            name_jp: "リフレッシュ",
            name_en: "Counter",
            details: "Fist: Wait patiently, then counters attacks in current row with freezing blows.",
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
        Retaliate: {
            name_jp: "バインドリカバリ",
            name_en: "Retaliate",
            details: "Fist: Wait patiently, then counters attacks in current row with electrifying qi.",
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
        MercifulHeal: {
            name_jp: "リザレクト",
            name_en: "Merciful Heal",
            details: "By instinct, heal anyone who suffers a grievous wound.",
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
       Resurrect: {
            name_jp: "気功 拳",
            name_en: "Resurrect",
            details: "Revive one ally with healing qi.",
            requires: "Arms",
            dep: {
                FistMastery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 196
            }
        },
        AuraBlast: {
            name_jp: "カウンターI",
            name_en: "Aura Blast",
            details: "Condense spiritual energy then blasts enemies, more damage from back row.",
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
        LineHeal: {
            name_jp: "カウンターII",
            name_en: "Line Heal",
            details: "Recover one row of allies' HP using healing qi.",
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
         BreakfireFist: {
            name_jp: "暗黒拳",
            name_en: "Breakfire Fist",
            details: "Fist: A strike and fire attack that hits enemies at random.",
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
            name_jp: "火渡りの行",
            name_en: "Darkness Fist",
            details: "Fist: Sacrifice HP to strike all enemies. May inflict blind.",
            requires: "N/A",
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
        Levitate: {
            name_jp: "火渡りの行",
            name_en: "Levitate",
            details: "Decreases damage from trap floors for a certain number of steps.",
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
        EthericReturn: {
            name_jp: "エーテルマスター",
            name_en: "Etheric Return",
            details: "Zodiac skill that recovers TP when using attack skills.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        Inferno: {
            name_jp: "炎マスタリー",
            name_en: "Inferno",
            details: "A fire and ice attack that splashes lava on enemies.",
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
        Cocytus: {
            name_jp: "氷マスタリー",
            name_en: "Cocytus",
            details: "An ice and volt attack that sends ice shards crashing down on random enemies.",
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
        Thor: {
            name_jp: "雷マスタリー",
            name_en: "Thor",
            details: "A volt and fire attack that blasts one enemy with heavy damage.",
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
        EtherMastery: {
            name_jp: "特異点定理",
            name_en: "Ether Mastery",
            details: "Prerequisite for elemental skills. Increases elemental damage.",
            requires: "N/A",
            dep: {
                DarkEther: 5
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 487
            }
        },
        Singularity: {
            name_jp: "リターンエーテ ル",
            name_en: "Singularity",
            details: "Damage increases when attacking an enemy's elemental weakness.",
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
        EthericCharge: {
            name_jp: "炎の星術",
            name_en: "Etheric Charge",
            details: "Concentrate to increase damage with elemental attacks.",
            requires: "Head",
            dep: {
                FlameMastery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 7
            }
        },
        DarkEther: {
            name_jp: "炎の連星術",
            name_en: "Dark Ether",
            details: "One row of allies will be able to use skills at no TP cost.",
            requires: "Head",
            dep: {
                FlameMastery: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 87
            }
        },
        Meteor: {
            name_jp: "炎の先見術",
            name_en: "Meteor",
            details: "Call down meteors to deal strike damage to random enemies.",
            requires: "Head",
            dep: {
                FlameAstrology: 5,
                FlameConstellation: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 49
            }
        },
        FireStar: {
            name_jp: "氷の星術",
            name_en: "Fire Star",
            details: "Astrological flame does fire damage to one enemy.",
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
        BinaryFire: {
            name_jp: "氷の連星術",
            name_en: "Binary Fire",
            details: "Astrology calls forth flames that do fire damage to all enemies.",
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
        Prominence: {
            name_jp: "氷の先見術",
            name_en: "Prominence",
            details: "Engulf the battlefield with a conflagration. All units are weaker to ice attacks.",
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
        IceStar: {
            name_jp: "雷の星術",
            name_en: "Ice Star",
            details: "Astrological glaciers do ice damage to one enemy.",
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
        BinaryIce: {
            name_jp: "雷の連星術",
            name_en: "Binary Ice",
            details: "Astrology calls forth an ice spear that damages all enemies with ice.",
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
        Deluge: {
            name_jp: "雷の先見術",
            name_en: "Deluge",
            details: "Invoke a raging flood over the battlefield. All units are weaker to volt attacks.",
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
          VoltStar: {
            name_jp: "エーテル圧縮",
            name_en: "Volt Star",
            details: "Astrological lightning does volt damage to one enemy.",
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
      BinaryThunder: {
            name_jp: "ダークエーテル",
            name_en: "Binary Thunder",
            details: "Astrology calls forth lightning for volt damage to all enemies.",
            requires: "Head",
            dep: {
                DarkEther: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 302,
                y: 407
            }
        },
      Tempest: {
            name_jp: "星体観測",
            name_en: "Tempest",
            details: "Conjure a turbulent thunderstorm overhead. All units are weaker to fire attacks.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 449
            }
        },
       Supernova: {
            name_jp: "星体観測",
            name_en: "Supernova",
            details: "Conjures the primordial power of the heavens to strike enemies' weaknesses.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 543
            }
        }
    },

    Wildling: {
        NaturePact: {
            name_jp: "獣の心",
            name_en: "Nature Pact",
            details: "Wildling skill that allows a beast to take a mortal blow in your place.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        WildMastery: {
            name_jp: "獣たちの友情",
            name_en: "Wild Mastery",
            details: "Prerequisite for summoning beasts. Ailment success rate of beasts rises.",
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
        BeastSoul: {
            name_jp: "獣王マスタリー",
            name_en: "Beast Soul",
            details: "Raise Max HP, ATK, and DEF of summoned beasts.",
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
        Sacrifice: {
            name_jp: "ビースト帰還",
            name_en: "Sacrifice",
            details: "A beast may take a blow instead of an ally in the same row.",
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
        SpiritFang: {
            name_jp: "ビー ストロア",
            name_en: "Spirit Fang",
            details: "Ranged attack to one enemy with equipped weapon, utilizing magical strength.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 515
            }
        },
        PrimalEnergy: {
            name_jp: "獣の警戒",
            name_en: "Primal Energy",
            details: "Relaxes enemies, lowering their resistances for three turns.",
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
        BeastRoar: {
            name_jp: "ドラミング",
            name_en: "Beast Roar",
            details: "A loud roar lowers the damage of all enemies for 3 turns.",
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
        PrimalDrums: {
            name_jp: "捨身の心得I",
            name_en: "Primal Drums",
            details: "Threatens enemies, lowering their defense for three turns.",
            requires: "N/A",
            dep: {
                AnimalFriendship: 3
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 83
            }
        },
        DismissBeast: {
            name_jp: "捨身の心得II",
            name_en: "Dismiss Beast",
            details: "Calls back a summoned beast. When they return, you regain the TP.",
            requires: "N/A",
            dep: {
                AnimalFriendship: 3
            },
            active: FALSE,
            max: 1,
            coords: {
                x: 453,
                y: 341
            }
        },
        CallBird: {
            name_jp: "大鳥招来",
            name_en: "Call Bird",
            details: "Summons a large bird that does a Thrust attack and can Bind Head to one enemy.",
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
        CallSnake: {
            name_jp: "巨象招来",
            name_en: "Call Snake",
            details: "Summons a great snake that deals strike damage and binds the arms.",
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
        CallMole: {
            name_jp: "催眠梟招来",
            name_en: "Call Mole",
            details: "Summons a great mole that deals slash damage and binds the legs.",
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
        CallSlime: {
            name_jp: "獅子王招来",
            name_en: "Call Slime",
            details: "Summons a viscous slime protect allies from elemental damage.",
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
        CallCow: {
            name_jp: "土竜招来",
            name_en: "Call Cow",
            details: "Summons a wild, violent cow dealing random pierce damage and paralysis.",
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
        Call Owl: {
            name_jp: "暴れ野牛招来",
            name_en: "Call Owl",
            details: "Summons a beguiling owl that may put all enemies to sleep.",
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
        CallPasaran: {
            name_jp: "不定型生物招来",
            name_en: "Call Pasaran",
            details: "Summons an angry pasaran. Explosion damage will confuse all enemies. ",
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
        CallTiger: {
            name_jp: "大蛇招来",
            name_en: "Call Tiger",
            details: "Summons a sabretooth tiger. Glare attacks will defeat all enemies. ",
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
        CallLion: {
            name_jp: "剣虎招来",
            name_en: "Call Lion",
            details: "Summons a majestic lion. Demands enemies' attention with its presence.  ",
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
        CallOoze: {
            name_jp: "毒アゲハ招来",
            name_en: "Call Ooze",
            details: "Summons a swamp ooze protect allies from physical damage.",
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
       BoltMastery: {
            name_jp: "弩マスタリー",
            name_en: "Bolt Mastery",
            details: "Revive once when at death's door to increase attack and decrease defense.",
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
       AdrenalineRush: {
            name_jp: "正射必中",
            name_en: "Adrenaline Rush",
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
        MultiShot: {
            name_jp: "エクステンド",
            name_en: "Multi-Shot",
            details: "When using skills targeting one enemy, number of hits may rise.",
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
        ProperForm: {
            name_jp: "ダブルアクショ ン",
            name_en: "Proper Form",
            details: "Employ especially careful aim, increasing all skills' accuracy.",
            requires: "N/A",
            dep: {
                RearMortarBombardment: 4,
                HighSpeedAPBullet: 4
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 339
            }
        },
        SagittariusArrow: {
            name_jp: "ヘビーショット",
            name_en: "Sagittarius Arrow",
            details: "Crossbow: Fires a quick shot imbued with the element of your weapon.",
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
        SmokeGrenade: {
            name_jp: "前陣迫撃砲術",
            name_en: "Smoke Grenade",
            details: "Detonate a smoke bomb to blind all enemies.",
            requires: "Arms",
            dep: {
                HeavyShot: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 212.8
            }
        },
        ApollosWrath: {
            name_jp: "スナイプⅠ",
            name_en: "Apollo's Wrath",
            details: "Crossbow: Summon the power of Apollo to burn enemies with ailments or binds.",
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
        HeavyShot: {
            name_jp: "スナイプⅡ",
            name_en: "Heavy Shot",
            details: "Crossbow: Heavy arrows deal pierce damage to a single enemy.",
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
        ArtemisEmbrace: {
            name_jp: "ランダムショット",
            name_en: "Artemis' Embrace",
            details: "Crossbow: Summon the power of Artemis to freeze enemies with ailments or binds.",
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
        ErosCarnage: {
            name_jp: "ファイアバラージ",
            name_en: "Eros' Carnage",
            details: "Crossbow: Summon the power of Eros to electrocute enemies with ailments or binds.",
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
        ArmorPiercer: {
            name_jp: "フリーズバラージ",
            name_en: "Armor Piercer",
            details: "Crossbow: Bolts deal pierce/almighty damage that ignores enemy enhancements.",
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
        FireBarrage: {
            name_jp: "サンダーバラージ",
            name_en: "Fire Barrage",
            details: "Crossbow: Special gunpowder deals pierce/fire damage to all enemies.",
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
        FrontMortar: {
            name_jp: "高速徹甲弾",
            name_en: "Front Mortar",
            details: "Crossbow: Pierce damage at one enemy. More effective from the front row.",
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
       IceBarrage: {
            name_jp: "レインフォール",
            name_en: "Ice Barrage",
            details: "Crossbow: Special gunpowder deals pierce/ice damage to all enemies.",
            requires: "Arms",
            dep: {
                CrossbowMastery: 10
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 537
            }
        },
        VoltBarrage: {
            name_jp: "照 明弾",
            name_en: "Volt Barrage",
            details: "Crossbow: Special gunpowder deals pierce/volt damage to all enemies.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 302.2,
                y: 457
            }
        },
        Cloudbuster: {
            name_jp: "発煙弾",
            name_en: "Cloudbuster",
            details: "Crossbow: Shoot a bolt into the sky, raining pierce damage next turn.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
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
        EarthsBounty: {
            name_jp: "大自然の恵み",
            name_en: "Earth's Bounty",
            details: "Farmer skill that increases ally EXP points and damage of farmer skills.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        DeathBlight: {
            name_jp: "ブレイブハート",
            name_en: "Death Blight",
            details: "Throw a bucket of mysterious acid at enemies, hoping for the best.",
            requires: "N/A",
            dep: {
                MomentOfInjury: 5
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 170
            }
        },
       Contagion: {
            name_jp: "アメニモマケズ",
            name_en: "Contagion",
            details: "Launch nasty sewage at enemies. Biological warfare!.",
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
        CampMastery: {
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
        Witchcraft: {
            name_jp: "応急蘇生",
            name_en: "Witchcraft",
            details: "Delve into the realms of witchcraft to learn occult magic.",
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
        KeenNose: {
            name_jp: "鳴かずば討たれず",
            name_en: "Keen Nose",
            details: "You have a higher chance of finding rare items at harvesting points.",
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
        DevilsCandle: {
            name_jp: "弱り目に祟り目",
            name_en: "Devil's Candle",
            details: "Purge the party's debuffs and heal them with occult magic.",
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
        DustDevil: {
            name_jp: "探 知マスター",
            name_en: "Dust Devil",
            details: "Kick a dust cloud towards enemies,  but maybe that wasn't a great idea.",
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
        RottenEgg: {
            name_jp: "解体マスター",
            name_en: "Rotten Egg",
            details: "Lower enemy strength for 4 turns. Status ailments increase its effect.",
            requires: "N/A",
            dep: {
                CampMaster: 3
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 454
            }
        },
        Lullaby: {
            name_jp: "収穫マスター",
            name_en: "Lullaby",
            details: "Sing a lullaby, reminiscing of dear father... before he left us.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: FALSE,
            max: 10,
            coords: {
                x: 302,
                y: 332
            }
        },
        StrangeSeeds: {
            name_jp: "みちくさ",
            name_en: "Strange Seeds",
            details: "Plant seeds that bind enemies' head, arm, or legs at the end of the turn..",
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
        Offering: {
            name_jp: "子守唄",
            name_en: "Offering",
            details: "Witchcraft: Sacrifice the user's health to heal an ally.",
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
        HarvestTime: {
            name_jp: "怪我の功名",
            name_en: "Harvest Time!",
            details: "Time to swing that scythe 'round and 'round... did I even hit anything?",
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
        Malediction: {
            name_jp: "不思議な種",
            name_en: "Malediction",
            details: "Witchcraft: Embrace the power of darkness to curse your enemies.",
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
        SafeStroll: {
            name_jp: "帰宅マスター",
            name_en: "Safe Stroll",
            details: "Eliminate enemy encounters for a limited number of steps.",
            requires: "N/A",
            dep: {
                DetectionMaster: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 332
            }
        },
        DevilsSnare: {
            name_jp: "安全歩行",
            name_en: "Devil's Snare",
            details: "Remove buffs from all enemies and blast them with occult magic.",
            requires: "N/A",
            dep: {
                DetectionMaster: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 151,
                y: 492
            }
        },
        ThornBind: {
            name_jp: "五分の魂",
            name_en: "Thorn Bind",
            details: "Summon your loyal plants to drain and bind enemies 3 ways. Maybe it'll work?",
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
       Mesmerize: {
            name_jp: "二毛作",
            name_en: "Mesmerize",
            details: "Witchcraft: Hypnotize your enemies into forgetting their misfortunes. Removes Built up Ailment/Bind Resistance",
            requires: "N/A",
            dep: {
                ForagingMastery: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 453,
                y: 374
            }
        },
        Harvestry: {
            name_jp: "野生の嗅覚",
            name_en: "Harvestry",
            details: "Gather resources at all chopping, mining and gathering points.",
            requires: "N/A",
            dep: {
                ForagingMastery: 3
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 453,
                y: 294
            }
        }
    },

    Shogun: {
        SecondSword: {
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
        UpwardSlash: {
            name_jp: "血染めの朱槍",
            name_en: "Upward Slash",
            details: "Katana: Deal slash damage then empower the next slash attack.",
            requires: "N/A",
            dep: {
                Endure: 3
            },
            active: FALSE,
            max: 5,
            coords: {
                x: 302,
                y: 336
            }
        },
        BloodyLance: {
            name_jp: "士気回復",
            name_en: "Bloody Lance",
            details: "Your attack power increases each time you deal a final blow.",
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
        MoraleBoost: {
            name_jp: "介錯",
            name_en: "Kaishaku",
            details: "Increase the morale of the allies, raising their maximum HP.",
            requires: "Arms",
            dep: {
                RestoreWill: 1,
                Endure: 1
            },
            active: FALSE,
            max: 10,
            coords: {
                x: 453,
                y: 148
            }
        },
        ChargingThrust: {
            name_jp: "柄落 し",
            name_en: "Charging Thrust",
            details: "Katana: Deal pierce damage then empower the next pierce attack.",
            requires: "Arms",
            dep: {
                KatanaMastery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 363.8
            }
        },
       HiltStrike: {
            name_jp: "明星",
            name_en: "Hilt Strike",
            details: "Katana/Sword: A single strike that uses the hilt. May stun.",
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
        MorningStar: {
            name_jp: "禍時",
            name_en: "Morning Star",
            details: "Katana/Sword: Slash all enemies. Stronger in sunlight, may blind.",
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
        TwilightHour: {
            name_jp: "五輪の剣",
            name_en: "Twilight Hour",
            details: "Katana/Sword: Slash all enemies. Stronger in moonlight, may sleep.",
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
        5RingSword: {
            name_jp: "精神統一",
            name_en: "5-Ring Sword",
            details: "Katana: Randomly slash all enemies, more hits with two swords.",
            requires: "Head",
            dep: {
                Endure: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 453,
                y: 444
            }
        },
        GreatWarrior: {
            name_jp: "大武辺者",
            name_en: "Great Warrior",
            details: "Increases attack and defense, but draws enemy attacks.",
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
        WarriorMight: {
            name_jp: "先陣の名誉",
            name_en: "Warrior Might",
            details: "To perform follow up damage to most ally attacks.",
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
        ForeHonor: {
            name_jp: "殿軍の誉れ",
            name_en: "Fore Honor",
            details: "Designate an attacker for 3 turns, receiving ATK up and acting first.",
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
        RearDignity: {
            name_jp: "野伏せの陣立",
            name_en: "Rear Dignity",
            details: "Designate a defender for 3 turns, receiving DEF up and acting last.",
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
        AmbushStance: {
            name_jp: "一騎当千",
            name_en: "Ambush Stance",
            details: "Attacks against the designated row will be countered.",
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
        Alertness: {
            name_jp: "一斉射撃",
            name_en: "Alertness",
            details: "Raises awareness to reduce the chance of being ambushed.",
            requires: "Arms",
            dep: {
                RestoreWill: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 148
            }
        },
        BlitzCommand: {
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
        SheathStrike: {
            name_jp: "逃げるが勝ち",
            name_en: "Sheath Strike",
            details: "Katana: Deal strike damage then empower the next strike attack.",
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
        SleepMode: {
            name_jp: "省エネ",
            name_en: "Sleep Mode",
            details: "TP is restored when inflicted with Binds.  The more binds, the more TP is restored.",
            requires: "N/A",
            unique: true,
            active: FALSE,
            max: 10
        },
        Overheat: {
            name_jp: "データ解析",
            name_en: "Overheat",
            details: "Gain superior attack power at the cost of HP loss each turn.",
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
        Bastion {
            name_jp: "暗視",
            name_en: "Bastion",
            details: "Grow bigger, attracting more enemy hits and resisting ailments.",
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
        AnnihilationProtocol: {
            name_jp: "抗体培養",
            name_en: "Annihilation Protocol",
            details: "In total annihilation mode, attacks are stronger while having lower HP.",
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
        Infravision: {
            name_jp: "オーバーヒート",
            name_en: "Infravision",
            details: "Aim and evasion increase at night.",
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
        DataMining: {
            name_jp: "電磁バリア",
            name_en: "Data Mining",
            details: "Critical hit rate increases. Each successful hit adds to your power.",
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
        Benben: {
            name_jp: "レッドボット",
            name_en: "Benben",
            details: "Summon a fire bot whose follow-up attacks debuff almighty resistance.",
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
        Perkins: {
            name_jp: "ブルーボット",
            name_en: "Perkins",
            details: "Summon an ice bot whose follow-up attacks debuff evasion.",
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
        Pascal: {
            name_jp: "イエロボット",
            name_en: "Pascal",
            details: "Summon a volt bot whose follow-up attacks debuff accuracy.",
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
        Fortification: {
            name_jp: "補給",
            name_en: "Fortification",
            details: "Bulk up to gain physical defense but  lowering attack power.",
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
        Reflector: {
            name_jp: "一斉攻撃",
            name_en: "Reflector",
            details: "Bots will nullify attacks of their element and counterattack.",
            requires: "Head",
            dep: {
                DataAnalysis: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 49
            }
        },
        FamilysWarmth: {
            name_jp: "リフレクター",
            name_en: "Family's Warmth",
            details: "Cover: Protect all allies from damage for one turn.",
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
        AllOut {
            name_jp: "シュート",
            name_en: "All Out",
            details: "Join forces with your family of bots for a coordinated attack.",
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
        RocketPunch: {
            name_jp: "パーツ回収",
            name_en: "Rocket Punch",
            details: "Blast arms at an enemy for strike damage. Causes arm bind to you.",
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
        RocketHead: {
            name_jp: "パージ",
            name_en: "Rocket Head",
            details: "Blast your head for pierce damage to all enemies. Causes head bind to you.",
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
        RocketJump: {
            name_jp: "ロケットパンチ",
            name_en: "Rocket Jump",
            details: "All attacks will miss you, but when the turn ends, your legs are bound.",
            requires: "Arms",
            dep: {
                PartsRecovery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 548
            }
        },
        HPCannon: {
            name_jp: "ロケット頭突き",
            name_en: "HP Cannon",
            details: "Usable only when fully bound. Deals damage based on how low your HP is.",
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
        CoreDump: {
            name_jp: "ロケットジャンプ",
            name_en: "Core Dump",
            details: "Undo all parts, entering a full bind.",
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
        Defrag: {
            name_jp: "HP砲",
            name_en: "Defrag",
            details: "Recover all parts, becoming unbound.",
            requires: "N/A",
            dep: {
                Purge: 5,
                Overheat: 10
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 151,
                y: 377
            }
        }
    }
};
