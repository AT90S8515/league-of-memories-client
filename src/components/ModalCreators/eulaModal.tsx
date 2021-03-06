import * as React from 'react';

import { ModalCreatorFunc } from "../../store/actionCreators/modal";
import { Modal } from "../ModalManager";
import Button from '../UI/Button';

const styles = {
  title: {
    textAlign: 'center',
  } as React.CSSProperties,
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  buttonText: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: 'LeagueFont',
    fontSize: 16,
  } as React.CSSProperties,
};

const eula = `End User License Agreement (EULA)
LEAGUE OF LEGENDS®
Last Modified September 23, 2014

League of Legends® is a free-to-play, session-based, multiplayer online battle arena computer game developed by Riot Games, Inc., a Delaware corporation (the “Game”).  Its wholly owned subsidiary, Riot Games Limited, an Irish limited company, operates and publishes the Game in the European Union, the Russian Federation, and other international territories, and provides related services.  In this License Agreement (as defined below), “Riot Games” means Riot Games Limitedand its licensees, as applicable; “you” and “your” mean the user of the computer on which the Game will be or has been installed and who therefore agrees to this License Agreement.

PLEASE READ THIS END USER LICENSE AGREEMENT (THIS “EULA” OR “LICENSE AGREEMENT”) CAREFULLY. BY CLICKING THE “ACCEPT" BUTTON BELOW OR USING THE GAME OR INSTALLING THE GAME CLIENT SOFTWARE (THE “SOFTWARE”), YOU AGREE THAT THIS LICENSE AGREEMENT IS ENFORCEABLE LIKE ANY WRITTEN CONTRACT SIGNED BY YOU. IF YOU DO NOT AGREE TO ALL OF THE TERMS OF THIS LICENSE AGREEMENT, CLICK ON THE BUTTON THAT INDICATES THAT YOU DO NOT AGREE TO ACCEPT THE TERMS OF THIS LICENSE AGREEMENT, AND DO NOT COMPLETE INSTALLATION OF THE SOFTWARE.  BY ENTERING INTO THIS LICENSE AGREEMENT, YOU REPRESENT THAT YOU ARE AN ADULT AND HAVE THE LEGAL CAPACITY TO ENTER INTO A CONTRACT IN THE JURISDICTION WHERE YOU RESIDE.



I. LIMITED USE LICENSE
Subject to the terms and conditions of this License Agreement and your agreement therewith, Riot Games hereby grants to you and you hereby accept a limited, non-exclusive, non-transferable license, for such time until either you or Riot Games terminates this License Agreement, to internally install and execute solely as a component of the Game (i) the Software and related explanatory materials (“Documentation”); and (ii) any Software upgrades, patches, subsequent versions, and updates (collectively, “Updates”) licensed to you by Riot Games.  The Software and the Game are provided for your individual, non-commercial, entertainment purposes only and may not be used for any other purpose or in any other way.  Except as may be expressly permitted by Riot Games, you may not sell, copy, exchange, transfer, publish, assign or otherwise distribute anything you copy or derive from the Software or the Game.  The license granted to you herein shall be royalty-free, except that the right to license certain Game Assets (as defined in the Terms of Use) may be obtained only by acquiring and redeeming Riot Points.



II. REQUIREMENTS
In installing and using the Software and playing the Game, you acknowledge that you have read, understand and agree with the terms of this License Agreement.  You must also: (i) read, understand and agree to the Riot Games Terms of Use, (the “Terms of Use”), which are located at the bottom of the Site and incorporated herein by reference; (ii) register for an account in the Game (an “Account”) (as further explained in the Terms of Use); and (iii) meet the hardware and connection requirements published on the various Riot Games websites (including but not limited to http://oce.leagueoflegends.com and the related webpages, all of which are hereafter referred to singly and collectively as, the “Site”). These requirements may change as the Game evolves.  You are wholly responsible for the cost of all internet connection fees, along with all equipment, servicing, or repair costs necessary to allow you access to the Game.



III. ADDITIONAL LICENSE LIMITATIONS
The limited license granted to you in Section I is subject to the additional limitations set forth below in this Section III.  Any use of the Software in violation of the license limitations set forth below is an unauthorized use of the Software outside of the license granted to you in Section I, and will be regarded as an infringement of the license terms and copyrights Riot Games or its licensors holds in and to the Software and the Game.  You agree that you will not, under any circumstances:



A. Sell, lease, rent, loan, sublicense or otherwise transfer the Software, or grant a security interest in or transfer reproductions of the Software or the Game, to a third party;

B. Copy, photocopy, reproduce, translate, reverse engineer, decompile, derive source code from, or disassemble, in whole or in part, the Software or the Game, or create derivative works based on the Game, except that you are authorized to (i) make one (1) copy of the Software and the Documentation for personal archival purposes only; and (ii) use third party image and video capture software to capture the output of the Software as audio, video and/or still image files solely for personal, not for profit use pursuant to the Terms of Use and any applicable Riot Games policies pertaining to audio or video creation;

C. Modify or cause to be modified any files that are part of the Software in any way not expressly authorized by Riot Games;

D. Make use of, or cause any other person or entity to make use of, the Software or the Game for any commercial purpose, including but not limited to (i) participating in the Game in exchange for payment (e.g. “leveling” services); or (ii) selling in-Game items outside of the Game, or selling Game Accounts, except such transactions as may be authorized by Riot Games and conducted via services provided by Riot Games; or

E. Use any unauthorized third-party programs that interact with the Software in any way, including but not limited to, “mods,” “hacks,” “cheats,” “scripts,” “bots,” “trainers,” or automation programs, or any third-party programs that intercept, emulate or redirect any communication between the Software and Riot Games, or that collect information about the Game by reading areas of memory used by the Software to store information about the Game.



IV. OWNERSHIP
All rights and title in and to the Software and the Game, and all content included therein (including, without limitation, Accounts, computer code, titles, objects, artifacts, characters, character names, locations, location names, stories, story lines, dialog, catch phrases, artwork, graphics, structural or landscape designs, animations, sounds, musical compositions and recordings, Riot Points, audio-visual works, character likenesses, and methods of operation) are owned by Riot Games or its licensors.  The Software and the Game and all content therein are protected by Ireland, United States, Australia and other international intellectual property laws.  Riot Games and its licensors reserve all rights in connection with the Software and the Game, including, without limitation, the exclusive right to create derivative works therefrom, and you agree that you will not create any work of authorship based on the Game except as expressly permitted by Riot Games.  You acknowledge and agree that you have no interest, monetary or otherwise, in any feature or content contained in the Game. You further acknowledge and agree that you shall have no ownership or other property interest in your Account, and you acknowledge and agree that all rights in and to the Account are and shall forever be owned by and inure to the benefit of Riot Games.  Please see the Terms of Use for a complete espousal of all of Riot Games’ ownership rights.



V. CODE OF CONDUCT
While using the Software and playing the Game, you agree to comply with all applicable laws, rules and regulations.  You also agree to comply with certain additional rules that govern your use of the Game (the “Code of Conduct”). The Code of Conduct is not meant to be exhaustive, and Riot Games reserves the right to modify this Code of Conduct at any time, as well as take any appropriate disciplinary measures including Account termination and deletion to protect the integrity and spirit of the Game, regardless of whether a specific behavior is listed here as prohibited.  In addition to this Code of Conduct, please see the Summoner’s Code for additional guidance on exemplary game-play behavior.  The following are examples of behavior that warrant disciplinary measures:

A.  Impersonating any person, business, or entity, including an employee of Riot Games, or communicating in any way that makes it appear that the communication originates from Riot Games;

B. Posting identifying information about yourself, or any other user, in the Game;

C. Harassing, stalking, or threatening any other users in the Game;

D. Removing, altering or concealing any copyright, trademark, patent or other proprietary rights notices of Riot Games contained in the Game and/or the Software.  You also may not transmit content that violates or infringes the rights of others, including without limitation, patent, trademark, trade secret, copyright, publicity, personal rights or other proprietary or non-proprietary rights;

E. Transmitting or communicating any content which, in the sole and exclusive discretion of Riot Games, is deemed offensive, including, but not limited to, language that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, or racially, ethnically, or otherwise objectionable;

F. Transmitting or facilitating the transmission of any content that contains a virus, corrupted data, trojan horse, bot keystroke logger, worm, time bomb, cancelbot or other computer programming routines that are intended to and/or actually damage, detrimentally interfere with, surreptitiously intercept or mine, scrape or expropriate any system, data or personal information;

G. Spamming chat, whether for personal or commercial purposes, by disrupting the flow of conversation with repeated postings of a similar nature;

H. Participating in any action which, in the sole and exclusive judgment of Riot Games, “exploits” an undocumented aspect of the Game in order to secure an unfair advantage over other users;

I. Participating in any action which, in the sole and exclusive judgment of Riot Games, defrauds any other user of the Game, including, but not limited to, by “scamming” or “social engineering;”

J. Accessing or attempting to access areas of the Game or Game servers that have not been made available to the public;

K. Logging out, disconnecting or exiting the Game during live game-play.  Riot Games’ automated Leaverbuster® system tracks this data and may issue temporary bans to users who frequently leave during live game-play.  The length of the temporary ban will increase over time if a particular Account continues to leave during live game-play; or

L. Selecting a Summoner name that is falsely indicative of an association with Riot Games, contains personally identifying information, infringes on the proprietary or non-proprietary rights of third parties, or that is offensive, defamatory, vulgar, obscene, sexually explicit, racially, ethnically, or otherwise objectionable. You may not use a misspelling or an alternative spelling to circumvent this restriction on Summoner name choices.  Riot Games may modify any name which, in the sole and exclusive judgment of Riot Games, violates this provision without further notification to you, and may take further disciplinary measures, including Account termination, for repeated violations.



VI. CONSENT TO MONITORING
 When you are using the Software, the Software may monitor your computer's random access memory (RAM) for unauthorized third party programs prohibited by Section III.E that interact with the Software and/or the Game.  In the event that the Software detects such an unauthorized third party program, information may be communicated back to Riot Games, including the name of your Account, your internet protocol (IP) address, details about the unauthorized third party program detected, and the time and date that the unauthorized third party program was detected, along with the hardware specs and performance characteristics of your computer, with or without additional notice to you. No other information about you or your computer will be communicated to Riot Games with the Software.  If the Software detects the use of an unauthorized third party program, your access to the Game may be terminated by notice to you.



VII. UPDATES AND MODIFICATIONS
 A. The Software and the Game.  Riot Games may provide Updates to the Software that must be installed for you to continue to play the Game.  Each time you launch the Software to play the Game, you hereby give your consent to Riot Games to remotely install any Updates to the Software that resides on your computer, with or without additional notification to you.

 B. License Agreement.  Riot Games reserves the right, in its sole and absolute discretion by notice to you to revise, update, change, modify, add to, supplement, or delete certain terms of this License Agreement as the Game and the law evolve (“Changes”); provided, however, that material changes to this License Agreement will not be applied retroactively.  Such Changes will be effective upon your acceptance. You are deemed to have accepted the changes if you continue to use your Account, the Site or he Game after the Changes are made.  If any Changes to this License Agreement are unacceptable to you or cause you to no longer be in agreement or compliance with this License Agreement, or if at any time you no longer agree with any portion of the then-current version of this License Agreement, we reserve the right to terminate this License Agreement pursuant to our right of termination under clause VIII and you have the right to terminate this Agreement under clause VIII. You can review the most current version of this License Agreement by clicking on the “EULA” link located at the bottom of the Site. If the Software requires an Update at the time you launch the Software to access the Game, you will have the opportunity to review and to accept or reject the current version of this License Agreement.



VIII. TERMINATION OF LICENSE AGREEMENT
 This License Agreement is effective until terminated. You may terminate this License Agreement at any time and for any reason by notifying Riot Games of your intention to terminate.  Riot Games may terminate this License Agreement at any time, for any reason or no reason.  Termination by Riot Games will be effective upon notice to you, termination or deletion of your Account, or its decision to permanently discontinue offering and/or supporting the Game.  Upon termination, whether by you or Riot Games, the license granted to you in Section I shall immediately terminate, and you must immediately and permanently remove the Software from your computer’s permanent memory and destroy any and all copies of the Software that may be in your possession.



IX. TERMINATION OF GAME SERVICE
 The Game is an “on-line” game that must be played over the internet through a service provided by or on behalf of Riot Games.  You acknowledge and agree that Riot Games, in its sole and absolute discretion, may stop providing support for or access to the Game at any time, for any reason or no reason. You also agree that Riot Games may change, modify, suspend, “nerf,” discontinue, or restrict your access to any features or parts of the Game at any time without notice or liability to you. According to the Terms of Use, you acknowledge that you have no interest, monetary or otherwise, in any feature of or content in the Software or the Game.



X. EXPORT CONTROLS
 The Software is subject to all applicable export restrictions.  You must comply with all export and import laws and restrictions and regulations of any Irish, United States or foreign agency or authority relating to the Software and its use. The Software may not be re-exported, downloaded or otherwise exported to, or downloaded or installed by, a national or resident of any country to which Ireland or the United States has embargoed goods, or to anyone on the U.S. Treasury Department's list of Specially Designated Nationals or the U.S. Commerce Department's Table of Denial Orders. You represent and warrant that you are not located in, under the control of, or a national or resident of any such country or on any such list.



XI. WARRANTY DISCLAIMER
SUBJECT TO ANY RIGHTS WHICH YOU MAY HAVE UNDER THE CONSUMER GUARANTEES AS CONTAINED IN THE AUSTRALIAN CONSUMER LAW (“ACL”), THE GAME (INCLUDING WITHOUT LIMITATION THE SOFTWARE AND THE DOCUMENTATION) IS PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, EXPRESS OR IMPLIED.  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AND SUBJECT TO THE ACL, RIOT GAMES DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, WHICH MIGHT APPLY TO THE GAME OR THE SOFTWARE, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ANY WARRANTIES THAT MAY ARISE FROM COURSE OF DEALING, COURSE OF PERFORMANCE OR USAGE OF TRADE, AND ANY WARRANTIES AS TO THE ACCURACY, RELIABILITY OR QUALITY OF ANY CONTENT OR INFORMATION CONTAINED WITHIN THE GAME AND/OR THE SOFTWARE.  SUBJECT TO ANY REMEDIES WHICH YOU MAY BE ENTITLED TO UNDER THE ACL, RIOT GAMES DOES NOT WARRANT THAT THE GAME AND/OR THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SOFTWARE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.  YOU ASSUME ALL RESPONSIBILITY FOR SELECTING THE GAME AND/OR THE SOFTWARE TO ACHIEVE YOUR INTENDED RESULTS, AND FOR THE INSTALLATION OF, USE OF, AND RESULTS OBTAINED FROM THE GAME AND THE SOFTWARE.

FOR THE AVOIDANCE OF DOUBT, RIOT GAMES DOES NOT DISCLAIM WARRANTIES FOR INTENTIONAL BREACH OF DUTY.  THE WARRANTY DISCLAIMER DOES NOT AFFECT THE LIMITATION OF LIABILITY AS SET OUT BELOW.

Because some states or jurisdictions do not allow the disclaimer of implied warranties, the forgoing disclaimer may, in whole or in part, not apply to you.



XII. INDEMNIFICATION
YOU HEREBY AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS RIOT GAMES FROM AND AGAINST ANY AND ALL CLAIMS, LAWSUITS, DAMAGES, LOSSES, LIABILITIES AND COSTS (INCLUDING ATTORNEYS’ FEES) THAT DIRECTLY OR INDIRECTLY ARE ATTRIBUTABLE TO YOUR FAULT AND ARISE OR RESULT FROM YOUR USE OR MISUSE OF THE GAME AND/OR THE SOFTWARE, OR ANY VIOLATION BY YOU OF ANY OF THE PROVISIONS OF THIS LICENSE AGREEMENT.  Riot Games reserves the right, at its own expense and in its sole and absolute discretion, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with Riot Games in asserting any available defenses.



XIII. LIMITATION OF LIABILITY
UNLESS OTHERWISE REQUIRED BY LAW, UNDER NO CIRCUMSTANCES, AND UNDER NO LEGAL THEORY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, SHALL RIOT GAMES BE LIABLE TO YOU OR ANY OTHER PERSON FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS, LOSS OF DATA, LOSS OF GOOD WILL, OR LOST PROFITS), OR ANY DAMAGES FOR GROSS NEGLIGENCE OF ANY KIND (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES) ARISING FROM YOUR USE OR MISUSE OF THE SOFTWARE AND/OR THE GAME, EVEN IF RIOT GAMES KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES.  FURTHER, RIOT GAMES SHALL NOT BE LIABLE IN ANY WAY FOR ANY LOSS OR DAMAGE TO PLAYER CHARACTERS, VIRTUAL GOODS (E.G., WEAPONS, SPELLS, ARMOR, SKINS, ETC.) OR VIRTUAL CURRENCY, RIOT POINTS, ACCOUNTS, STATISTICS, OR USER STANDINGS, RANKS, OR PROFILE INFORMATION STORED BY THE GAME. RIOT GAMES SHALL NOT BE RESPONSIBLE FOR ANY INTERRUPTIONS OF SERVICE, INCLUDING WITHOUT LIMITATION ISP DISRUPTIONS, SOFTWARE OR HARDWARE FAILURES, OR ANY OTHER EVENT WHICH MAY RESULT IN A LOSS OF DATA OR DISRUPTION OF SERVICE.  UNLESS OTHERWISE REQUIRED BY LAW, IN NO EVENT SHALL RIOT GAMES BE LIABLE FOR ANY DAMAGES IN EXCESS OF ANY AMOUNT YOU HAVE PAID TO RIOT GAMES FOR GAME-RELATED TRANSACTIONS, IF ANY, DURING THE SIX (6) MONTHS IMMEDIATELY PRIOR TO THE TIME YOUR CAUSE OF ACTION AROSE.

Notwithstanding the aforementioned limitations of liability nothing in this agreement shall limit Riot Games' liability (i) for damage from injury to life, body or health due to negligent breach of duty or intentional or negligent breach of duty by a legal representative or a person used to perform an obligation of Riot Games or (ii) for other damage arising from a grossly negligent breach of duty by Riot Games or intentional or negligent breach of duty by a legal representative or a person used to perform an obligation of Riot Games; (iii) for intentional misconduct; (iv) for damage arising from a negligent breach of an obligation that is essential for the performance of the contract by Riot Games (“Cardinal Duties”) to the extent that is typical and foreseeable; (v) for any guarantee given by Riot Games to you; and (vi) for any liability under a jurisdiction’s applicable product liability legislation, including, but not limited to, the ACL for residents of Australia.

Because certain states or jurisdictions do not allow the exclusion or the limitation of liability, in such states or jurisdictions, the liability of Riot Games shall be limited to the fullest extent permitted by applicable law.



XIV. EQUITABLE REMEDIES
You hereby acknowledge and agree that Riot Games would suffer irreparable harm if this License Agreement were not specifically enforced.  Consequently, in addition to such monetary and other relief as may be recoverable at law, you agree that Riot Games shall be entitled to specific performance or other injunctive relief, without bond, other security, or proof of damages (unless otherwise required in your jurisdiction), as remedy for any breach or threatened breach of this License Agreement.  Additionally, in the event any legal or administrative action or proceeding is brought by either party in connection with this License Agreement and consistent with Section XV below, the prevailing party in such action or proceeding shall be entitled (subject to any court order) to recover from the other party all the costs, attorneys’ fees and other expenses incurred by such prevailing party as the result of the action or proceeding.



XV. LEGAL DISPUTES
A. Negotiations.  Disputes can be expensive and time consuming for both parties. In an effort to accelerate resolution and reduce the cost of any dispute or claim related to this License Agreement (“Claim”), you and Riot Games agree to first attempt to informally negotiate any Claim for at least thirty (30) days (except those Claims expressly excluded in Section XV.B below).  Riot Games will send its notice to the address it has on file to the extent that you have provided additional contact information to Riot Games (e.g. by participating in a promotional or survey, or contacting a customer services representative).  Otherwise, Riot Games will send its notice to the email address associated with your Account.  You will send your notice to Riot Games, Ltd., P.O. Box 11989, Dublin 2, IRELAND, Attn: Legal Department.  Please note that this informal resolution procedure does not suspend any statutory limitation periods applicable to the bringing of a Claim. B. Exceptions to Negotiations. To the extent permitted under applicable law, you and Riot Games agree that the following Claims are not subject to the above provisions concerning negotiations: (i) any Claims seeking to enforce or protect, or concerning the validity of, any of your or Riot Games’ intellectual property rights; (ii) any Claim related to, or arising from, allegations of theft, piracy, invasion of privacy or unauthorized use; and (iii) any claim for equitable relief.  To the extent applicable, you further agree not to bring Claims on a representative or class member basis, or as a private attorney general.  In addition to the foregoing, either party may assert an individual action in small claims court (or equivalent) for Claims that are within the scope of such courts’ jurisdiction in lieu of litigation.  C. Governing Law. Except as otherwise provided in this License Agreement, this License Agreement shall be governed by, and will be construed under, the laws of Ireland, without regard to conflict of law principles. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.  Other laws may apply if you choose to access the Game from outside of Ireland.  In such an event, those local laws shall affect this License Agreement only to the extent necessary in that jurisdiction, and this License Agreement shall be interpreted to give maximum effect to the terms and conditions in this License Agreement.  You are responsible for compliance with all local laws if and to the extent local laws are applicable. The New Zealand Consumer Guarantees Act of 1993 (the “Act”) may apply to the Game if you access the Game from, and are a resident of, New Zealand.  Notwithstanding anything to the contrary in this License Agreement, if the Act applies then you may have other rights or remedies as set out in the Act which may apply in addition to or instead of those set out in this License Agreement.  If you access the Game from, and are a resident of, the European Community and you are a consumer, you may have other or additional mandatory rights or remedies by law as set out in this License Agreement.  The ACL may apply to the Game if you access the Game from, and are a resident of, Australia.  Notwithstanding anything to the contrary in this Agreement, if the ACL applies then you may have other rights or remedies as set out in the ACL which may apply in addition to or instead of those set out in this Agreement.



XVI. NOTICES
Except as otherwise expressly provided herein, all notices given by you or required under this Agreement shall be in writing and addressed to: Riot Games, Ltd., PO. Box 11989, Dublin 2, IRELAND. All notices given by Riot Games under this Agreement are validly given if sent to you to the address it has on file to the extent that you have provided additional contact information to Riot Games (e.g. by participating in a promotional or survey, or contacting a customer services representative), or to the email address associated with your Account.



XVII. MISCELLANEOUS
This License Agreement represents the complete agreement between you and Riot Games with respect to the subject matter hereof, and supersedes any prior or contemporaneous agreements between you and Riot Games; provided however that this License Agreement shall coexist with, and shall not supersede, the Terms of Use or the Privacy Policy.  To the extent that the provisions of this License Agreement conflict with the Terms of Use, the conflicting provisions in the Terms of Use shall govern.  The Game is operated by Riot Games in Ireland. Those who choose to access the Game from locations outside Ireland do so on their own initiative and are responsible for compliance with applicable local laws.  Riot Games’ failure to enforce any provision of this License Agreement shall in no way be construed to be a present or future waiver of such provision, nor in any way affect the right of any party to enforce each and every such provision thereafter. The express waiver by Riot Games of any provision, condition or requirement of this License Agreement shall not constitute a waiver of any future obligation to comply with such provision, condition or requirement. If any provision of this License Agreement is held to be invalid or unenforceable for any reason, such provision shall be reformed to the extent necessary to make it enforceable to the maximum extent permissible so as to affect the intent of the parties, and the remainder of this License Agreement shall continue in full force and effect.  If, however, it is determined that such provision cannot be reformed, then that provision shall be deemed severable from these terms and shall not affect the validity and enforceability of any remaining provisions.  The provisions of Sections IV, and X through XVI shall survive any termination of this License Agreement.  If you have any questions concerning these terms and conditions, or if you would like to contact Riot Games for any other reason, please contact Riot Games support at support@riotgames.com.



YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THE FOREGOING END USER LICENSE AGREEMENT AND AGREE THAT BY CLICKING “ACCEPT” AND/OR INSTALLING THE SOFTWARE AND PLAYING THE GAME, YOU ARE ACKNOWLEDGING YOUR AGREEMENT TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS LICENSE AGREEMENT.
`;

const eulaModalCreator: ModalCreatorFunc = (close) => ({
  title: <p style={styles.title}>REVIEW THIS EULA</p>,
  body: <p style={{whiteSpace: 'pre-wrap'}}>{eula}</p>,
  footer:
  <div style={styles.footer}>
    <Button onClick={close}>
      <p style={styles.buttonText}>Accept</p>
    </Button>
    <Button onClick={close}>
      <p style={styles.buttonText}>Decline</p>
    </Button>
  </div>,
} as Modal);

export default eulaModalCreator;
