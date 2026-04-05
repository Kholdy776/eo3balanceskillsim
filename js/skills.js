const xl = 151;
const yl = 90;

var skills = {
    Default: {
        HPBoost: {
            name_jp: "HPブースト",
            name_en: "HP Up",
            details: "Increases Max HP.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
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
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: yl
            }
        },
        FirstAid: {
            name_jp: "応急手当",
            name_en: "Bandage",
            details: "Recovers an ally's HP; can only be used from the menu.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 2*yl
            }
        },
        ListenToExp: {
            name_jp: "聞きかじりの経験",
            name_en: "Combat Study",
            details: "For every level of this skill, the character gains that percent of experience from each battle while not in the active party.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 1,
            coords: {
                x: 0,
                y: 3*yl
            }
        },
        Take: {
            name_jp: "伐採",
            name_en: "Take",
            details: "Allows character to use take gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4*yl
            }
        },
        Chop: {
            name_jp: "採掘",
            name_en: "Chop",
            details: "Allows character to use chop gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5*yl
            }
        },
        Mine: {
            name_jp: "採取",
            name_en: "Mine",
            details: "Allows character to use mine gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 6*yl
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
            active: TRUE,
            max: 10
        },
        MonarchMarch: {
            name_jp: "ロイヤルベール",
            name_en: "Monarch March",
            details: "Recover the party's HP with each step by singing gallant military songs.",
            requires: "N/A",
            dep: {
                TriumphantCry: 3
			},
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 0
            }
        },
        RoyalLineage: {
            name_jp: "王者の凱歌",
            name_en: "Royal Lineage",
            details: "This royalty skill regains TP with each new enhancement received.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: yl
            }
        },
        TriumphantCry: {
            name_jp: "キングスマーチ",
            name_en: "Triumphant Cry",
            details: "All allies will recover HP if you are alive at the end of the battle.",
            requires: "N/A",
            dep: {
                RoyalLineage: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: yl
            }
        },
        Reinforce: {
            name_jp: "リインフォース",
            name_en: "Reinforce",
            details: "When casting an enhancement spell on an ally they will recover HP.",
            requires: "N/A",
            dep: {
                GuardOrder: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        NobilityProof: {
            name_jp: "王たる証",
            name_en: "Nobility Proof",
            details: "Your TP will recover when an enhancement spell's effect ends.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3*yl
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
                y: 1.5*yl
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
                y: 4.5*yl
            }
        },
        ElementalBomb: {
            name_jp: "ファイアアームズ",
            name_en: "Elemental Bomb",
            details: "Dispels an ally's Elemental Arms enchantment to deal 3 instances of damage to random enemies.",
            requires: "Arms",
            dep: {
                RegalRadiance: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        Negotiation: {
            name_jp: "フリーズアームズ",
            name_en: "Negotiation",
            details: "Dispel all enhancement spells to recover HP.",
            requires: "Arms",
            dep: {
                NobilityProof: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 3*yl
            }
        },
        Inspire: {
            name_jp: "ショックアームズ",
            name_en: "Inspire",
            details: "Dispel all stat decreases and recover TP.",
            requires: "Arms",
            dep: {
                Negotiation: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 4*yl
            }
        },
        AdNihilo: {
            name_jp: "エミットウェポン",
            name_en: "Ad Nihilo",
            details: "Dispel all enhancements on one enemy, deals non-elemental damage.",
            requires: "Head",
            dep: {
                AttackOrder: 5,
                GuardOrder: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 3*yl
            }
        },
        FireArms: {
            name_jp: "リセットウェポン",
            name_en: "Fire Arms",
            details: "Enchant allies' weapon with fire and increase fire damage dealt for three turns.",
            requires: "Head",
            dep: {
                AttackOrder: 2
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: yl
            }
        },
        FreezeArms: {
            name_jp: "予 防の号令",
            name_en: "Freeze Arms",
            details: "Enchant allies' weapon with ice and increase ice damage dealt for three turns.",
            requires: "Head",
            dep: {
                AttackOrder: 2
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        ShockArms: {
            name_jp: "覇気の号令",
            name_en: "Shock Arms",
            details: "Enchant allies' weapon with volt and increase volt damage dealt for three turns.",
            requires: "Head",
            dep: {
                AttackOrder: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        RegalRadiance: {
            name_jp: "庇 護の号令",
            name_en: "Regal Radiance",
            details: "Dispels an ally's Elemental Arms enchantments to deal damage to all enemies. May stun.",
            requires: "Head",
            dep: {
                AttackOrder: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        PreventOrder: {
            name_jp: "エクスチェンジ",
            name_en: "Prevent Order",
            details: "Allies will gain ailment and bind protection for three turns. This enhancement is consumed after a bind or ailment is negated.",
            requires: "Head",
            dep: {
                GuardOrder: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 5*yl
            }
        },
        ProtectOrder: {
            name_jp: "リニューライフ",
            name_en: "Protect Order",
            details: "For three turns, allies will gain HP when a turn ends.",
            requires: "Head",
            dep: {
                Reinforce: 5,
                PreventOrder: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4.5*yl
            }
        },
        Knighthood: {
            name_jp: "クイックオーダー",
            name_en: "Knighthood",
            details: "The specified ally will act first this turn.",
            requires: "Head",
            dep: {
                Inspire: 2
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 5*yl
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
            active: TRUE,
            max: 10
        },
        SwordMastery: {
            name_jp: "剣マスタリー",
            name_en: "Sword Mastery",
            details: "Prerequisite for sword skills that raises sword damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 1.5*yl
            }
        },
        ClubMastery: {
            name_jp: "鎚マスタリー",
            name_en: "Club Mastery",
            details: "Prerequisite for club skills that raises club damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5.5*yl
            }
        },
        Avenger: {
            name_jp: "スタンアタック",
            name_en: "Avenger",
            details: "Recover HP & TP whenever an ally is defeated.",
            requires: "N/A",
            dep: {
                BerserkerVow: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 6*yl
            }
        },
        FierceStrike: {
            name_jp: "ワイドエフェク ト",
            name_en: "Fierce Strike",
            details: "May inflict stun damage with a normal attack.",
            requires: "N/A",
            dep: {
                ClubMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 5*yl
            }
        },
        WildSwings: {
            name_jp: "アベンジャー",
            name_en: "Wild Swings",
            details: "Attack skills may cause splash damage to nearby enemies.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 2*yl
            }
        },
        IronWill: {
            name_jp: "ブレイク",
            name_en: "Iron Will",
            details: "If HP is maxed and you are in the front row, recover TP.",
            requires: "Arms",
            dep: {
                WolfHowl: 3,
				Avenger: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 5*yl
            }
        },
        BerserkerVow: {
            name_jp: "ラッシュ",
            name_en: "Berserker Vow",
            details: "Raise physical attack power of self and all enemies for 9 turns.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2.5*xl,
                y: 7*yl
            }
        },
        WolfHowl: {
            name_jp: "バインドカット",
            name_en: "Wolf Howl",
            details: "Decrease enemy defense for four turns. Stacks with status ailments.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 5*yl
            }
        },
        GrandColosseum: {
            name_jp: "ランページ",
            name_en: "Grand Colosseum",
            details: "Raise a bloody arena, allowing all fighters to focus their attacks more accurately. Raises accuracy and status infliction rate for 9 turns.",
            requires: "Arms",
            dep: {
                BerserkerVow: 5,
				WolfHowl: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 6*yl
            }
        },
        Break: {
            name_jp: "ブレイドレイヴ",
            name_en: "Break",
            details: "Sword: A slashing attack on a single enemy that lowers damage dealt.",
            requires: "Arms",
            dep: {
                SwordMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        Rush: {
            name_jp: "ク ラッシュブロー",
            name_en: "Rush",
            details: "Sword: Flank the enemy and slash them apart at random.",
            requires: "Arms",
            dep: {
                SwordMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        BindCut: {
            name_jp: "アームブレイカー",
            name_en: "Bind Cut",
            details: "Sword: A strong slash at one enemy. May inflict leg bind.",
            requires: "Arms",
            dep: {
                SwordMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
        BloodThirst: {
            name_jp: "フリーズンブロー",
            name_en: "Bloodthirst",
            details: "Sword: Wait patiently then deliver a slash. The user heals based on damage dealt.",
            requires: "Arms",
            dep: {
                SwordMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        BladeRave: {
            name_jp: "ナインスマッシュ",
            name_en: "Blade Rave",
            details: "Sword: Rapid slashes at random enemies.",
            requires: "Arms",
            dep: {
                BloodThirst: 5,
                WildSwings: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        CrushingBlow: {
            name_jp: "狂 戦士の誓い",
            name_en: "Crushing Blow",
            details: "Club: A strike attack that smashes enemy brains. May inflict confusion.",
            requires: "Head",
            dep: {
                ClubMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 7*yl
            }
        },
        ArmBreaker: {
            name_jp: "無我の境地",
            name_en: "Arm Breaker",
            details: "Club: A strike attack that smashes enemy arms. May inflict arm bind.",
            requires: "Head",
            dep: {
                ClubMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 6*yl
            }
        },
        FreezingBlow: {
            name_jp: "チャージ",
            name_en: "Freezing Blow",
            details: "Club: A strike attack that smashes enemies with an ice element.",
            requires: "Arms",
            dep: {
                ClubMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        NineSmashes: {
            name_jp: "ウルフハウル",
            name_en: "Nine Smashes",
            details: "Club: An inaccurate strike attack that wallops one enemy repeatedly.",
            requires: "Head",
            dep: {
                FreezingBlow: 5,
                WildSwings: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4*yl
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
            active: TRUE,
            max: 10
        },
        SpearMastery: {
            name_jp: "盾マスタリー",
            name_en: "Spear Mastery",
            details: "Prerequisite for spear skills that raises spear damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4*yl
            }
        },
        ShieldMastery: {
            name_jp: "槍マスタリー",
            name_en: "Shield Mastery",
            details: "Prerequisite for shield skills that raises all defenses when equipped. Decreases damage recieved from CUT/STAB/BASH/FIRE/ICE/VOLT attacks when equipped with a shield.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: yl
            }
        },
        Parry: {
            name_jp: "ガードヒール",
            name_en: "Parry",
            details: "A skill that may nullify damage received.",
            requires: "N/A",
            dep: {
                Provoke: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: yl
            }
        },
        Rhongomyniad: {
            name_jp: "パリィ",
            name_en: "Rhongomyniad",
            details: "Spear/Shield: Bash with your shield then thrust and slash with your spear. Deals an instance of Strike damage, then Pierce damage, then Slash damage.",
            requires: "N/A",
            dep: {
                SpearMastery: 7,
                ShieldMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 2.5*yl
            }
        },
        RexHasta: {
            name_jp: "マテリアルパ リィ",
            name_en: "Rex Hasta",
            details: "Spear: Debuff the enemy into taking more damage this turn.",
            requires: "N/A",
            dep: {
                Gungnir: 5,
                GáeBolg: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 3.5*yl
            }
        },
        ExploitWeakness: {
            name_jp: "ラインガード",
            name_en: "Exploit Weakness",
            details: "A litany that encourages allies to expose the enemy's weakness. Increases damage dealt to any enemy weakness for 3 turns.",
            requires: "Arms",
            dep: {
                SpearMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5.5*yl
            }
        },
        Provoke: {
            name_jp: "ファイアガード",
            name_en: "Provoke",
            details: "Shield the party by drawing all enemy attacks to you. Increases chance of being targeted for 3 turns.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 0
            }
        },
        ShrugOff: {
            name_jp: "フリーズガード",
            name_en: "ShrugOff",
            details: "Fixed chance to heal yourself if you fail to parry an attack that you are the specific target of.",
            requires: "Arms",
            dep: {
                Parry: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 2*yl
            }
        },
        GáeBolg: {
            name_jp: "ショックガード",
            name_en: "Gáe Bolg",
            details: "Spear: A fast fire + pierce attack that can instantly kill or paralyze.",
            requires: "Arms",
            dep: {
                Gradivus: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4*yl
            }
        },
        Gungnir: {
            name_jp: "ディバイドガード",
            name_en: "Gungnir",
            details: "Spear: A volt + pierce attack that never misses.",
            requires: "Arms",
            dep: {
                Gradivus: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3*yl
            }
        },
        Geirskögul: {
            name_jp: "オーバーガード",
            name_en: "Geirskögul",
            details: "Spear: An ice + slash attack that strikes all enemies, lowering attack.",
            requires: "Arms",
            dep: {
                SpearMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4.5*yl
            }
        },
        Aegis: {
            name_jp: "チェンジステップ",
            name_en: "Aegis",
            details: "Shield: Reduces elemental damage sustained by allies.",
            requires: "Legs",
            dep: {
                ShieldMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
        Hoplon: {
            name_jp: "ブリッツリッター",
            name_en: "Hoplon",
            details: "Shield: Reduces physical damage sustained by allies.",
            requires: "Legs",
            dep: {
                ShieldMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        Phalanx: {
            name_jp: "ロングストライド",
            name_en: "Phalanx",
            details: "Shield: Reduces nearly all forms of damage sustained by allies.",
            requires: "Legs",
            dep: {
                Hoplon: 5,
                Aegis: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0.5*yl
            }
        },
        Gradivus: {
            name_jp: "リバイブ",
            name_en: "Gradivus",
            details: "Spear: A vampiric piercing attack that returns life to the user.",
            requires: "N/A",
            dep: {
                SpearMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3.5*yl
            }
        },
        Bodyguard: {
            name_jp: "決 死の防壁",
            name_en: "Bodyguard",
            details: "Shield: Take damage in one ally's place for one turn.",
            requires: "Head",
            dep: {
                ShieldMastery: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        Overwatch: {
            name_jp: "挑発",
            name_en: "Overwatch",
            details: "Shield: Attacks on an ally that exceed your HP are void for 1 turn.",
            requires: "Head",
            dep: {
                Bodyguard: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 2*yl
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
                x: 2*xl,
                y: 5.5*yl
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
            active: TRUE,
            max: 10
        },
        RapierMastery: {
            name_jp: "突剣マスタリー",
            name_en: "Rapier Mastery",
            details: "Improves physical damage with Rapiers; required for Rapier skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        GunMastery: {
            name_jp: "銃マスタリー",
            name_en: "Gun Mastery",
            details: "Improves physical damage with Guns; required for Gun skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 5*yl
            }
        },
        Swashbuckling: {
            name_jp: "我流の剣術",
            name_en: "Swashbuckling",
            details: "When using a normal attack, there is a chance to strike multiple times.",
            requires: "N/A",
            dep: {
                LadyLuck: 10
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        LadyLuck: {
            name_jp: "幸運の女神",
            name_en: "Lady Luck",
            details: "Increase critical rate when using normal attacks.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 1.5*yl
            }
        },
        DrunkenBrawler: {
            name_jp: "リミットブース ト",
            name_en: "DrunkenBrawler",
            details: "Rapier: Increase evasion and fight with your rapier and fists.",
            requires: "Rapier",
            dep: {
                RapierMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5*yl
            }
        },
        EagleEye: {
            name_jp: "インザダーク",
            name_en: "Eagle Eye",
            details: "Lowers one enemy's physical defense for three turns.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 3*yl
            }
        },
        QuickDraw: {
            name_jp: "チェイスセーバー",
            name_en: "Quick Draw",
            details: "Rapier/Gun: Random pierce attacks to all enemies, decreasing slash resistance.",
            requires: "Legs",
            dep: {
                GunMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4*yl
            }
        },
        RapidFire: {
            name_jp: "チェイスブロー",
            name_en: "Rapid Fire",
            details: "Gun: A piercing attack that fires 3 bullets, decreasing pierce resistance.",
            requires: "Legs",
            dep: {
                GunMastery: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 6*yl
            }
        },
       ChaseFlame: {
            name_jp: "チェイススラスト",
            name_en: "Chase Flame",
            details: "Rapier/Gun: Perform a fire follow-up  to an ally's attack.",
            requires: "Legs",
            dep: {
                ChaseWeapon: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 2*yl
            }
        },
        ChaseIce: {
            name_jp: "ハンギング",
            name_en: "Chase Ice",
            details: "Rapier/Gun: Perform an ice follow-up  to an ally's attack.",
            requires: "Arms",
            dep: {
                ChaseWeapon: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: yl
            }
        },
        ChaseVolt: {
            name_jp: "ク イックドロー",
            name_en: "Chase Volt",
            details: "Rapier/Gun: Perform a volt follow-up  to an ally's attack.",
            requires: "Arms",
            dep: {
                ChaseWeapon: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        LightsOut: {
            name_jp: "チェイスフレイム",
            name_en: "Lights Out",
            details: "Rapier: A pierce attack that may blind the enemy.",
            requires: "Legs",
            dep: {
                RapierMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4*yl
            }
        },
        Hanging: {
            name_jp: "チェイスアイス",
            name_en: "Hanging",
            details: "Rapier/Gun: A pierce attack that may bind the enemy's head.",
            requires: "Legs",
            dep: {
                RapierMastery: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 6*yl
            }
        },
       ChaseWeapon: {
            name_jp: "チェイスサンダー",
            name_en: "Chase Weapon",
            details: "Perform a follow-up to an ally's attack with current weapon's attritutes.",
            requires: "Legs",
            dep: {
                LadyLuck: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
       LimitBoost: {
            name_jp: "ラピッドファイア",
            name_en: "Limit Boost",
            details: "The limit gauge will increase faster.",
            requires: "Arms",
            dep: {
                LadyLuck: 3,
                EagleEye: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        CheersMatey: {
            name_jp: "ミリオンスラスト",
            name_en: "Cheers, Matey!",
            details: "When receiving a buff, execute a normal attack on a random enemy.",
            requires: "Arms",
            dep: {
                LadyLuck: 5
            },
            active: TRUE,
            max: 1,
            coords: {
                x: xl,
                y: yl
            }
        },
        Pincushion: {
            name_jp: "イーグルアイ",
            name_en: "Pincushion",
            details: "Rapier/Gun: Random pierce attacks boosted by the user's agility.",
            requires: "Head",
            dep: {
                Hanging: 5,
                RapidFire: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 6*yl
            }
        },
        DoubleTap: {
            name_jp: "トラブルメイク",
            name_en: "Double Tap",
            details: "Gun: A piercing attack that hits twice, decreasing strike resistance.",
            requires: "N/A",
            dep: {
                GunMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 5*yl
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
            active: TRUE,
            max: 10
        },
        Beheading: {
            name_jp: "短剣マスタリー",
            name_en: "Beheading",
            details: "Normal attacks may be fatal blows.",
            requires: "N/A",
            dep: {
                KnifeMastery: 5,
                Epidemic: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        Katon: {
            name_jp: "潜伏",
            name_en: "Katon",
            details: "Fire Ninjutsu creates an explosion over an enemy. May bind head.",
            requires: "N/A",
            dep: {
                Ninjutsu: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 2*yl
            }
        },
        Reflexes: {
            name_jp: "軽業",
            name_en: "Reflexes",
            details: "TP is recovered when evading an attack.",
            requires: "N/A",
            dep: {
                Ninjutsu: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5*yl
            }
        },
        Hyouton: {
            name_jp: "首切",
            name_en: "Hyouton",
            details: "Ice Ninjutsu freezes the air under an enemy. May bind legs.",
            requires: "N/A",
            dep: {
                Ninjutsu: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3*yl
            }
        },
        KnifeMastery: {
            name_jp: "肉弾",
            name_en: "Knife Mastery",
            details: "Prerequisite for knife skills that raises knife damage dealt.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 2*yl
            }
        },
        Raiton: {
            name_jp: "影 縫",
            name_en: "Raiton",
            details: "Volt Ninjutsu conjures lightning towards an enemy. May bind arms.",
            requires: "Arms",
            dep: {
                KnifeMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4*yl
            }
        },
        Otori: {
            name_jp: "飯綱",
            name_en: "Otori",
            details: "Makes enemies target one ally for three turns.",
            requires: "Arms",
            dep: {
                NinpoDouble: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 6*yl
            }
        },
        Epidemic: {
            name_jp: "鷹乃羽",
            name_en: "Epidemic",
            details: "Normal attacks may inflict sleep, poison, blind, confusion, or paralysis.",
            requires: "Arms",
            dep: {
                KnifeMastery: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: yl
            }
        },
        NinpoDouble: {
            name_jp: "多元抜刀",
            name_en: "Ninpo: Double",
            details: "Use half your HP and TP to create a copy of yourself in the party.",
            requires: "Arms",
            dep: {
                Ninjutsu: 5
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 2*xl,
                y: 6*yl
            }
        },
        SeitonTenchu: {
            name_jp: "忍 法 含針",
            name_en: "Seiton Tenchu",
            details: "Knife: Deliver heavenly punishment by slicing through ailing enemies.",
            requires: "Head",
            dep: {
                ShadowBind: 5,
                Epidemic: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0.5*yl
            }
        },
        NinpoNeedles: {
            name_jp: "忍法 水鏡",
            name_en: "Ninpo: Needles",
            details: "Ninjutsu: Conjure anesthetic needles that may make an enemy drowsy.",
            requires: "Head",
            dep: {
                Hyouton: 3,
                Raiton: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 3.5*yl
            }
        },
        Ninjutsu: {
            name_jp: "忍法 撒菱",
            name_en: "Ninjutsu",
            details: "Prerequisite for ninja techniques. Passively increases evasion.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4.5*yl
            }
        },
        NinpoShuriken: {
            name_jp: "忍法 陽炎",
            name_en: "Ninpo: Shuriken",
            details: "Ninjutsu: Throw poisoned shurikens at a group of enemies.",
            requires: "Head",
            dep: {
                Ninjutsu: 4
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 5*yl
            }
        },
        ShadowBind: {
            name_jp: "忍法 招鳥",
            name_en: "Shadow Bind",
            details: "Knife: A surprise slash attack that may leave the enemy paralyzed.",
            requires: "Head",
            dep: {
                KnifeMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        HawkStrike: {
            name_jp: "忍法 分身",
            name_en: "Hawk Strike",
            details: "Knife: Slash attack to random enemies, damage is based on the user's agility.",
            requires: "Head",
            dep: {
                KnifeMastery: 10,
                Ninjutsu: 10
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 0,
                y: 4*yl
            }
        },
        Izuna: {
            name_jp: "忍法 猿飛",
            name_en: "Izuna",
            details: "Knife: Slash attack to one enemy. May cause petrification.",
            requires: "Legs",
            dep: {
                KnifeMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        Chimatsuri: {
            name_jp: "忍法 雲隠",
            name_en: "Chimatsuri",
            details: "Ninjutsu: Torture a bound enemy with piercing techniques.",
            requires: "Legs",
            dep: {
                Katon: 3,
                NinpoNeedles: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 2*yl
            }
        },
        Genjutsu: {
            name_jp: "遁走の術",
            name_en: "Genjutsu",
            details: "Ninjutsu: A disorienting pierce attack that may leave the enemy confused.",
            requires: "Legs",
            dep: {
                NinpoShuriken: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 5*yl
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
            active: TRUE,
            max: 10
        },
        FistMastery: {
            name_jp: "拳マスタリー",
            name_en: "Fist Mastery",
            details: "Increases Physical damage caused when unarmed by a percentage, and also improves the displayed base power of character that is unarmed (no weapon in 1st slot) by the skill level.  Required for fist skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 1.5*yl
            }
        },
        AsceticDeeds: {
            name_jp: "行者の利益",
            name_en: "Ascetic Deeds",
            details: "Recover HP each time you use a skill in battle.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 6*yl
            }
        },
        FullCleansing: {
            name_jp: "血返しの法",
            name_en: "Full Cleansing",
            details: "Heals status effects and binds on allies. Range increases with level.",
            requires: "N/A",
            dep: {
                Healing: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3*yl
            }
        },
        BloodReturn: {
            name_jp: "行者の功徳",
            name_en: "Blood Return",
            details: "Sacrifice health to bless the party with TP.",
            requires: "N/A",
            dep: {
                AsceticDeeds: 3,
                GroupHeal: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 5*yl
            }
        },
        Sanctify: {
            name_jp: "チャクラの覚醒",
            name_en: "Sanctify",
            details: "Purify the battlefield, raising the elemental resistance of all characters for 9 turns.",
            requires: "N/A",
            dep: {
                AsceticDeeds: 1,
                Meditation: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 7*yl
            }
        },
        Kikouken: {
            name_jp: "ヒーリング",
            name_en: "Kikouken",
            details: "Fist: Perform quick jabs at all enemies' weak points. May stun.",
            requires: "Head",
            dep: {
                FistMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        Healing: {
            name_jp: "フルヒーリング",
            name_en: "Healing",
            details: "Healing qi will recover one ally's HP.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 5*yl
            }
        },
        GroupHeal: {
            name_jp: "ラインヒール",
            name_en: "Group Heal",
            details: "Healing qi will recover all allies' HP.",
            requires: "Head",
            dep: {
                Healing: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 5*yl
            }
        },
        FullHeal: {
            name_jp: "パーティヒール",
            name_en: "Full Heal",
            details: "Healing qi will recover all HP for one ally.",
            requires: "Head",
            dep: {
                Healing: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 4*yl
            }
        },
        Counter: {
            name_jp: "リフレッシュ",
            name_en: "Counter",
            details: "Fist: Wait patiently, then counters attacks in current row with freezing blows.",
            requires: "Head",
            dep: {
                FistMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        Retaliate: {
            name_jp: "バインドリカバリ",
            name_en: "Retaliate",
            details: "Fist: Wait patiently, then counters attacks in current row with electrifying qi.",
            requires: "Head",
            dep: {
                Counter: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        MercifulHeal: {
            name_jp: "リザレクト",
            name_en: "Merciful Heal",
            details: "By instinct, heal anyone who suffers a grievous wound. (BE CAREFUL)",
            requires: "Head",
            dep: {
                Healing: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 6*yl
            }
        },
        Resurrect: {
            name_jp: "気功 拳",
            name_en: "Resurrect",
            details: "Revive one ally with healing qi.",
            requires: "Arms",
            dep: {
                FullHeal: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 4*yl
            }
        },
        AuraBlast: {
            name_jp: "カウンターI",
            name_en: "Aura Blast",
            details: "Condense spiritual energy then blasts enemies, more damage from back row.",
            requires: "Arms",
            dep: {
                Kikouken: 3,
                Healing: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4*yl
            }
        },
        Meditation: {
            name_jp: "カウンターII",
            name_en: "Meditation",
            details: "Increase attack power when bound.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 7*yl
            }
        },
        BreakfireFist: {
            name_jp: "暗黒拳",
            name_en: "Breakfire Fist",
            details: "Fist: A strike and fire attack that hits enemies at random.",
            requires: "Arms",
            dep: {
                FistMastery: 10,
                DarknessFist: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        DarknessFist: {
            name_jp: "火渡りの行",
            name_en: "Darkness Fist",
            details: "Fist: Sacrifice HP to strike all enemies. May inflict blind.",
            requires: "N/A",
            dep: {
                FistMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
        Clinch: {
            name_jp: "火渡りの行",
            name_en: "Clinch",
            details: "Bind head, arm, and legs of all enemies and self.",
            requires: "N/A",
            dep: {
                FullCleansing: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 3*yl
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
            active: TRUE,
            max: 10
        },
        Inferno: {
            name_jp: "炎マスタリー",
            name_en: "Inferno",
            details: "A fire and ice attack that splashes lava on enemies.",
            requires: "N/A",
            dep: {
                BinaryFire: 2,
                IceStar: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5.5*yl
            }
        },
        Cocytus: {
            name_jp: "氷マスタリー",
            name_en: "Cocytus",
            details: "An ice and volt attack that sends ice shards crashing down on random enemies.",
            requires: "N/A",
            dep: {
                BinaryIce: 2,
                BinaryThunder: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 5.5*yl
            }
        },
        Thor: {
            name_jp: "雷マスタリー",
            name_en: "Thor",
            details: "A volt and fire attack that blasts one enemy with heavy damage.",
            requires: "N/A",
            dep: {
                VoltStar: 5,
                FireStar: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 5.5*yl
            }
        },
        EtherMastery: {
            name_jp: "特異点定理",
            name_en: "Ether Mastery",
            details: "Prerequisite for elemental skills. Increases elemental damage.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        Singularity: {
            name_jp: "リターンエーテ ル",
            name_en: "Singularity",
            details: "Damage increases when attacking an enemy's elemental weakness.",
            requires: "N/A",
            dep: {
                EtherMastery: 5,
                DarkEther: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: yl
            }
        },
        EthericCharge: {
            name_jp: "炎の星術",
            name_en: "Etheric Charge",
            details: "Concentrate to increase damage with elemental attacks.",
            requires: "Head",
            dep: {
                DarkEther: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 0
            }
        },
        DarkEther: {
            name_jp: "炎の連星術",
            name_en: "Dark Ether",
            details: "One row of allies will be able to use skills at no TP cost.",
            requires: "Head",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 0.5*yl
            }
        },
        Meteor: {
            name_jp: "炎の先見術",
            name_en: "Meteor",
            details: "Call down meteors to deal strike damage to random enemies.",
            requires: "Head",
            dep: {
                EthericCharge: 5,
                Singularity: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0.5*yl
            }
        },
        FireStar: {
            name_jp: "氷の星術",
            name_en: "Fire Star",
            details: "Astrological flame does fire damage to one enemy.",
            requires: "Head",
            dep: {
                EtherMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 3.5*yl
            }
        },
        BinaryFire: {
            name_jp: "氷の連星術",
            name_en: "Binary Fire",
            details: "Astrology calls forth flames that do fire damage to all enemies.",
            requires: "Head",
            dep: {
                FireStar: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4.5*yl
            }
        },
        Prominence: {
            name_jp: "氷の先見術",
            name_en: "Prominence",
            details: "Engulf the battlefield with a conflagration. All units are weaker to ice attacks.",
            requires: "Head",
            dep: {
                Inferno: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 6.5*yl
            }
        },
        IceStar: {
            name_jp: "雷の星術",
            name_en: "Ice Star",
            details: "Astrological glaciers do ice damage to one enemy.",
            requires: "Head",
            dep: {
                EtherMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3.5*yl
            }
        },
        BinaryIce: {
            name_jp: "雷の連星術",
            name_en: "Binary Ice",
            details: "Astrology calls forth an ice spear that damages all enemies with ice.",
            requires: "Head",
            dep: {
                IceStar: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4.5*yl
            }
        },
        Deluge: {
            name_jp: "雷の先見術",
            name_en: "Deluge",
            details: "Invoke a raging flood over the battlefield. All units are weaker to volt attacks.",
            requires: "Head",
            dep: {
                Cocytus: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 6.5*yl
            }
        },
        VoltStar: {
            name_jp: "エーテル圧縮",
            name_en: "Volt Star",
            details: "Astrological lightning does volt damage to one enemy.",
            requires: "Head",
            dep: {
                EtherMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3.5*yl
            }
        },
        BinaryThunder: {
            name_jp: "ダークエーテル",
            name_en: "Binary Thunder",
            details: "Astrology calls forth lightning for volt damage to all enemies.",
            requires: "Head",
            dep: {
                VoltStar: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4.5*yl
            }
        },
        Tempest: {
            name_jp: "星体観測",
            name_en: "Tempest",
            details: "Conjure a turbulent thunderstorm overhead. All units are weaker to fire attacks.",
            requires: "N/A",
            dep: {
                Thor: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 6.5*yl
            }
        },
        Supernova: {
            name_jp: "星体観測",
            name_en: "Supernova",
            details: "Conjures the primordial power of the heavens to strike enemies' weaknesses.",
            requires: "N/A",
            dep: {
                Meteor: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 0.5*yl
            }
        }
    },

    Wildling: {
        SpiritFang: {
            name_jp: "獣の心",
            name_en: "Nature Pact",
            details: "Wildling skill that allows a beast to take a mortal blow in your place.",
            requires: "N/A",
            unique: true,
            active: TRUE,
            max: 10
        },
        NaturePact: {
            name_jp: "ビー ストロア",
            name_en: "Spirit Fang",
            details: "Ranged attack to one enemy with equipped weapon, utilizing magical strength.",
            requires: "Head",
            dep: {
                BeastSoul: 3,
                PrimalEnergy: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 5*yl
            }
        },
        WildMastery: {
            name_jp: "獣たちの友情",
            name_en: "Wild Mastery",
            details: "Prerequisite for summoning beasts. Ailment success rate of beasts rises.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: yl
            }
        },
        BeastSoul: {
            name_jp: "獣王マスタリー",
            name_en: "Beast Soul",
            details: "Raise Max HP, ATK, and DEF of summoned beasts.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 5*yl
            }
        },
        Sacrifice: {
            name_jp: "ビースト帰還",
            name_en: "Sacrifice",
            details: "A beast may take a blow instead of an ally in the same row.",
            requires: "Arms",
            dep: {
                DismissBeast: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 5*yl
            }
        },
        PrimalEnergy: {
            name_jp: "獣の警戒",
            name_en: "Primal Energy",
            details: "Relaxes enemies, lowering their resistances for three turns.",
            requires: "N/A",
            dep: {
                PrimalDrums: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 4*yl
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
                x: 0,
                y: 2*yl
            }
        },
        PrimalDrums: {
            name_jp: "捨身の心得I",
            name_en: "Primal Drums",
            details: "Threatens enemies, lowering their defense for three turns.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 3*yl
            }
        },
        DismissBeast: {
            name_jp: "捨身の心得II",
            name_en: "Dismiss Beast",
            details: "Calls back a summoned beast. When they return, you regain the TP.",
            requires: "N/A",
            dep: {
                WildMastery: 1
            },
            active: TRUE,
            max: 1,
            coords: {
                x: 3*xl,
                y: yl
            }
        },
        CallCrow: {
            name_jp: "大鳥招来",
            name_en: "Call Bird",
            details: "Summons a large bird that does a Thrust attack and can Bind Head to one enemy.",
            requires: "Arms",
            dep: {
                WildMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        CallSnake: {
            name_jp: "巨象招来",
            name_en: "Call Snake",
            details: "Summons a great snake that deals strike damage and binds the arms.",
            requires: "Arms",
            dep: {
                WildMastery: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
        CallHound: {
            name_jp: "催眠梟招来",
            name_en: "Call Mole",
            details: "Summons a hunting hound that pierces enemies' feet and heals the party.",
            requires: "Arms",
            dep: {
                WildMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        CallSlime: {
            name_jp: "獅子王招来",
            name_en: "Call Slime",
            details: "Summons a viscous slime protect allies from elemental damage.",
            requires: "Arms",
            dep: {
                BeastSoul: 7,
                Sacrifice: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 6*yl
            }
        },
        CallCow: {
            name_jp: "土竜招来",
            name_en: "Call Cow",
            details: "Summons a wild, violent cow dealing random pierce damage and paralysis.",
            requires: "Arms",
            dep: {
                WildMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        CallOwl: {
            name_jp: "暴れ野牛招来",
            name_en: "Call Owl",
            details: "Summons a beguiling owl that may put all enemies to sleep.",
            requires: "Arms",
            dep: {
                WildMastery: 4
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        CallPasaran: {
            name_jp: "不定型生物招来",
            name_en: "Call Pasaran",
            details: "Summons an angry pasaran. Explosion damage will confuse all enemies. ",
            requires: "Arms",
            dep: {
                WildMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        CallTiger: {
            name_jp: "大蛇招来",
            name_en: "Call Tiger",
            details: "Summons a sabretooth tiger. Glare attacks will defeat all enemies. ",
            requires: "Arms",
            dep: {
                BeastSoul: 1,
                WildMastery: 6
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3*yl
            }
        },
        CallLion: {
            name_jp: "剣虎招来",
            name_en: "Call Lion",
            details: "Summons a majestic lion. Demands enemies' attention with its presence.  ",
            requires: "Arms",
            dep: {
                BeastSoul: 3,
                Sacrifice: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4*yl
            }
        },
        CallOoze: {
            name_jp: "毒アゲハ招来",
            name_en: "Call Ooze",
            details: "Summons a swamp ooze protect allies from physical damage.",
            requires: "Arms",
            dep: {
                BeastSoul: 5,
                Sacrifice: 2
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 5*yl
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
            active: TRUE,
            max: 10
        },
       BoltMastery: {
            name_jp: "弩マスタリー",
            name_en: "Bolt Mastery",
            details: "Revive once when at death's door to increase attack and decrease defense.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
       AdrenalineRush: {
            name_jp: "正射必中",
            name_en: "Adrenaline Rush",
            details: "Increase accuracy of skills.",
            requires: "N/A",
            dep: {
                Resilience: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        NightVision: {
            name_jp: "ナイトビジョン",
            name_en: "Night Vision",
            details: "Increase critical hit rate during the night.",
            requires: "N/A",
            dep: {
                Ambush: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 4*yl
            }
        },
        Resilience: {
            name_jp: "エクステンド",
            name_en: "Multi-Shot",
            details: "When using skills targeting one enemy, number of hits may rise.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4*yl
            }
        },
        ProperForm: {
            name_jp: "ダブルアクショ ン",
            name_en: "Proper Form",
            details: "Employ especially careful aim, increasing all skills' accuracy.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        SagittariusArrow: {
            name_jp: "ヘビーショット",
            name_en: "Sagittarius Arrow",
            details: "Crossbow: Fires a quick shot imbued with the element of your weapon.",
            requires: "Arms",
            dep: {
                ProperForm: 3,
                ArmorPiercer: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 3*yl
            }
        },
        SmokeGrenade: {
            name_jp: "前陣迫撃砲術",
            name_en: "Smoke Grenade",
            details: "Detonate a smoke bomb to blind all enemies.",
            requires: "Arms",
            dep: {
                Ambush: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 3*yl
            }
        },
        ApollosWrath: {
            name_jp: "スナイプⅠ",
            name_en: "Apollo's Wrath",
            details: "Crossbow: Summon the power of Apollo to burn enemies with ailments or binds.",
            requires: "Arms",
            dep: {
                FireBarrage: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 0
            }
        },
        HeavyShot: {
            name_jp: "スナイプⅡ",
            name_en: "Heavy Shot",
            details: "Crossbow: Heavy arrows deal pierce damage to a single enemy.",
            requires: "Arms",
            dep: {
                BoltMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: yl
            }
        },
        ArtemisEmbrace: {
            name_jp: "ランダムショット",
            name_en: "Artemis' Embrace",
            details: "Crossbow: Summon the power of Artemis to freeze enemies with ailments or binds.",
            requires: "Arms",
            dep: {
                IceBarrage: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: yl
            }
        },
        ErosCarnage: {
            name_jp: "ファイアバラージ",
            name_en: "Eros' Carnage",
            details: "Crossbow: Summon the power of Eros to electrocute enemies with ailments or binds.",
            requires: "Arms",
            dep: {
                VoltBarrage: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 2*yl
            }
        },
        ArmorPiercer: {
            name_jp: "フリーズバラージ",
            name_en: "Armor Piercer",
            details: "Crossbow: Bolts deal pierce/almighty damage that ignores enemy enhancements.",
            requires: "Arms",
            dep: {
                BoltMastery: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 2*yl
            }
        },
        FireBarrage: {
            name_jp: "サンダーバラージ",
            name_en: "Fire Barrage",
            details: "Crossbow: Special gunpowder deals pierce/fire damage to all enemies.",
            requires: "Arms",
            dep: {
                BoltMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        FrontMortar: {
            name_jp: "高速徹甲弾",
            name_en: "Front Mortar",
            details: "Crossbow: Pierce damage at one enemy. More effective from the front row.",
            requires: "Arms",
            dep: {
                HeavyShot: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 0
            }
        },
       IceBarrage: {
            name_jp: "レインフォール",
            name_en: "Ice Barrage",
            details: "Crossbow: Special gunpowder deals pierce/ice damage to all enemies.",
            requires: "Arms",
            dep: {
                BoltMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: yl
            }
        },
        VoltBarrage: {
            name_jp: "照 明弾",
            name_en: "Volt Barrage",
            details: "Crossbow: Special gunpowder deals pierce/volt damage to all enemies.",
            requires: "Arms",
            dep: {
                BoltMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 2*yl
            }
        },
        Cloudbuster: {
            name_jp: "発煙弾",
            name_en: "Cloudbuster",
            details: "Crossbow: Shoot a bolt into the sky, raining pierce damage next turn.",
            requires: "Arms",
            dep: {
                BoltMastery: 7
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
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
                x: 2*xl,
                y: 3.5*yl
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
            active: TRUE,
            max: 10
        },
        DeathBlight: {
            name_jp: "ブレイブハート",
            name_en: "Death Blight",
            details: "Throw a bucket of mysterious acid at enemies, hoping for the best.",
            requires: "N/A",
            dep: {
                Contagion: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        Contagion: {
            name_jp: "アメニモマケズ",
            name_en: "Contagion",
            details: "Launch nasty sewage at enemies. Biological warfare!.",
            requires: "N/A",
            dep: {
                Lullaby: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        CampMastery: {
            name_jp: "キャンプマス ター",
            name_en: "Camp Mastery",
            details: "HP and TP healed from Tents is increased, dead party members and petrified party members are also restored.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 3*yl
            }
        },
        Witchcraft: {
            name_jp: "応急蘇生",
            name_en: "Witchcraft",
            details: "Delve into the realms of witchcraft to learn occult magic.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 4.5*yl
            }
        },
        KeenNose: {
            name_jp: "鳴かずば討たれず",
            name_en: "Keen Nose",
            details: "You have a higher chance of finding rare items at harvesting points.",
            requires: "Head",
            dep: {
                Harvestry: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 2.5*yl
            }
        },
        DevilsCandle: {
            name_jp: "弱り目に祟り目",
            name_en: "Devil's Candle",
            details: "Purge the party's debuffs and heal them with occult magic.",
            requires: "Arms",
            dep: {
                Offering: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4*yl
            }
        },
        DustDevil: {
            name_jp: "探 知マスター",
            name_en: "Dust Devil",
            details: "Kick a dust cloud towards enemies,  but maybe that wasn't a great idea.",
            requires: "N/A",
            dep: {
                RottenEgg: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: yl
            }
        },
        RottenEgg: {
            name_jp: "解体マスター",
            name_en: "Rotten Egg",
            details: "Lower enemy strength for 4 turns. Status ailments increase its effect.",
            requires: "N/A",
            dep: {
                Lullaby: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
        Lullaby: {
            name_jp: "収穫マスター",
            name_en: "Lullaby",
            details: "Sing a lullaby, reminiscing of dear father... before he left us.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: yl
            }
        },
        StrangeSeeds: {
            name_jp: "みちくさ",
            name_en: "Strange Seeds",
            details: "Plant seeds that bind enemies' head, arm, or legs at the end of the turn..",
            requires: "N/A",
            dep: {
                Lullaby: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 2*yl
            }
        },
        Offering: {
            name_jp: "子守唄",
            name_en: "Offering",
            details: "Witchcraft: Sacrifice the user's health to heal an ally.",
            requires: "Head",
            dep: {
                Witchcraft: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        HarvestTime: {
            name_jp: "怪我の功名",
            name_en: "Harvest Time!",
            details: "Time to swing that scythe 'round and 'round... did I even hit anything?",
            requires: "Arms",
            dep: {
                Harvestry: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 3.5*yl
            }
        },
        Malediction: {
            name_jp: "不思議な種",
            name_en: "Malediction",
            details: "Witchcraft: Embrace the power of darkness to curse your enemies.",
            requires: "Arms",
            dep: {
                Witchcraft: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 5*yl
            }
        },
        SafeStroll: {
            name_jp: "帰宅マスター",
            name_en: "Safe Stroll",
            details: "Eliminate enemy encounters for a limited number of steps.",
            requires: "N/A",
            dep: {
                CampMastery: 1
            },
            active: TRUE,
            max: 5,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        DevilsSnare: {
            name_jp: "安全歩行",
            name_en: "Devil's Snare",
            details: "Remove buffs from all enemies and blast them with occult magic.",
            requires: "N/A",
            dep: {
                Malediction: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 5*yl
            }
        },
        ThornBind: {
            name_jp: "五分の魂",
            name_en: "Thorn Bind",
            details: "Summon your loyal plants to drain and bind enemies 3 ways. Maybe it'll work?",
            requires: "N/A",
            dep: {
                StrangeSeeds: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 2*yl
            }
        },
       Mesmerize: {
            name_jp: "二毛作",
            name_en: "Mesmerize",
            details: "Witchcraft: Hypnotize your enemies into forgetting their misfortunes. Removes Built up Ailment/Bind Resistance",
            requires: "N/A",
            dep: {
                DevilsCandle: 3,
                DevilsSnare: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 4.5*yl
            }
        },
        Harvestry: {
            name_jp: "野生の嗅覚",
            name_en: "Harvestry",
            details: "Gather resources at all chopping, mining and gathering points.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3*yl
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
            active: TRUE,
            max: 10
        },
        KatanaMastery: {
            name_jp: "刀マスタリー",
            name_en: "Katana Mastery",
            details: "Improves physical damage with Katanas; required for Katana skills.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 0
            }
        },
        Endure: {
            name_jp: "食いしばり",
            name_en: "Endure",
            details: "Has a chance of surviving death with 1 HP once per battle.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 2*xl,
                y: 1.5*yl
            }
        },
        UpwardSlash: {
            name_jp: "血染めの朱槍",
            name_en: "Upward Slash",
            details: "Katana: Deal slash damage then empower the next slash attack.",
            requires: "N/A",
            dep: {
                AmbushStance: 3
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 3.5*yl
            }
        },
        BloodyLance: {
            name_jp: "士気回復",
            name_en: "Bloody Lance",
            details: "Your attack power increases each time you deal a final blow.",
            requires: "N/A",
            dep: {
                Endure: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: yl
            }
        },
        MoraleBoost: {
            name_jp: "介錯",
            name_en: "Kaishaku",
            details: "Increase the morale of the allies, raising their maximum HP.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 3.5*yl
            }
        },
        ChargingThrust: {
            name_jp: "柄落 し",
            name_en: "Charging Thrust",
            details: "Katana: Deal pierce damage then empower the next pierce attack.",
            requires: "Arms",
            dep: {
                AmbushStance: 5
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 4.5*yl
            }
        },
        HiltStrike: {
            name_jp: "明星",
            name_en: "Hilt Strike",
            details: "Katana/Sword: A single strike that uses the hilt. May stun.",
            requires: "Arms",
            dep: {
                KatanaMastery: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 0
            }
        },
        MorningStar: {
            name_jp: "禍時",
            name_en: "Morning Star",
            details: "Katana/Sword: Slash all enemies. Stronger in sunlight, may blind.",
            requires: "Arms",
            dep: {
                KatanaMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: yl
            }
        },
        TwilightHour: {
            name_jp: "五輪の剣",
            name_en: "Twilight Hour",
            details: "Katana/Sword: Slash all enemies. Stronger in moonlight, may sleep.",
            requires: "Arms",
            dep: {
                KatanaMastery: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: x1,
                y: 2*yl
            }
        },
        "5RingSword": {
            name_jp: "精神統一",
            name_en: "5-Ring Sword",
            details: "Katana: Randomly slash all enemies, more hits with two swords.",
            requires: "Head",
            dep: {
                MorningStar: 5,
                TwilightHour: 5
            },
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 1.5*yl
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
                x: 3*xl,
                y: 2*yl
            }
        },
        WarriorMight: {
            name_jp: "先陣の名誉",
            name_en: "Warrior Might",
            details: "To perform follow up damage to most ally attacks.",
            requires: "Head",
            dep: {
                BloodyLance: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
                y: 0
            }
        },
        ForeHonor: {
            name_jp: "殿軍の誉れ",
            name_en: "Fore Honor",
            details: "Designate an attacker for 3 turns, receiving ATK up and acting first.",
            requires: "Head",
            dep: {
                MoraleBoost: 1
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 3*yl
            }
        },
        RearDignity: {
            name_jp: "野伏せの陣立",
            name_en: "Rear Dignity",
            details: "Designate a defender for 3 turns, receiving DEF up and acting last.",
            requires: "Arms",
            dep: {
                MoraleBoost: 3
            },
            active: TRUE,
            max: 10,
            coords: {
                x: xl,
                y: 4*yl
            }
        },
        AmbushStance: {
            name_jp: "一騎当千",
            name_en: "Ambush Stance",
            details: "Attacks against the designated row will be countered.",
            requires: "Legs",
            dep: {
                MoraleBoost: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
                y: 4.5*yl
            }
        },
        Alertness: {
            name_jp: "一斉射撃",
            name_en: "Alertness",
            details: "Raises awareness to reduce the chance of being ambushed.",
            requires: "Arms",
            dep: {
                /* none */ },
            active: TRUE,
            max: 5,
            coords: {
                x: 0,
                y: 0
            }
        },
        BlitzCommand: {
            name_jp: "乱れ竜の陣",
            name_en: "Blitz Command",
            details: "Commands every ally to strike one enemy simultaneously with their equipped weapon.",
            requires: "Arms",
            dep: {
                ForeHonor: 5,
                RearDignity: 5
            },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 3.5*yl
            }
        },
        SheathStrike: {
            name_jp: "逃げるが勝ち",
            name_en: "Sheath Strike",
            details: "Katana: Deal strike damage then empower the next strike attack.",
            requires: "Legs",
            dep: {
                AmbushStance: 7
            },
            active: TRUE,
            max: 5,
            coords: {
                x: 3*xl,
                y: 5.5*yl
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
            active: TRUE,
            max: 10
        },
        Overheat: {
            name_jp: "データ解析",
            name_en: "Overheat",
            details: "Gain superior attack power at the cost of HP loss each turn.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
            max: 10,
            coords: {
                x: 0,
                y: 206
            }
        },
        Bastion: {
            name_jp: "暗視",
            name_en: "Bastion",
            details: "Grow bigger, attracting more enemy hits and resisting ailments.",
            requires: "N/A",
            dep: {
                /* none */ },
            active: TRUE,
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
            active: TRUE,
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
            active: TRUE,
            max: 10,
            coords: {
                x: 2*xl,
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
            active: TRUE,
            max: 10,
            coords: {
                x: 3*xl,
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
                x: xl,
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
                x: 2*xl,
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
                x: 3*xl,
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
                x: xl,
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
                x: xl,
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
                x: 2*xl,
                y: 98
            }
        },
        AllOut: {
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
                x: 3*xl,
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
                x: xl,
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
                x: 2*xl,
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
                x: 3*xl,
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
                x: xl,
                y: 377
            }
        }
    }
};
