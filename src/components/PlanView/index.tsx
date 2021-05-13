import {Component, ReactNode} from "react";
import {FlatList, ListRenderItemInfo, RefreshControl, Text, View} from "react-native";
import {Item} from "./Item";
import * as React from 'react';
import {InfoHeader} from "../InfoHeader";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {ThemeContext} from "../themeContext/theme-context";
import {ClassSettings} from "../../providers/settings";
import {Lesson} from "../../providers/moodle";
import {LessonHelper} from "../../helpers/lessons";
import {v4} from 'uuid';

interface PlanViewProps {
  plan: any;
  onRefresh: (done: () => void) => void;
  classSettings: ClassSettings;
}

@observer
export class PlanView extends Component<PlanViewProps> {

  static contextType = ThemeContext;

  @observable
  private refreshing: boolean = false;

  constructor(props: PlanViewProps) {
    super(props);
  }

  private refreshingDone() {
    this.refreshing = false;
  }

  public render(): ReactNode {
    return (
        <View
            style={{
              backgroundColor: this.context.theme == 'light' ? '#FFFFFF' : '#282c3d',
            }}>
          <FlatList scrollEnabled={true}
                    data={this.props.plan.lessons}
                    refreshControl={<RefreshControl refreshing={this.refreshing} onRefresh={() => {
                      this.refreshing = true;
                      this.props.onRefresh(this.refreshingDone.bind(this));
                    }}/>}
                    keyExtractor={() => v4()}
                    renderItem={(lesson: ListRenderItemInfo<Lesson>) => (
                        <Item key={v4()}
                              hide={!LessonHelper.isAffected(this.props.classSettings, lesson.item)}
                              entry={lesson}
                              day={(this.props.plan.date)}/>
                    )}
                    ListHeaderComponent={() => (
                        <InfoHeader day={this.props.plan.date}
                                    missingTeachers={this.props.plan.missingTeachers}
                                    usedTeachers={this.props.plan.usedTeachers}/>
                    )}
                    ListFooterComponent={() => (
                        <Text>Alle Angaben ohne Gewähr!</Text>
                    )}/>
        </View>
    );
  }
}